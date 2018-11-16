import React from 'react'
import MySnackbar from './MySnackbar'
import { Link } from 'gatsby'


class AddToHomeScreen extends React.Component {

    state={
        deferredPrompt: null,
        notify: false,
        forceNone: false
    }

    handleAdd = (e) => {
        e.preventDefault()

        const { deferredPrompt } = this.state
        deferredPrompt.prompt()

        deferredPrompt.userChoice
            .then((choiceResult) => {
                localStorage.setItem('a2hs-chosen','true')
                this.setState({ 
                    deferredPrompt: null ,
                    notify: false
                })
            });
    }

    componentDidMount(){

        if(localStorage.getItem('a2hs-chosen')==='true') this.setState({
            forceNone: true
        })

        if (!window && !window.addEventListener) return 

        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later.
            this.setState({ deferredPrompt: e })
        })

        setTimeout(()=>this.setState({ notify: true}),10000)
    }

    render(){

        if (this.state.forceNone) return null

        return this.state.notify
            ? (<MySnackbar duration={Infinity} msg={<Link onClick={this.handleAdd}>Add Secret Unspoken to homescreen</Link>} />)
            : null

    }
}

export default AddToHomeScreen