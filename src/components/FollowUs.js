import React from 'react'
import RSSIcon from '@material-ui/icons/RssFeed'
import { Link } from 'gatsby'
import classNames from 'classnames'

import styles from './FollowUs.module.css'

import Twitter from './twitter.svg'
import Facebook from './facebook.svg'
import Instagram from './instagram.svg'

const FollowUs = props => (
    <div className={styles.container}>
        <a className={classNames(styles.link,styles.linkTwBlue)} href={props.twitterUrl} alt="Twitter">
            <img src={Twitter} height={24} width={24} alt="Twitter"/>
        </a>
        <a className={classNames(styles.link,styles.linkFbBlue)} href={props.facebookUrl} alt="Facebook">
            <img src={Facebook} height={24} width={24} alt="Facebook"/>
        </a>
        <a className={classNames(styles.link,styles.linkIPink)} href={props.instagramUrl} alt="Instagram">
            <img src={Instagram} height={20} width={20} alt="Instagram"/>
        </a>
        <Link className={classNames(styles.link,styles.linkRssOrange)} to="/rss.xml" alt="RSS">
            <RSSIcon height={24} width={24}/>
        </Link>
    </div>
)

export default FollowUs