import React from 'react'
import PropTypes from 'prop-types'

import IconButton from '@material-ui/core/IconButton'
import Popover from '@material-ui/core/Popover'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

import styles from './MorePopover.module.css'

class MorePopover extends React.Component {
  state = {
    anchorEl: null,
  }

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    })
  }

  handleClose = () => {
    this.setState({
      anchorEl: null,
    })
  }

  render() {
    const { anchorEl } = this.state
    const { vert } = this.props
    const open = Boolean(anchorEl)

    const MoreIcon = vert ? MoreVertIcon : MoreHorizIcon

    return (
      <div className={styles.container}>
        <IconButton
          aria-owns={open ? 'more-popper' : undefined}
          aria-haspopup="true"
          variant="contained"
          onClick={this.handleClick}
        >
          <MoreIcon
            color="inherit" 
            fontSize="small" />
        </IconButton>
        <Popover
          id="more-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'middle'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <div className={styles.content}>
            { this.props.children }
          </div>
        </Popover>
      </div>
    )
  }
}

MorePopover.propTypes={
    vert: PropTypes.bool.isRequired
}

MorePopover.defaultProps={
    vert: true
}

export default MorePopover