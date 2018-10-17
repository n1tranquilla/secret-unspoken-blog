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

    handleCopy = () => {
        clearTimeout(this.copyId)
        this.setState({copied:true})
        this.copyId=setTimeout(()=>this.setState({copied:false}),5000)
    }

    componentWillUnmount(){
        clearTimeout(this.copyId)
    }

    render(){
        return (
            <React.Fragment>
                <div className={styles.container}>
                    <Button>
                        <CopyToClipboard text={this.props.url} onCopy={this.handleCopy}>
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