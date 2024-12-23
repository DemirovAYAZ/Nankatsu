import React from 'react';
import styles from './manageaccounts.module.css';

const ManageAccounts = () => {
  return (
    <div className='container'>
      <div className={styles.manage_accounts}>
        <h2>Manage your bank accounts</h2>
        <p>
          Explore unexpectedly human ways to manage your bank accounts 24/7—even when you're on the go.
        </p>
        <div className={styles.features}>
          <div className={styles.feature_item}>
            <img
              src="/assets/image_1.jpg"
              alt="Live customer service"
            />
            <h3>Live customer service when you need it</h3>
            <p>
              Call <strong>1-888-751-9000</strong> to talk to a real person any time of day, any day of the week.
            </p>
          </div>
          <div className={styles.feature_item}>
            <img
              src="/assets/image_2.jpg"
              alt="Quick and easy instant-issue cards"
            />
            <h3>Quick and easy instant-issue cards</h3>
            <p>
              Order a new or replacement card at your nearest bank location and take it with you the same day.
            </p>
          </div>
          <div className={styles.feature_item}>
            <img
              src="/assets/image_3.jpg"
              alt="Pay your bills on the go"
            />
            <h3>Pay your bills on the go</h3>
            <p>
              Make payments, view history, and get e-bills. Reduce the hassle of paying bills with Bill Pay and the TD
              Bank app.
            </p>
          </div>
          <div className={styles.feature_item}>
            <img
              src="/assets/image_4.jpg"
              alt="Deposit checks anytime"
            />
            <h3>Deposit checks anytime</h3>
            <p>
              Deposit checks using your smartphone or tablet camera with TD Bank Mobile Deposit. Funds are usually
              available the next business day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAccounts;
