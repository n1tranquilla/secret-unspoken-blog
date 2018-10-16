import React from 'react'

import Share from '@material-ui/icons/Share'
import IconButton from '@material-ui/core/IconButton'
import styles from './StoryEngagement.module.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import MySnackbar from './MySnackbar'

class StoryEngagement extends React.Component {

    state={
        copied:false
    }

    handleCopy = () => {
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
                    <IconButton>
                        <CopyToClipboard className={styles.share} text={this.props.url} onCopy={this.handleCopy}>
                            <Share/>
                        </CopyToClipboard>
                    </IconButton>
                </div>
                <MySnackbar msg={this.state.copied && "Link copied to clipboard"}/>
            </React.Fragment>
            
        )
    }
}

export default StoryEngagement