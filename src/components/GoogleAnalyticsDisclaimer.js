import React from 'react'

import styles from './GoogleAnalyticsDisclaimer.module.css'

class GoogleAnalyticsDisclaimer extends React.Component {

    state={
        redrawKey:0
    }

    key = `ga-disable-${this.props.gaTrackingId}`

    componentDidMount(){
        window[this.key]=localStorage.getItem(this.key)!==undefined
            ? localStorage.getItem(this.key)
            : false
    }

    redraw = () => this.setState({ redrawKey: this.state.redrawKey+1})

    toggle = (e) => {
        e.preventDefault()
        const stringBool = localStorage.getItem(this.key)
        localStorage.setItem(this.key,stringBool==="true" ? "false" : "true")
        this.redraw()

        window[this.key]=localStorage.getItem(this.key)==="true" ? true : false
    }

    render(){
        return (
            <div key={this.state.redrawKey} className={styles.disclaimer}>
                <pre>This site uses Google Analytics. </pre>
                <a href="#" onClick={this.toggle}>
                    { localStorage.getItem(this.key)==="true" ? 'Opt in.' : 'Opt out.' }
                </a>
            </div>
        )
    }
}

export default GoogleAnalyticsDisclaimer