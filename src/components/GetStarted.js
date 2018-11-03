import React from 'react'
import { Link } from 'gatsby'
import ButtonContained from './Button/ButtonContained'

import styles from './GetStarted.module.css'

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
        <Link className={styles.link} onClick={handleClick} to="/posts">
            <ButtonContained>
                Get Started &#8594;
            </ButtonContained>
        </Link>
    </div>
    
)

export default GetStarted