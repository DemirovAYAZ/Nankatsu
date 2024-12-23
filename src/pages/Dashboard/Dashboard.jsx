import React from "react";
import styles from "./styles.module.css";
import BarGraph from "../../components/BarGraph/BarGraph";
const Dashboard = () => {
  return (
    <>
      <div className={styles.dashboard_page}>
        <BarGraph />
      </div>
    </>
  );
};

export default Dashboard;
