import React from "react";
import styles from "./styles.module.css";

const AboutUs = () => {
    const teamMembers = [
        {
            role: "Founder/President",
            name: "Ilkin Abdullayev",
            description:
                "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
        },
        {
            role: "Vice President",
            name: "Aziz Azizli",
            description:
                "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
        },
        {
            role: "Creative Leader",
            name: "Qurban Haciyev",
            description:
                "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
        },
        {
            role: "Secretary",
            name: "Ayaz Damirov",
            description:
                "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
        },
    ];

    return (
        <div className="container">
            <div className={styles.about_us}>
                <h1 className={styles.title}>Meet our team</h1>
                <div className={styles.grid}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.avatar}></div>
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
