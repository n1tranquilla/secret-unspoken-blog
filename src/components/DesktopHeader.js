import React from 'react'
import NavLink from './NavLink'
import { Link } from 'gatsby'

import styles from './DesktopHeader.module.css'
import ThemeToggle from './Theme/ThemeToggle'
import MorePopover from './MorePopover'

const DesktopHeader = props => (
    <React.Fragment>
        <div className={styles.topBar} />
        <nav className={styles.nav}>
            <div className={styles.navLeft}></div>
            <div className={styles.navCenter}>
                <Link to="/" className={styles.home}>
                    <h1 className={styles.center}>{props.title}</h1>
                    <h4 className={styles.center}>{props.subtitle}</h4>
                </Link>
            </div>
            <div className={styles.navRight}>
                <NavLink className={styles.navLink} to="/">Home</NavLink>
                <NavLink className={styles.navLink} to="/posts">Posts</NavLink>
                <NavLink className={styles.navLink} to="/me">Me</NavLink>
                <MorePopover>
                    <ThemeToggle />
                </MorePopover>
            </div>
        </nav>
    </React.Fragment>
)

export default DesktopHeader