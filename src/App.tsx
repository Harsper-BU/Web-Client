import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Main from "./pages/main/Main";
import DetectionList from "./components/monitoring/DetectionList";
import CameraList from "./components/monitoring/CameraList";
import Analytics from "./components/monitoring/Analytics";
import StreamCard from "./components/monitoring/StreamCard";
import Join from "./components/account/join";
import Login from "./components/account/Login";

function App() {

  // Big Buck Bunny (샘플 비디오)
  // https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8\

  //  HLS
  // streamUrl : 'http://112.151.59.182:8080/hls/stream.m3u8'

  const dummyStream = {
    cameraId: "CAM-001",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route element={<Main />}>
            <Route index element={<DetectionList />} />
            <Route
              path="camera"
              element={
                <CameraList cameras={{ ...dummyStream, status: true }} />
              }
            />
            <Route path="stream" element={<StreamCard {...dummyStream} />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>
        </Route>

        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
