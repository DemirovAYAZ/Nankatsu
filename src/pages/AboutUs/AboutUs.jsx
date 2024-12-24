import React from "react";
import styles from "./styles.module.css";

const AboutUs = () => {
    const teamMembers = [
        {
            role: "AI Engineer",
            name: "Ilkin Abdullayev",
            img: "/assets/Ilkin.jpg"
        },
        {
            role: "Full-Stack Developer",
            name: "Aziz Azizli",
            img: "/assets/Aziz.jpg"
        },
        {
            role: "Marketing Head",
            name: "Qurban Haciyev",
            img: "/assets/Qurban.jpg"
        },
        {
            role: "Graphic Designer",
            name: "Ayaz Damirov",
            img: "/assets/Ayaz.jpg"
        },
    ];

    return (
        <div className="container">
            <div className={styles.about_us}>
                <h1 className={styles.title}>Meet our team</h1>
                <div className={styles.grid}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.avatar}>
                                <img src={member.img} alt="" />
                            </div>
                            <h3 className={styles.role}>{member.role}</h3>
                            <h2 className={styles.name}>{member.name}</h2>
                            <p className={styles.description}>{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
