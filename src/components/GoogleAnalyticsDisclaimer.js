import React from 'react'

import styles from './GoogleAnalyticsDisclaimer.module.css'

class GoogleAnalyticsDisclaimer extends React.Component {

    state={
        optOut: false
    }

    key = `ga-disable-${this.props.gaTrackingId}`

    initWindowVar = () => window[this.key]=localStorage.getItem(this.key)!==undefined
        ? localStorage.getItem(this.key)==="true" ? true : false
        : false

    componentDidMount(){ 
        const optOut = this.initWindowVar()
        this.setState({optOut})
    }

    toggle = (e) => {
        e.preventDefault()
        const stringBool = localStorage.getItem(this.key)
        localStorage.setItem(this.key,stringBool==="true" ? "false" : "true")
        
        const optOut = this.initWindowVar()
        this.setState({optOut})
    }

    render(){
        return (
            <div key={this.state.redrawKey} className={styles.disclaimer}>
                <pre>This site uses Google Analytics. </pre>
                <a href="/#" onClick={this.toggle}>
                    { this.state.optOut ? 'Opt in.' : 'Opt out.' }
                </a>
            </div>
        )
    }
}

export default GoogleAnalyticsDisclaimer