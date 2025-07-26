import axios from "axios";
import styles from "./Analytics.module.css";
import { useEffect, useState } from "react";

const Analytics = () => {
  const [regionalData, setRegionalData] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);

  const analytics = async () => {
    try {
      const hourlyRes = await axios.get(
        `${import.meta.env.VITE_IP}/auth/statistics/violation/hourly`,
        {
          headers: {
            Authorization: localStorage.getItem("harsper-token"),
          },
        }
      );
      console.log("Hourly Data:", hourlyRes.data);
      setHourlyData(hourlyRes.data); // 응답 구조에 따라 조정 필요

      // 지역별 가상 데이터 (실제 API 연결 시 이 부분 수정)
      const virtualRegionalData = [
        {
          road: "동탄역 더샵 센트럴파크2차로",
          totalCount: 2,
          violationCount: 2,
          violationRate: 100,
        },
        {
          road: "백석대로",
          totalCount: 1,
          violationCount: 1,
          violationRate: 100,
        },
      ];
      setRegionalData(virtualRegionalData);
      console.log("Regional Data:", virtualRegionalData);
    } catch (err) {
      console.error("데이터 불러오기 실패:", err);
    }
  };

  useEffect(() => {
    analytics();
  }, []);

  return (
    <div className={styles.container}>
      {/* 시간대별 통계 카드 */}
      <div className={styles.card}>
        <h3 className={styles.title}>시간대별 위반 현황</h3>
        <p className={styles.subtitle}>24시간 기준 위반 발생 현황</p>
        <div className={styles.content}>
          {hourlyData.length > 0 ? (
            <ul className={styles.hourlyList}>
              {hourlyData.map((item, idx) => (
                <li key={idx} className={styles.hourlyItem}>
                  <span>{item.hour}시</span> :{" "}
                  <strong>{item.violationCount}건</strong>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.placeholder}>차트 데이터 로딩중 ...</p>
          )}
        </div>
      </div>

      {/* 지역별 통계 카드 */}
      <div className={styles.card}>
        <h3 className={styles.title}>지역별 통계</h3>
        <p className={styles.subtitle}>지역별 카메라를 통한 위반 건수</p>
        <div className={styles.content}>
          {regionalData.length > 0 ? (
            <div className={styles.barChartContainer}>
              {regionalData.map((data, index) => (
                <div key={index} className={styles.barWrapper}>
                  <div
                    className={styles.bar}
                    style={{ height: `${data.violationRate}%` }}
                  ></div>
                  <span className={styles.barLabel}>
                    {data.road} ({data.violationRate}%)
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className={styles.placeholder}>통계 데이터 로딩중 ...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
