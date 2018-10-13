import React from 'react'
import styles from './TotalCount.module.css'

const TotalCount = props => (
    <span className={styles.count}>{props.count} post(s)</span>
)

export default TotalCount