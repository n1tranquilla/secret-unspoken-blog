import React from 'react'
import ButtonBase from './ButtonBase'

import styles from './ButtonBase.module.css'

const ButtonContained = props => (
    <ButtonBase {...props} className={styles.btnContained}>
        { props.children }
    </ButtonBase>
)

export default ButtonContained