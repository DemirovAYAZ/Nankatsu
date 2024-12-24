import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const inputRef = useRef(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  function triggerInput() {
    inputRef.current.click();
  }

  const handleFileChange = () => {
    if (inputRef.current.files.length) {
      setFileName(inputRef.current.files[0].name);
    }
  };

  const handleSubmit = () => {
    if (!inputRef.current.files.length) {
      toast.error("Please select a file before submitting!");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("File uploaded successfully!");
      navigate("/dashboard/your-sales");
      localStorage.setItem("isVisible", JSON.stringify(true));
    }, 2000);
  };

  useEffect(() => {
    if (pathname === "/dashboard/main") {
      localStorage.setItem("isVisible", JSON.stringify(false));
    }
  }, [pathname]);

  return (
    <div className={styles.dashboard_page}>
      <div className={styles.dashboard_page_input}>
        <label htmlFor="file">Upload your file</label>
        <input
          ref={inputRef}
          style={{ display: "none" }}
          type="file"
          id="file"
          onChange={handleFileChange}
        />
        <div className={styles.upload} onClick={triggerInput}>
          Upload
        </div>
        {fileName && <div className={styles.fileName}>{fileName}</div>}
        <div className={styles.button_div}>
          <button onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
