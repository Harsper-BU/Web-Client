import { FiVideo } from "react-icons/fi";
import styles from "./CameraItem.module.css";

const CameraItem = ({ cam, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.title}>
        <div>
          {cam.address && <p className={styles.location}>{cam.address}</p>}
          <div>{cam.lastUpdate.join(".")}</div>
        </div>
        <div className={styles.status}>
          {cam.status !== undefined && (
            <span
              className={`${styles.check} ${
                cam.status === "on" ? styles.online : styles.offline
              }`}
            />
          )}
          <span className={styles.cameraId}>{cam.deviceId}</span>
        </div>
      </div>

      <div className={styles.videoArea}>
        <FiVideo size={28} className={styles.icon} />
        <p>실시간 스트림</p>
      </div>
    </div>
  );
};

export default CameraItem;
