import axios from "axios";
import styles from "./Analytics.module.css";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const Analytics = () => {
  const [regionalData, setRegionalData] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);

  const analytics = async () => {
    try {
      const [regionalRes, hourlyRes] = await axios.all([
        axios.get(`${import.meta.env.VITE_IP}/auth/statistics/violation/rate`, {
          headers: {
            Authorization: localStorage.getItem("harsper-token"),
          },
        }),
        axios.get(`${import.meta.env.VITE_IP}/auth/statistics/violation/hourly`, {
          headers: {
            Authorization: localStorage.getItem("harsper-token"),
          },
        }),
      ]);

      setRegionalData(regionalRes.data);

      const initialHourlyData = Array.from({ length: 24 }, (_, i) => ({
        hour: i,
        count: 0,
      }));

      const mergedHourlyData = initialHourlyData.map((initialItem) => {
        const found = hourlyRes.data.find(
          (serverItem) => serverItem.hour === initialItem.hour
        );
        return found ? { ...initialItem, count: found.count } : initialItem;
      });
      setHourlyData(mergedHourlyData);
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
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={hourlyData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                  name="위반 건수"
                />
              </LineChart>
            </ResponsiveContainer>
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
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={regionalData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="road" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="violationRate" fill="#82ca9d" name="위반율" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className={styles.placeholder}>통계 데이터 로딩중 ...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
