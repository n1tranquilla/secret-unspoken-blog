import React from 'react'
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'

import styles from './GetStarted.module.css'

const custom = {
    button: {
        backgroundColor: '#4db6ac',
        color: 'black',
        '&:hover':{
            backgroundColor: '#00867d'
        }
    }
}

const handleClick = () => {
    if (window.ga){
        window.ga("send", "event", {
            eventCategory: "Retention",
            eventAction: "posts",
            eventLabel: "Retention Campaign",
            eventValue: 1
        })
    }
}

const GetStarted = props => (
    <div className={styles.container}>
        <Link onClick={handleClick} to="/posts">
            Get Started &#8594;
        </Link>
    </div>
    
)

export default withStyles(custom)(GetStarted)