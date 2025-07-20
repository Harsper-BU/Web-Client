import { FiMapPin, FiCamera, FiClock } from "react-icons/fi";
import styles from "./DetectionItem.module.css";

const DetectionItem = ({ image, location, cameraId, timestamp }) => {
  return (
    <div className={styles.continer}>
      <img src={image} alt="Detection" className={styles.image} />

      <div className={styles.infoContent}>
        <div className={styles.status}>
          <span className={styles.badge}>위반</span>
        </div>

        <div className={styles.details}>
          <div className={styles.item}>
            <FiMapPin size={14} />
            {location}
          </div>
          <div className={styles.item}>
            <FiCamera size={14} />
            {cameraId}
          </div>
          <div className={styles.item}>
            <FiClock size={14} />
            {timestamp}
          </div>
        </div>
      </div>

      <button className={styles.button}>상세보기</button>
    </div>
  );
};

export default DetectionItem;
