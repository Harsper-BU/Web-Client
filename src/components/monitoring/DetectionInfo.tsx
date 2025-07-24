import styles from "./Analytics.module.css";

const DetectionInfo = ({ detections }) => {
  const countByLabel = detections.reduce((acc, detection) => {
    acc[detection.label] = (acc[detection.label] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className={styles.analyticsContainer}>
      <div className={styles.totalDetections}>
        <h3>총 탐지 수</h3>
        <p>{detections.length}</p>
      </div>
      <div className={styles.detectionsByClass}>
        <h3>클래스별 탐지</h3>
        <ul>
          {Object.entries(countByLabel).map(([label, count]) => (
            <li key={label}>
              <span>{label}</span>
              <span>{count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetectionInfo;