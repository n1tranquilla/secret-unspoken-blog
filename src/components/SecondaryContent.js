import React from 'react'

import styles from './SecondaryContent.module.css'

const SecondaryContent = props => (
    <div className={styles.container}>
        { props.children }
    </div>
)

export default SecondaryContent