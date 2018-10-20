import React from 'react'
import { Link } from 'gatsby'
import PostHeader from './PostHeader'

import styles from './BlogListItem.module.css'

const BlogListItem = props => (
    <div className={styles.blogListItem}>
        <Link className={styles.link} to={props.to}>
            <PostHeader 
              title={props.title} 
              date={props.date} 
              wordCount={props.wordCount}
            />
            <span className={styles.excerpt}>{props.excerpt}</span>
        </Link>
    </div>
)

export default BlogListItem