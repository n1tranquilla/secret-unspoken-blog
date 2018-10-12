import React from 'react'
import { Link } from 'gatsby'

import styles from './MobileHeader.module.css'
import desktopStyles from './DesktopHeader.module.css'

const MobileHeader = props => (
    <nav className={styles.nav}>
        <Link to="/" className={desktopStyles.title}>
            <h1>{props.title}</h1>
        </Link>
    </nav>
)

export default MobileHeader