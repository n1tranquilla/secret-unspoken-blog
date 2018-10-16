import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import MySnackbar from './MySnackbar'

import addToMailchimp from 'gatsby-plugin-mailchimp'
import sty from './Subscribe.module.css'

const styles={
    button: {
        border: '1px solid #8d8d8d',
        color: '#00867d',
        '&:hover':{
            backgroundColor: '#efefef',
            border: '1px solid #8d8d8d'
        }
    }
}

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
    }

    render(){
        return (
            <div className={sty.container}>
                <TextField
                    id="email"
                    label="Email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    className={this.props.classes.input}
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <Button 
                    variant="outlined" 
                    color="primary" 
                    onClick={this.handleSubmit}
                    classes={{root: this.props.classes.button}}>
                    Subscribe
                </Button>
                <MySnackbar msg={this.state.msg}/>
            </div>
        )
    }
}

export default withStyles(styles)(Subscribe)