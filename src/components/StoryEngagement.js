import React from 'react'

import Share from '@material-ui/icons/Share'
import styles from './StoryEngagement.module.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import MySnackbar from './MySnackbar'
import Tooltip from '@material-ui/core/Tooltip'

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
                    <CopyToClipboard className={styles.share} text={this.props.url} onCopy={this.handleCopy}>
                        <Tooltip title="Share">
                            <Share/>
                        </Tooltip>
                    </CopyToClipboard>
                </div>
                <MySnackbar msg={this.state.copied && "Link copied to clipboard"}/>
            </React.Fragment>
            
        )
    }
}

export default StoryEngagement