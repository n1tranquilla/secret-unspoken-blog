import React from 'react'
import ButtonBase from './ButtonBase'
import classNames from 'classnames'

import styles from './ButtonBase.module.css'

const ButtonContained = props => (
    <ButtonBase {...props} className={classNames(
        styles.btnContained,
        styles.btnShadow
        )}>
        { props.children }
    </ButtonBase>
)

export default ButtonContained