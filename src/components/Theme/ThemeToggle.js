import React from 'react'
import PropTypes from 'prop-types'
import ToggleOffIcon from '@material-ui/icons/ToggleOff'
import ToggleOnIcon from '@material-ui/icons/ToggleOn'

import styles from './Theme/ThemeToggle.module.css'

import classNames from 'classnames'
import { IconButton } from '@material-ui/core';

const sizeToClass={
    small: 'nameSmall',
    medium: 'nameMedium',
    large: 'nameLarge'
}

 
class ThemeToggle extends React.Component {

    state={
        day: localStorage.getItem("theme")!=='dark' 
    }

    toggleTheme = () => this.setState({ day: !this.state.day })

    componentDidUpdate(){
        const html = document.documentElement

        html.classList.add("color-theme-in-transition")
        setTimeout(()=>html.classList.remove("color-theme-in-transition"),1000)

        const nextTheme=!this.state.day ? "dark" : "light"

        html.setAttribute("data-theme",nextTheme)
        localStorage.setItem("theme",nextTheme)
        if (window.ga){
            window.ga("send", "event", {
                eventCategory: "Engagement",
                eventAction: nextTheme,
                eventLabel: "Theme switch",
                eventValue: 1
            })
        }
    }

    render(){
        const cls = sizeToClass[this.props.size]
        const Icon = this.state.day ? ToggleOffIcon : ToggleOnIcon
        const theme = this.state.day ? "light" : "dark"
        return (
            <div className={styles.container}>
                <span className={classNames(styles.name,styles[cls])}>Theme <span className={styles.theme}>({theme})</span></span>
                <IconButton onClick={this.toggleTheme}>
                    <Icon color="inherit" fontSize={this.props.size}/>
                </IconButton>
                
            </div>
        )
    }
}

ThemeToggle.propTypes={
    size: PropTypes.oneOf(['small','medium','large']).isRequired
}

ThemeToggle.defaultProps={
    size: 'medium'
}

export default ThemeToggle