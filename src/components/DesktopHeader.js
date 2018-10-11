import React from 'react'
import NavLink from './NavLink'
import { Link } from 'gatsby'

import styles from './DesktopHeader.module.css'

const DesktopHeader = props => (
    <nav className={styles.nav}>
        <div className={styles.navLeft}></div>
        <div className={styles.navCenter}>
            <Link to="/" className={styles.title}>
                <h1>{props.title}</h1>
            </Link>
        </div>
        <div className={styles.navRight}>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/me">Me</NavLink>
        </div>
    </nav>
)

export default DesktopHeader