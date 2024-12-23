import React, { useRef } from "react";
import styles from "./styles.module.css";
const Dashboard = () => {
  const inputRef = useRef(null);
  function triggerInput() {
    inputRef.current.click();
  }
  return (
    <>
      <div className={styles.dashboard_page}>
        <div className={styles.dashboard_page_input}>
          <label htmlFor="file">Upload your file</label>
          <input ref={inputRef} style={{ display: "none" }} type="file" id="file" />
          <div onClick={triggerInput}>
            Upload
          </div>
       </div>
      </div>
    </>
  );
};

export default Dashboard;
