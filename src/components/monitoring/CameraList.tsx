import styles from "./CameraList.module.css";
import CameraItem from "./CameraItem";
import axios from "axios";
import { useEffect, useState } from "react";

const CameraList = ({ cameras }) => {
  // const cameraList = Array.isArray(cameras) ? cameras : [cameras];
  const [cameraList, setCameraList] = useState([
    {
      deviceId: "camera001",
      status: "on",
      address: "동탄역 더샵 센트럴파크2차",
      lastUpdate: [2025, 7, 21, 0, 0],
      ipAddress: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    },
  ]);
  const cameraStatus = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_IP}/auth/camera`, {
        headers: {
          Authorization: localStorage.getItem("harsper-token"),
        },
      });
      setCameraList(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    cameraStatus();
  }, []);
  return (
    <div className={styles.container}>
      {cameraList.map((cam) => (
        <CameraItem
          key={`${cam.deviceId}-${cam.lastUpdate.join()}`}
          cam={cam}
        />
      ))}
    </div>
  );
};

export default CameraList;
