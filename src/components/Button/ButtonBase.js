import React from 'react'
import classNames from 'classnames'

import styles from './ButtonBase.module.css'

const ButtonBase = props => {
    const { className, ...rest } = props

    return (
        <button {...rest} className={classNames(styles.btn,className)}>
            { props.children }    
        </button>
    )
}

export default ButtonBase