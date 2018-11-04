import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './PostLink.module.css'

const next = <span>&#8594;</span>
const prev = <span>&#8592;</span>

const handleClick = () => {
    if (window.ga){
        window.ga("send", "event", {
            eventCategory: "Retention",
            eventAction: "next post",
            eventLabel: "Retention Campaign",
            eventValue: 1
        })
    }
}

const PostLink = props => (
    <div className={styles.container}>
        <pre>
            <Link
                onClick={handleClick} 
                to={props.to}>{props.isNext ? null : prev} {props.children} {props.isNext ? next : null}</Link>
        </pre>
    </div>
)

PostLink.propTypes={
    isNext: PropTypes.bool.isRequired
}

PostLink.defaultProps={
    isNext: true
}

export default PostLink