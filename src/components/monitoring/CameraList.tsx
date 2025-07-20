import styles from "./CameraList.module.css";
import CameraItem from "./CameraItem";

const CameraList = ({ cameras }) => {
  return (
    <div className={styles.container}>
      {cameras.map((cam) => (
        <CameraItem key={`${cam.cameraId}-${cam.updatedAt}`} cam={cam} />
      ))}
    </div>
  );
};

export default CameraList;
