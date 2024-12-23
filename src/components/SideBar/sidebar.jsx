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
        <Link className={styles.link} to="/dashboard/price">
          <div>
            <img src="/assets/maindashboardicon.svg" alt="price" />
            <p>Price</p>
          </div>
        </Link>
        <Link className={styles.link} to="/dashboard/quantity">
          <div>
            <img src="/assets/maindashboardicon.svg" alt="price" />
            <p>Quantity</p>
          </div>
        </Link>
        <Link className={styles.link} to="/dashboard/total_sales">
          <div>
            <img src="/assets/maindashboardicon.svg" alt="price" />
            <p>Total Sales</p>
          </div>
        </Link>
        <Link className={styles.link} to="/dashboard/customer_type">
          <div>
            <img src="/assets/maindashboardicon.svg" alt="price" />
            <p>Customer Type</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
