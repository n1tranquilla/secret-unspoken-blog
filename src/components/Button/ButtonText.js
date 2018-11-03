import React from 'react'
import ButtonBase from './ButtonBase'

const ButtonText = props => (
    <ButtonBase {...props}>
        { props.children }
    </ButtonBase>
)

export default ButtonText