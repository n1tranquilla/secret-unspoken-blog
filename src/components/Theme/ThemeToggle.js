import React from 'react'

import HighlightIcon from '@material-ui/icons/Highlight'

import { IconButton, Tooltip } from '@material-ui/core';
 
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
        return (
            <Tooltip placement="left" title="Toggle Theme">
                <IconButton onClick={this.toggleTheme}>
                    <HighlightIcon color="inherit"/>
                </IconButton>
            </Tooltip>
        )
    }
}

export default ThemeToggle