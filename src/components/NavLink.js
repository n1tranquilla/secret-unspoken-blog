import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'

import styles from './NavLink.module.css'

const NavLink = props => (
    <Link className={classNames(styles.navLink,props.className)} to={props.to}>
        { props.children }
    </Link>
)

export default NavLink