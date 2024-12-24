import React from "react";
import styles from "./styles.module.css";
import Sidebar from "../SideBar/sidebar";
import { useLocation } from "react-router-dom";
const Wraper = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <main className={`${styles.wrapper} container`}>
      {pathname.startsWith("/dashboard/") ? (
        <div className={styles.wrapper_sidebar}>
          <Sidebar />
        </div>
      ) : (
        ""
      )}
      <div style={{width:'100%'}}>{children}</div>
    </main>
  );
};

export default Wraper;
