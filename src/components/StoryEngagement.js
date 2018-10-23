import React from 'react'

import Share from '@material-ui/icons/Link'
import Button from '@material-ui/core/Button'
import styles from './StoryEngagement.module.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import MySnackbar from './MySnackbar'

class StoryEngagement extends React.Component {

    state={
        copied:false
    }

    handleCopy = (text) => {
        clearTimeout(this.copyId)
        this.setState({copied:true})
        this.copyId=setTimeout(()=>this.setState({copied:false}),5000)
        if (window.ga){
            window.ga("send", "event", {
                eventCategory: "Sharing",
                eventAction: text,
                eventLabel: "Sharing Campaign",
                eventValue: 1
            })
        }
    }

    componentWillUnmount(){
        clearTimeout(this.copyId)
    }

    render(){

        let href
        if (URL){
            const url = new URL(this.props.url)
            url.searchParams.append("suid",Date.now())
            href=url.href
        } else {
            href=this.props.url
        }
        
        return (
            <React.Fragment>
                <div className={styles.container}>
                    <Button>
                        <CopyToClipboard text={href} onCopy={this.handleCopy}>
                            <div className={styles.buttonContent}><Share/><pre> Copy Page URL</pre></div>
                        </CopyToClipboard>
                    </Button>
                </div>
                <MySnackbar msg={this.state.copied && "URL copied to clipboard"}/>
            </React.Fragment>
            
        )
    }
}

export default StoryEngagement