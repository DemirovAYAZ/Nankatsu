import React from 'react';
import styles from './homeenter.module.css';

const HomeEnter = () => {
    return (
        <div className="container">
            <div className={styles.home_message}>
                <div className={styles.video}>
                    <video autoPlay muted loop>
                        <source src="/assets/home.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className={styles.message_div}>
                    <div className={styles.home_logo}></div>
                    <div className={styles.message}>
                        Experience the power of data-driven insights with comprehensive and self-service
                        Business Intelligence and Data Analytics Platform
                    </div>
                    <button className={styles.button}>
                        Discover
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeEnter;
