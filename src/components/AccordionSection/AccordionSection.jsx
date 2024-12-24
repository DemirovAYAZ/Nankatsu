import React, { useState } from 'react';
import styles from './AccordionSection.module.css';

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "How can this platform help my business grow?",
      content:
        "Our AI-driven platform provides deep insights into your sales and predicts future trends, allowing you to make smarter decisions. You’ll receive tailored recommendations to optimize your business strategies and achieve sustainable growth.",
    },
    {
      title: "Is the platform easy to use for non-technical users?",
      content:
        "Absolutely! We designed the platform with small business owners in mind. It’s user-friendly and requires no technical knowledge to upload data, view insights, or follow recommendations.",
    },
    {
      title: "How does this platform save me time?",
      content:
        "By automating tasks like payment tracking, financial management, and sales analysis, the platform eliminates the need for manual work, freeing up more time for you to focus on growing your business.",
    },
    {
      title: "Is my business data safe on your platform?",
      content:
        "Yes, your data security is our priority. We use advanced encryption and industry-standard protocols to ensure your business information is secure and confidential.",
    },
    {
      title: "What makes this platform different from others?",
      content:
        "Unlike other tools, our platform combines AI-powered insights, real-time payment tracking, and automated financial recommendations in one place, providing an all-in-one solution for small business owners.",
    },
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Why choose us?</h3>
      {sections.map((section, index) => (
        <div key={index} className={styles.section}>
          <div
            className={`${styles.header} ${
              openIndex === index ? styles.open : ''
            }`}
            onClick={() => handleToggle(index)}
          >
            <span>{index + 1}</span>
            <h3>{section.title}</h3>
          </div>
          {openIndex === index && (
            <div className={styles.content}>
              <p>{section.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionSection;
