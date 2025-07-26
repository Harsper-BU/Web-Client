import styles from "./DetectionItem.module.css";

const DetectionItem = ({ detection, onClick }) => {

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imageContainer}>
        {detection.imageLocation ? (
          <img
            src={detection.imageLocation}
            alt="Detection"
            className={styles.image}
          />
        ) : (
          <div className={styles.noImage}>이미지 없음</div>
        )}
      </div>
      <div className={styles.info}>
        <p className={styles.label}>
          {detection.helmetStatus === "violation" ? "헬멧 미착용" : "헬멧 착용"}
        </p>
        <p>카메라 ID: {detection.deviceId}</p>
        <p>시간: {detection.timestamp.join('.')}</p>
        {/* <p className={styles.confidence}>신뢰도: {(detection.confidence * 100).toFixed(2)}%</p> */}
      </div>
    </div>
  );
};

export default DetectionItem;
