import React from 'react'
import classNames from 'classnames'

import styles from './ButtonBase.module.css'

const ButtonBase = props => {
    const { className, component: Component, ...rest } = props
    const children = Component 
        ? (<Component {...rest}>{props.children}</Component>)
        : props.children

    return (
        <button className={classNames(styles.btn,className)}>
            { children }    
        </button>
    )
}

export default ButtonBase