import React from 'react'
import { Link } from 'gatsby'

import styles from './PreviousPosts.module.css'

const handleClick = () => {
    if (window.ga){
        window.ga("send", "event", {
            eventCategory: "Retention",
            eventAction: "post",
            eventLabel: "Retention Campaign",
            eventValue: 1
        })
    }
}

const PreviousPosts = props => {
    const { edges } = props.posts
    return (
        <React.Fragment>    
            <h4>Previous Posts:</h4>
            <ul className={styles.list}>
                { edges.map(edge=>{
                    const { slug } = edge.node.fields
                    const { date, title } = edge.node.frontmatter
                    return (
                        <li className={styles.list__item}>
                            <Link to={slug} onClick={handleClick}>[{date}] {title}</Link>
                        </li>
                    )
                })}
            </ul>
        </React.Fragment>
    )
}

export default PreviousPosts