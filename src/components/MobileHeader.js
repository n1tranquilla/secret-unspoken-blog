import React from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'

import styles from './MobileHeader.module.css'
import desktopStyles from './DesktopHeader.module.css'

const MobileHeader = props => (
    <nav className={styles.nav}>
        <Link to="/" className={desktopStyles.title}>
            <Typography variant="h4">
                {props.title}
            </Typography>
        </Link>
    </nav>
)

export default MobileHeader