import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(() => {
    return JSON.parse(localStorage.getItem("isVisible")) || false;
  });

  useEffect(() => {
    const updateVisibility = () => {
      const visibility = JSON.parse(localStorage.getItem("isVisible"));
      setIsVisible(visibility);
    };

    updateVisibility(); 

    window.addEventListener("storage", updateVisibility); 
    return () => {
      window.removeEventListener("storage", updateVisibility); 
    };
  }, [pathname]); 

  const handleMainClick = () => {
    localStorage.setItem("isVisible", JSON.stringify(false));
    setIsVisible(false); 
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <div className={styles.logo}>
          <span>Dashboard</span>
        </div>
        <Link className={styles.link} to="/dashboard/main" onClick={handleMainClick}>
          <div>
            <img src="/assets/maindashboardicon.svg" alt="icon" />
            <p>Main</p>
          </div>
        </Link>
        {isVisible && (
          <>
            <Link className={styles.link} to="/dashboard/your-sales">
              <div>
                <img src="https://img.icons8.com/material-rounded/24/FFFFFF/economic-improvement.png" alt="icon" />
                <p>Total Sales</p>
              </div>
            </Link>
            <Link className={styles.link} to="/dashboard/quantity">
              <div>
                <img width={24} src="https://img.icons8.com/ios/50/FFFFFF/how-many-quest--v2.png" alt="price" />
                <p>Quantity</p>
              </div>
            </Link>
            <Link className={styles.link} to="/dashboard/customer-type">
              <div>
                <img width={24}  src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/FFFFFF/external-customer-casino-icongeek26-outline-icongeek26.png" alt="price" />
                <p>Customer Type</p>
              </div>
            </Link>
            <Link className={styles.link} to="/dashboard/customer-strategy">
              <div>
                <img width={24} src="https://img.icons8.com/external-glyph-geotatah/64/FFFFFF/external-analyse-risk-management-glyph-glyph-geotatah.png" alt="price" />
                <p>Future Marketing Strategy</p>
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
