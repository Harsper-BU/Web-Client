import { FiVideo } from "react-icons/fi";
import styles from "./CameraItem.module.css";

const CameraItem = ({ cam }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <div>
          {cam.location && <p className={styles.location}>{cam.location}</p>}
        </div>
        <div className={styles.status}>
          {cam.status !== undefined && (
            <span
              className={`${styles.check} ${
                cam.status ? styles.online : styles.offline
              }`}
            />
          )}
          <span className={styles.cameraId}>{cam.cameraId}</span>
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
