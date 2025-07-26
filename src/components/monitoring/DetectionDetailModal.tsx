import styles from "./DetectionDetailModal.module.css";

const DetectionDetailModal = ({ detection, onClose }) => {
  if (!detection) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>상세 정보</h2>
        <div className={styles.detailItem}>
          <strong>카메라 ID:</strong> {detection.deviceId}
        </div>
        <div className={styles.detailItem}>
          <strong>상태 :</strong>{" "}
          {detection.helmetStatus === "violation" ? "헬멧 미착용" : "헬멧 착용"}
        </div>
        {/* <div className={styles.detailItem}>
          <strong>신뢰도:</strong> {(detection.confidence * 100).toFixed(2)}%
        </div> */}
        <div className={styles.detailItem}>
          <strong>위치 :</strong>
          {detection.address}
        </div>
        <div className={styles.detailItem}>
          <strong>시간:</strong> {detection.timestamp.join(".")}
        </div>
        {detection.imageLocation ? (
          <div className={styles.imageContainer}>
            <img
              src={detection.imageLocation}
              alt="Detection"
              className={styles.detectioImage}
            />
          </div>
        ) : (
          <div className={styles.imageContainer}>
            <img src="" alt="No Image" className={styles.detectionImage} />
          </div>
        )}
        <button onClick={onClose} className={styles.closeButton}>
          X
        </button>
      </div>
    </div>
  );
};

export default DetectionDetailModal;
