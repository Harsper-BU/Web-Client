import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Main from "./pages/main/Main";
import DetectionList from "./components/monitoring/DetectionList";
import CameraList from "./components/monitoring/CameraList";
import Analytics from "./components/monitoring/Analytics";
import Login from "./components/account/Login";
import Join from "./components/account/Join";
import PrivateRoute from "./components/account/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route element={<PrivateRoute/>}>
          <Route element={<Header />}>
            <Route path="/main" element={<Main />}>
              <Route index element={<DetectionList />} />
              <Route path="camera" element={<CameraList />} />
              <Route path="analytics" element={<Analytics />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
