import React from 'react'
import { Link } from 'gatsby'

import styles from './BlogListItem.module.css'

const BlogListItem = props => (
    <div className={styles.blogListItem}>
        <span className={styles.date}>{props.date}</span>
        <Link className={styles.title} to={props.to}><h2 className={styles.title}>{props.title}</h2></Link>
        <span className={styles.excerpt}>{props.excerpt}</span>
    </div>
)

export default BlogListItem