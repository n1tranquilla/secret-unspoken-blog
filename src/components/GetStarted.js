import React from 'react'
import ArrowRight from '@material-ui/icons/ArrowRightAlt'
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

const GetStarted = props => (
    <Link className={styles.link} to="/posts">
        Get Started
        <ArrowRight />
    </Link>
)

export default withStyles(custom)(GetStarted)