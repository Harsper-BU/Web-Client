import styles from "./DetectionList.module.css";
import DetectionItem from "./DetectionItem";

const DetectionList = ({detections}) => {
  return (
    <div >
      {detections.map((detection) => (
        <div key={detection.id} className={styles.card}>
          <DetectionItem {...detection}/>
        </div>
      ))}
    </div>
  );
};

export default DetectionList;
