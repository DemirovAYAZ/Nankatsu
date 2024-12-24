import React, { useState } from "react";
import styles from "./styles.module.css";

const FeatureComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const features = [
        {
            title: "AI Analysis",
            description:
                "The AI analyzes the layout, identifying furniture and suggesting how to rearrange or refurbish it for a more functional and aesthetic look.",
            videoUrl: "https://www.youtube.com/embed/upf90y062SI?si=AF9etKF7INAHjwiu",
        },
        {
            title: "Future Growth and Vision",
            description:
                "Our long-term vision is to become the go-to platform for sustainable interior design worldwide.",
            videoUrl: "https://www.youtube.com/embed/fnIl212tBPk?si=E8nEHW6t8INOkP6G",
        }
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
                <button className={styles.navButton} onClick={handlePrev}>
                        &lt;
                    </button>
                    <div className={styles.main}>

                    <h2>Features of DataPlot</h2>
                    <h3>{features[currentIndex].title}</h3>
                    <p>{features[currentIndex].description}</p>
                    <button className={styles.learnButton}>LEARN HOW</button>
                    </div>

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
