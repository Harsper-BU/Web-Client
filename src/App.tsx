import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Main from "./pages/main/Main";
import DetectionList from "./components/monitoring/DetectionList";
import CameraList from "./components/monitoring/CameraList";
import Analytics from "./components/monitoring/Analytics";
import Login from "./components/account/Login";
import Join from "./components/account/Join";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route element={<Main />}>
            <Route index element={<DetectionList />} />
            <Route path="camera" element={<CameraList />} />

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
