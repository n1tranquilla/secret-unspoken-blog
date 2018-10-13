import React from 'react'
import { Link } from 'gatsby'
import DateOfPost from './DateOfPost'

import styles from './BlogListItem.module.css'

const BlogListItem = props => (
    <div className={styles.blogListItem}>
        <Link className={styles.link} to={props.to}>
            <DateOfPost>{props.date}</DateOfPost>
            <h2 className={styles.title}>{props.title}</h2>
            <span className={styles.excerpt}>{props.excerpt}</span>
        </Link>
    </div>
)

export default BlogListItem