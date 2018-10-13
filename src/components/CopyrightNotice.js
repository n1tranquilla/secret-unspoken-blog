import React from 'react'

import styles from './CopyrightNotice.module.css'

const CopyrightNotice = props => (
    <div className={styles.copyright}>
        Nathan Tranquilla © {(new Date()).getFullYear()}
    </div>
)

export default CopyrightNotice