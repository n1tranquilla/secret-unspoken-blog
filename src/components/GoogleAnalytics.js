import React from 'react'
import ReactGA from 'react-ga'
import { Location } from '@reach/router'

class GoogleAnalytics extends React.Component {

    componentDidMount(){
        ReactGA.initialize(this.props.gaTrackingID)
        this.trackPageview(window.location.pathname+window.location.search)
    }

    trackPageview = (page) => {
        ReactGA.pageview(page)
    }

    render() {
        return (
            <Location>
                {({ location }) => {
                    this.trackPageview(location.pathname+location.search)
                    return null
                }}
            </Location>
        )
    }
}

export default GoogleAnalytics