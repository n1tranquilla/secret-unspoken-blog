import React from 'react'
import { Link } from 'gatsby'

import styles from './MobileHeader.module.css'
import desktopStyles from './DesktopHeader.module.css'

const MobileHeader = props => (
    <nav className={styles.nav}>
        <Link to="/" className={desktopStyles.home}>
            <h1 className={desktopStyles.center}>{props.title}</h1>
            <h4 className={desktopStyles.center}>{props.subtitle}</h4>
        </Link>
    </nav>
)

export default MobileHeader