import React from 'react'
import { Link } from 'gatsby'

import styles from './NavLink.module.css'

const NavLink = props => (
    <Link className={styles.navLink} to={props.to}>
        { props.children }
    </Link>
)

export default NavLink