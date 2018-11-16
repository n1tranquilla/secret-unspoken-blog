import React from 'react'
import PropTypes from 'prop-types'

import MySnackbar from './MySnackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { Link } from 'gatsby'

import styles from './AddToHomeScreen.module.css'

class AddToHomeScreen extends React.Component {

    state={
        deferredPrompt: null,
        display: false
    }

    handleAdd = (e) => {
        e.preventDefault()

        const { deferredPrompt } = this.state
        deferredPrompt.prompt()

        deferredPrompt.userChoice
            .then((choiceResult) => {
                const chosen = choiceResult.outcome==='accepted'
                localStorage.setItem('a2hs',chosen ? 'true' : 'false')
                localStorage.setItem('a2hs-decision','made')
                if (window.ga){
                    window.ga("send", "event", {
                        eventCategory: "Engagement",
                        eventAction: "a2hs",
                        eventLabel: "Engagement Campaign",
                        eventValue: chosen ? 1 : 0
                    })
                }
                this.setState({ 
                    deferredPrompt: null ,
                    notify: false
                })
            });
    }

    handleClose = () => {
        localStorage.setItem('a2hs-decision','made')
        this.setState({ display: false })
    }

    createMsg = () => (
        <div className={styles.container}>
            <Link to="/#" className={styles.link} onClick={this.handleAdd}>Add Secret Unspoken to homescreen</Link>
            <IconButton>
                <CloseIcon fontSize="small" onClick={this.handleClose}/>
            </IconButton>
        </div>
    )

    componentDidMount(){

        if (!window && !window.addEventListener) return 

        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later.
            this.setState({ deferredPrompt: e })
        })

        if (localStorage.getItem('a2hs-decision')==='made') return 

        setTimeout(
            ()=>this.setState({ display: true}),
            this.props.after
        )
    }

    render(){
        return this.state.display
            ? (<MySnackbar duration={Infinity} msg={this.createMsg()} />)
            : null

    }
}

AddToHomeScreen.propTypes={
    after: PropTypes.number.isRequired
}

AddToHomeScreen.defaultProps={
    after: 0
}

export default AddToHomeScreen