import React from 'react'
import MySnackbar from './MySnackbar'
import Button from './Button/ButtonOutlined'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styles from './Subscribe.module.css'
import TextField from './Input/TextField'

class Subscribe extends React.Component {

    state={
        email:null,
        msg:null
    }

    handleChange = e => {
        this.setState({email: e.target.value, msg: null })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const result = await addToMailchimp(this.state.email)
        this.setState({msg: result.msg })
        setTimeout(()=>this.setState({ msg: null }),5000)
        if (result.result==="success" && window.ga){
            window.ga("send", "event", {
                eventCategory: "Subscribe",
                eventAction: "subscribe success",
                eventLabel: "Subscribe Campaign",
                eventValue: 1
            })
        }
    }

    render(){
        return (
            <div className={styles.container}>
                <TextField 
                    type="email" 
                    value={this.state.email}
                    placeholder="email"
                />
                <Button 
                    onClick={this.handleSubmit}>
                    Subscribe
                </Button>
                <MySnackbar msg={this.state.msg}/>
            </div>
        )
    }
}

export default Subscribe