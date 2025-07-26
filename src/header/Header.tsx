import { useEffect, useState } from "react";
import s from "./Header.module.css";
import { MdOutlineShield } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { IoWarningOutline } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import { MdOutlineCameraAlt } from "react-icons/md";
import { formatNumber } from "../functions/formatFunction";
import InformationCard from "../components/main/InformationCard";
import { Outlet } from "react-router-dom";
import TabNav from "./TabNav";
import axios from "axios";
const Header = () => {
  const [cameraState, setCameraState] = useState(true);
  const [statis, setStatis] = useState({
    todayDetectionCount: 0,
    totalViolationCount: 0,
    complianceRate: 0,
    activateCamera: 0,
  });
  const healthCheck = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_IP}/api/health`);
      setCameraState(true);
    } catch (err) {
      setCameraState(false);
    }
  };

  const statistisc = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_IP}/auth/statistics`, {
        headers: {
          Authorization: localStorage.getItem("harsper-token"),
        },
      });
      setStatis({
        ...res.data,
      });
    } catch (err) {
      console.error(err);
    }
    // console.log(res);
  };
  useEffect(() => {
    healthCheck();
    statistisc();
  }, []);

  return (
    <>
      <header className={s.container}>
        <div className={s.titleContainer}>
          <MdOutlineShield size={40} color="#60a5fa" />
          <div>
            <h1>헬멧 감지 시스템</h1>
            <div>실시간 오토바이 헬멧 착용 모니터링</div>
          </div>
        </div>
        <div className={s.status}>
          <div
            style={{ background: cameraState ? "green" : "red" }}
            className={s.state}
          ></div>
          <div>시스템 상태</div>
        </div>
      </header>
      <main style={{ paddingTop: 19 }}>
        <div className={s.mainContent}>
          <section
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              gap: 13,
            }}
          >
            <InformationCard
              text="총 탐지 건수"
              icon={LuEye}
              data={formatNumber(statis.todayDetectionCount)}
              subText="오늘 기준"
              color="white"
            />
            <InformationCard
              text="위반 건수"
              icon={IoWarningOutline}
              data={formatNumber(statis.totalViolationCount)}
              subText="헬멧 미착용"
              color="#F87171"
            />
            <InformationCard
              text="준수율"
              icon={BsGraphUp}
              data={statis.complianceRate}
              subText="전일 대비 +2.1%"
              color="#4ADE80"
            />
            <InformationCard
              text="활성 카메라"
              icon={MdOutlineCameraAlt}
              data={statis.activateCamera}
              subText="정상 작동 중"
              color="white"
            />
          </section>
          <div>
            <TabNav />
          </div>
          <section>
            <Outlet />
          </section>
        </div>
      </main>
    </>
  );
};

export default Header;
