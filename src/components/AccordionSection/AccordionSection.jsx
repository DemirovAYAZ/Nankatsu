import React, { useState } from 'react';
import styles from './AccordionSection.module.css';

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    "Battle-Proven",
    "Features",
    "Ease of Use",
    "Support",
    "Installation/Upgrade",
    "Data Science",
    "Product Vision",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.h3}>
        <h3>Why choose us?</h3>
      </div>
      {sections.map((title, index) => (
        <div key={index} className={styles.section}>
          <div
            className={`${styles.header} ${
              openIndex === index ? styles.open : ''
            }`}
            onClick={() => handleToggle(index)}
          >
            <span>{index + 1}</span>
            <h3>{title}</h3>
          </div>
          {openIndex === index && (
            <div className={styles.content}>
              <p>{`Content for ${title}`}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionSection;
