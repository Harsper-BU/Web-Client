import styles from "./DetectionItem.module.css";

const DetectionItem = ({ detection, onClick }) => {
  const formattedTimestamp = new Date(detection.timestamp).toLocaleString();

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imageContainer}>
        {detection.image ? (
          <img src={detection.image} alt="Detection" className={styles.image} />
        ) : (
          <div className={styles.noImage}>이미지 없음</div>
        )}
      </div>
      <div className={styles.info}>
        <p className={styles.label}>{detection.label}</p>
        <p className={styles.confidence}>신뢰도: {(detection.confidence * 100).toFixed(2)}%</p>
        <p>시간: {formattedTimestamp}</p>
        <p>카메라 ID: {detection.camera_id}</p>
      </div>
    </div>
  );
};

export default DetectionItem;