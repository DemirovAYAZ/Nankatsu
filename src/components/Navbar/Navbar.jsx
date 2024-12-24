import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='container'>
            <div className={styles.navbar_container}>
                <div className={styles.logo}>
                    <span>DataPlot</span>
                </div>
                <div className={styles.navbar_links}>
                    <Link to={'/'} className={styles.link}>
                       <span>Home</span> 
                    </Link>
                    <Link to={'/dashboard/main'} className={styles.link}>
                       <span> Dashboard</span> 
                    </Link>
                    <Link to={'/costs'} className={styles.link}>
                        <span>Costs</span> 
                    </Link>
                    <Link to={'/about-us'} className={styles.link}>
                       <span> About us</span> 
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
