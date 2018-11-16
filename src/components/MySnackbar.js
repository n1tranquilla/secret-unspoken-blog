import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import Hidden from '@material-ui/core/Hidden'

const MySnackbar = props => (
    <React.Fragment>
        <Hidden smDown>
            <Snackbar
                autoHideDuration={props.duration}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={props.msg}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<div id="message-id">{props.msg}</div>}
            />
        </Hidden>
        <Hidden mdUp>
            <Snackbar
                autoHideDuration={props.duration}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={props.msg}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<div id="message-id">{props.msg}</div>}
            />
        </Hidden>
    </React.Fragment>
)

MySnackbar.defaultProps={
    duration: 4000
}

export default MySnackbar