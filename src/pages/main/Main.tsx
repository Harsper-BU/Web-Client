import { Outlet } from "react-router-dom";
import TabNav from "../../header/TabNav";
import styles from "./Main.module.css";
import StreamCard from "../../components/monitoring/StreamCard";
const Main = () => {
  return (
    <div className={styles.container}>
      <TabNav />
      <div className={styles.dashboard}>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
