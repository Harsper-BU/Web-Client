import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Main from "./pages/main/Main";
import DetectionList from "./components/monitoring/DetectionList";
import CameraList from "./components/monitoring/CameraList";
import Analytics from "./components/monitoring/Analytics";

function App() {
  ///http
  const detections = [
    {
      id: 1,
      image: "",
      location: "경기 성남시 수정구 장한로 42",
      cameraId: "CAM-001",
      timestamp: "2025-07-14 14:30:25",
    },
    {
      id: 2,
      image: "",
      location: "경기 성남시 수정구 장한로 42",
      cameraId: "CAM-001",
      timestamp: "2025-07-19 09:10:15",
    },
    {
      id: 3,
      image: "",
      location: "경기 성남시 수정구 장한로 42",
      cameraId: "CAM-001",
      timestamp: "2025-07-18 18:45:00",
    },
    {
      id: 4,
      image: "",
      location: "경기 성남시 수정구 장한로 42",
      cameraId: "CAM-004",
      timestamp: "2025-07-17 11:05:45",
    },
  ];

  //RTSP / HLS

  const cameras = [
    {
      cameraId: "CAM-001",
      status: true,
      location: "경기도 성남시 창업로 교차로",
      updatedAt: "2025-01-15 13:12:10",
    },
    {
      cameraId: "CAM-002",
      status: false,
      location: "서울특별시 강남구 테헤란로 212",
      updatedAt: "2025-01-15 10:45:00",
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route element={<Main />}>
            <Route index element={<DetectionList detections={detections} />} />
            <Route path="camera" element={<CameraList cameras={cameras} />} />
            <Route path="analytics" element={<Analytics />} />
            {/* <Route index element={<Navigate to='live' replace />} />
            <Route path='live' element={<DetectionList />}/> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
