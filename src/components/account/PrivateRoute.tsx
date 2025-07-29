import { Navigate, Outlet } from "react-router-dom";
import { WebSocketProvider } from "../../websocket/WebSocketProvider";

export default function PrivateRoute() {
  const token = localStorage.getItem("harsper-token");
  if (!token) return <Navigate to="/" replace />;

  return (
    <WebSocketProvider>
      <Outlet />
    </WebSocketProvider>
  );
}