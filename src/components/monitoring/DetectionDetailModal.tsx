import styles from "./DetectionDetailModal.module.css";

const DetectionDetailModal = ({ detection, onClose }) => {
  if (!detection) return null;

  const formattedTimestamp = new Date(detection.timestamp).toLocaleString();

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>상세 정보</h2>
        <div className={styles.detailItem}>
          <strong>카메라 ID:</strong> {detection.camera_id}
        </div>
        <div className={styles.detailItem}>
          <strong>라벨:</strong> {detection.label}
        </div>
        <div className={styles.detailItem}>
          <strong>신뢰도:</strong> {(detection.confidence * 100).toFixed(2)}%
        </div>
        <div className={styles.detailItem}>
          <strong>시간:</strong> {formattedTimestamp}
        </div>
        {detection.image ? (
          <div className={styles.imageContainer}>
            <img
              src={detection.image}
              alt="Detection"
              className={styles.detectionImage}
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
