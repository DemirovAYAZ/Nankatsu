import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div>
        <div className={styles.logo}>
          <span>Dashboard</span>
        </div>
        <Link className={styles.link} to="/dashboard/main">
          <div>
            <img src="/assets/maindashboardicon.svg" alt="icon" />
            <p>Main</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
