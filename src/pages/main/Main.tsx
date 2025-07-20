import { Outlet } from "react-router-dom";
import styles from "./Main.module.css";
const Main = () => {
  return (
    <div className={styles.container}>
        <Outlet />
    </div>
  );
};

export default Main;
