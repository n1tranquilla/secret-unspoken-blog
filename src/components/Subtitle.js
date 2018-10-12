import React from 'react'
import styles from './Subtitle.module.css'

const Subtitle = props => (
    <h3 className={styles.subtitle}>{props.children}</h3>
)

export default Subtitle