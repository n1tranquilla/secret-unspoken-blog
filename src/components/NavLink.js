import React from 'react'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'

import styles from './NavLink.module.css'

const NavLink = props => (
    <Link className={classNames(styles.navLink,props.className)
    } to={props.to}>
        <Typography variant="inherit">
            { props.children }
        </Typography>
    </Link>
)

export default NavLink