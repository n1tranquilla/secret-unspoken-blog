import React from 'react'
import { Link } from 'gatsby'

import styles from './PostLink.module.css'

const PostLink = props => (
    <div className={styles.container}>
        <pre>{props.prefix}<Link to={props.to}>{props.children}</Link></pre>
    </div>
)

export default PostLink