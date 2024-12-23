import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='container'>
            <div className={styles.navbar_container}>
                <div className='logo'>
                    Nankatsu
                </div>
                <div className={styles.navbar_links}>
                    <Link to={'/'} className={styles.link}>
                        Home
                    </Link>
                    <Link to={'/dashboard'} className={styles.link}>
                        Dashboard
                    </Link>
                    <Link to={'/costs'} className={styles.link}>
                        Costs
                    </Link>
                    <Link to={'/about-us'} className={styles.link}>
                        About us
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
