import React, { useRef } from "react";
import styles from "./styles.module.css";
const Dashboard = () => {
  const inputRef = useRef(null);
  function triggerInput() {
    inputRef.current.click();
  }

  // const [jsonData, setJsonData] = useState([]);

  // const handleFileUpload = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     Papa.parse(file, {
  //       header: true, // Treat the first row as headers
  //       skipEmptyLines: true, // Ignore empty lines
  //       complete: (result) => {
  //         setJsonData(result.data); // JSON data
  //         console.log("Converted JSON:", result.data);
  //       },
  //       error: (error) => {
  //         console.error("Error parsing CSV:", error);
  //       },
  //     });
  //   }
  // };
  

  return (
    <>
      <div className={styles.dashboard_page}>
        <div className={styles.dashboard_page_input}>
          <label htmlFor="file">Upload your file</label>
          <input ref={inputRef} style={{ display: "none" }} type="file" id="file" />
          <div className={styles.upload} onClick={triggerInput}>
            Upload
          </div>
          <div className={styles.button_div}>
          <button>Submit</button>
          </div>
       </div>
      </div>
    </>
  );
};

export default Dashboard;
