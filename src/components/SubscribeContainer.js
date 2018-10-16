import React from 'react'

import styles from './SubscribeContainer.module.css'

const SubscribeContainer = props => (
    <div className={styles.container}>
        { props.children }
    </div>
)

export default SubscribeContainer