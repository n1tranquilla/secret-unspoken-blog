import React from 'react'
import MySnackbar from './MySnackbar'
import { Link } from 'gatsby'

class AddToHomeScreen extends React.Component {

    state={
        deferredPrompt: null,
        notify: false
    }

    handleAdd = () => {
        const { deferredPrompt } = this.state
        deferredPrompt.prompt()

        deferredPrompt.userChoice
            .then((choiceResult) => {
                // if (choiceResult.outcome === 'accepted') {
                //     console.log('User accepted the A2HS prompt');
                // } else {
                //     console.log('User dismissed the A2HS prompt');
                // }
                this.setState({ 
                    deferredPrompt: null ,
                    notify: false
                })
            });
    }

    componentDidMount(){

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
        return this.state.notify
            ? (<MySnackbar duration={Infinity} msg={<Link onClick={this.handleAdd}>Add Secret Unspoken to homescreen</Link>} />)
            : null

    }
}

export default AddToHomeScreen