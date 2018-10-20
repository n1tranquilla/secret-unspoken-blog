import React from 'react'

import styles from './HeaderMeta.module.css'

const HeaderMeta = props => (
    <span className={styles.meta}>{props.prefix}{props.children}</span>
)

HeaderMeta.defaultProps={
    prefix: ""
}

export default HeaderMeta