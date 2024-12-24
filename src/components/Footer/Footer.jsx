import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={`${styles.logo} ${styles.column}`}>
                        <span>DataPlot</span>
                    </div>
                    <div className={styles.column}>
                        <h3 className={styles.heading}>Company</h3>
                        <ul className={styles.list}>
                            <li><a href="/about" className={styles.link}>About Us</a></li>
                            <li><a href="/careers" className={styles.link}>Careers</a></li>
                            <li><a href="/contact" className={styles.link}>Contact</a></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3 className={styles.heading}>Follow Us</h3>
                        <ul className={styles.socials}>
                            <li><a href="https://facebook.com" className={styles.link}>Facebook</a></li>
                            <li><a href="https://twitter.com" className={styles.link}>Twitter</a></li>
                            <li><a href="https://instagram.com" className={styles.link}>Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className={styles.bottomBar}>
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
