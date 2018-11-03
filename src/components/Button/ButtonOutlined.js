import React from 'react'
import ButtonBase from './ButtonBase'

import styles from './ButtonBase.module.css'

const ButtonOutlined = props => (
    <ButtonBase {...props} className={styles.btnOutlined}>
        { props.children }
    </ButtonBase>
)

export default ButtonOutlined