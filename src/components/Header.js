import React from 'react'
import NavLink from './NavLink'

import styles from './Header.module.css'

const Header = props => (
    <nav className={styles.header}>
        <NavLink to="/" className={styles.title}>{props.title}</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/me">Me</NavLink>
    </nav>
)

export default Header