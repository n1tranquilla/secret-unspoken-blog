import React from 'react'
import Subtitle from './Subtitle';
import styles from './SplashSection.module.css'

const SplashSection = props => (
    <React.Fragment>
        <Subtitle>{props.subtitle}</Subtitle>
        <span className={styles.welcomeText}>Intrigued? Visit the <a href="/why">Why page</a> to see what we're about and why we're doing it.</span>
    </React.Fragment>
)

export default SplashSection