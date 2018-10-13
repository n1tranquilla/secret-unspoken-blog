import React from 'react'
import styles from './Subtitle.module.css'

const Subtitle = props => (
    <h4 className={styles.subtitle}>{props.children}</h4>
)

export default Subtitle