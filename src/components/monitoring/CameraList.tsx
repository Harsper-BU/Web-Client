import styles from "./CameraList.module.css";
import CameraItem from "./CameraItem";

const CameraList = ({ cameras }) => {
  const cameraList = Array.isArray(cameras) ? cameras : [cameras];

  return (
    <div className={styles.container}>
      {cameraList.map((cam) => (
        <CameraItem key={`${cam.cameraId}-${cam.updatedAt}`} cam={cam} />
      ))}
    </div>
  );
};

export default CameraList;
