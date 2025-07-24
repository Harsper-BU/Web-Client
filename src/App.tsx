import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Main from "./pages/main/Main";
import DetectionList from "./components/monitoring/DetectionList";
import CameraList from "./components/monitoring/CameraList";
import Analytics from "./components/monitoring/Analytics";
import StreamCard from "./components/monitoring/StreamCard";

function App() {
  ///http
  const detections = [
    { id: 1, label: 'person', confidence: 0.92, timestamp: Date.now() - 1000, camera_id: 'CAM-01', image: '' },
    { id: 2, label: 'car', confidence: 0.88, timestamp: Date.now() - 2000, camera_id: 'CAM-01', image: '' },
    { id: 3, label: 'person', confidence: 0.95, timestamp: Date.now() - 5000, camera_id: 'CAM-01', image: '' },
    { id: 4, label: 'bicycle', confidence: 0.78, timestamp: Date.now() - 8000, camera_id: 'CAM-02', image: '' },
  ];

  
  // Big Buck Bunny (샘플 비디오)
  // https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8\
  
  //  HLS
  const dummyStream = {
    cameraId: "CAM-001",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route element={<Main />}>
            <Route index element={<DetectionList detections={detections} />} />
            <Route path="camera" element={<CameraList cameras={{...dummyStream, status: true}} />} />
            <Route path="stream" element={<StreamCard {...dummyStream} />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
