import React, { useState } from "react";
import styles from "./styles.module.css";

const FeatureComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const features = [
        {
            title: "Extended Slicing & Filtering Capabilities",
            description:
                "Slice and dice your data without a need for a preprocess, turn almost all dashlets to slicer. If there is no field in the database, create your filters using SQL.",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
            title: "Real-Time Dashboards",
            description:
                "Create dynamic, real-time dashboards with easy-to-use widgets and visualization tools to get insights instantly.",
            videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
        },
        {
            title: "Customizable Reports",
            description:
                "Generate and customize reports to suit your specific needs, ensuring accurate data representation.",
            videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? features.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <div className={styles.header}>
                <h1>Features</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.textSection}>
                    <h2>FEATURES OF TURBOARD</h2>
                    <h3>{features[currentIndex].title}</h3>
                    <p>{features[currentIndex].description}</p>
                    <button className={styles.learnButton}>LEARN HOW</button>
                </div>

                <div className={styles.navigationButtons}>
                    <button className={styles.navButton} onClick={handlePrev}>
                        &lt;
                    </button>
                    <button className={styles.navButton} onClick={handleNext}>
                        &gt;
                    </button>
                </div>

                <div className={styles.mediaSection}>
                    <iframe
                        className={styles.videoFrame}
                        src={features[currentIndex].videoUrl}
                        title={features[currentIndex].title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default FeatureComponent;
