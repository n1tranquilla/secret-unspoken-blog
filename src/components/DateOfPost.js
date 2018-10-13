import React from 'react'

import styles from './DateOfPost.module.css'

const DateOfPost = props => (
    <span className={styles.date}>{props.prefix}{props.children}</span>
)

DateOfPost.defaultProps={
    prefix: ""
}

export default DateOfPost