import React from 'react'

import styles from './TextField.module.css'

const TextField = props => (
    <input 
        {...props}
        className={styles.input}
    />
)

export default TextField