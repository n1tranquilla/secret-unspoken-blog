import React from 'react'
import Button from '@material-ui/core/Button'
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
    <div className={styles.container}>
        <Link className={styles.link} to="/posts">
            <Button variant="contained" color="primary" classes={{
                root: props.classes.button,
            }}>
                Get Started
                <ArrowRight />
            </Button>
        </Link>
      </div>
)

export default withStyles(custom)(GetStarted)