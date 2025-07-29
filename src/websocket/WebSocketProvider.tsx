import { createContext, useContext, useEffect, useRef, type ReactNode, type FC } from "react";
import SockJS from "sockjs-client";
import { Client, over, type Message } from "stompjs";


interface WebSocketContextType {
  sendMessage: (destination: string, body: any) => void;
}

const WebSocketContext = createContext<WebSocketContextType | null>(null);

export const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  if (!context) throw new Error("useWebSocket must be used within WebSocketProvider");
  return context;
};

export const WebSocketProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const stompClient = useRef<Client | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("harsper-token");
    if (!token) return;
    const socket = new SockJS("http://localhost:8081/ws");
    const client: Client = over(socket);

    client.connect(
      { Authorization: `Bearer ${token}` },
      () => {
        console.log("소켓 연결 성공");

        client.subscribe("/sub/violation-alert", (message:Message) => {
          console.log("메세지가 왔어요:", message.body);
        });
      },
      (error:unknown) => {
        console.error("웹소켓 에러:", error);
      }
    );

    stompClient.current = client;

    return () => {
      if (stompClient.current) {
        stompClient.current.disconnect(() => {
          console.log("웹소켓 연결 종료");
        });
      }
    };
  }, []);
  const sendMessage = (destination: string, body: any) => {
    if (stompClient.current && stompClient.current.connected) {
      stompClient.current.send(destination, {}, JSON.stringify(body));
    }
  };

  return (
    <WebSocketContext.Provider value={{ sendMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
};
