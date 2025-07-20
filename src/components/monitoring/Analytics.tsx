import styles from "./Analytics.module.css";

const Analytics = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3 className={styles.title}>시간대별 위반 현황</h3>
        <p className={styles.subtitle}>24시간 기준 위반 발생 현황</p>
        <div className={styles.content}>
          <p className={styles.placeholder}>차트 데이터 로딩중 ...</p>
        </div>
      </div>

      <div className={styles.card}>
        <h3 className={styles.title}>지역별 통계</h3>
        <p className={styles.subtitle}>지역별 카메라를 통한 위반 건수</p>
        <div className={styles.content}>
          <p className={styles.placeholder}>통계 데이터 로딩중 ...</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
