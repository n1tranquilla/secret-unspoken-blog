import React from 'react'

class ThemeMounter extends React.Component {

    componentDidMount(){
        const html = document.documentElement
        const theme = localStorage.getItem("theme")!=='dark' ? "light" : "dark"
        html.setAttribute("data-theme",theme)
        if (window.ga){
            window.ga("send", "event", {
                eventCategory: "Engagement",
                eventAction: theme,
                eventLabel: "Theme on load",
                eventValue: 1
            })
        }
    }

    render(){
        return null
    }
}