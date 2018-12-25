import React from 'react'

import classes from './BlogPostFooter.module.css'
import { Link } from 'gatsby'

const BlogPostFooter = props => (
    <div className={classes.root}>
        Enjoying the content? <Link to="/subscribe">Subscribe</Link> to get notified when new content gets posted!
    </div>
)

export default BlogPostFooter