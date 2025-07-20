import styles from "./StreamCard.module.css";
import { FiVideo } from "react-icons/fi";

const StreamCard = ({ title, location, cameraId, online }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.location}>{location}</p>
        </div>
        <div className={styles.status}>
          <span
            className={`${styles.indicator} ${online ? styles.online : styles.offline}`}
          ></span>
          <span className={styles.cameraId}>{cameraId}</span>
        </div>
      </div>

      <div className={styles.videoArea}>
        <FiVideo size={28} className={styles.icon} />
        <p className={styles.streamText}>실시간 스트림</p>
      </div>
    </div>
  );
};

export default StreamCard;
