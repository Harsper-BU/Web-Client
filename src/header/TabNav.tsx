import { FaVideo, FaCamera, FaChartBar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "./TabNav.module.css";
const TabNav = () => {
  const tabs = [
    {
      to: "/",
      icon: <FaVideo size={16} />,
      label: "최근 객체 탐지",
    },
    {
      to: "/camera",
      icon: <FaCamera size={16} />,
      label: "카메라 상태",
    },
    {
      to: "analytics",
      icon: <FaChartBar size={16} />,
      label: "통계 분석",
    },
  ];
  return (
    <span className={styles.container}>
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          className={({ isActive }) =>
            `${styles.tab} ${isActive ? styles.tabSelected : ""}`
          }
        >
          {tab.icon} <span>{tab.label}</span>
        </NavLink>
      ))}
    </span>
  );
};

export default TabNav;
