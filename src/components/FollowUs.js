import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import RSSIcon from '@material-ui/icons/RssFeed'
import { Link } from 'gatsby'

import styles from './FollowUs.module.css'

import Twitter from './twitter.svg'

const FollowUs = props => (
    <div className={styles.container}>
        <IconButton component={props=><a {...props}>{props.children}</a>} href={props.twitterUrl} target="_blank"  alt="Twitter">
            <img src={Twitter} height={24} width={24} alt="Twitter"/>
        </IconButton>
        <IconButton component={Link} to="/rss.xml" target="_blank" alt="RSS">
            <RSSIcon />
        </IconButton>
    </div>
)

export default FollowUs