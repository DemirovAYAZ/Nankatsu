import React from "react";
import styles from "./banner.module.css";

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.imageContainer}>
                <img
                    src="/assets/download.png"
                    alt="TurboBoard Dashboard"
                    className={styles.image}
                />
            </div>
            <div className={styles.banner_img}>
                <img src="/assets/banner.png" alt="" />
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    WHAT ARE THE DIFFERENCES OF <i>TURBOARD</i>
                </h1>
                <button className={styles.learnMoreButton}>LEARN MORE</button>
            </div>
        </div>
    );
};

export default Banner;
