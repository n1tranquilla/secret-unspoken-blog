import React from 'react'
import { Link } from 'gatsby'

import styles from './MobileHeader.module.css'
import desktopStyles from './DesktopHeader.module.css'

import ThemeToggle from './ThemeToggle'
import MorePopover from './MorePopover'

const MobileHeader = props => (
    <React.Fragment>
        <div className={desktopStyles.topBar}>
            <MorePopover vert={false}>
                <ThemeToggle />
            </MorePopover>
        </div>
        <nav className={styles.nav}>
            <Link to="/" className={desktopStyles.home}>
                <h1 className={desktopStyles.center}>{props.title}</h1>
                <h4 className={desktopStyles.center}>{props.subtitle}</h4>
            </Link>
        </nav>
    </React.Fragment>
    
)

export default MobileHeader