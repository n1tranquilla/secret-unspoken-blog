import React from 'react'

import styles from './Column.module.css'

const Column = props => (
    <div className={styles.column} style={{maxWidth: props.maxWidth}}>
        { props.children }
    </div>
)

Column.defaultProps={
    maxWidth: 500
}

export default Column