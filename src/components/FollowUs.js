import React from 'react'
import RSSIcon from '@material-ui/icons/RssFeed'
import { Link } from 'gatsby'

import styles from './FollowUs.module.css'

import Twitter from './twitter.svg'

const FollowUs = props => (
    <div className={styles.container}>
        <a className={styles.link} href={props.twitterUrl} alt="Twitter">
            <img src={Twitter} height={24} width={24} alt="Twitter"/>
        </a>
        <Link className={styles.link} to="/rss.xml" alt="RSS">
            <RSSIcon height={24} width={24}/>
        </Link>
    </div>
)

export default FollowUs