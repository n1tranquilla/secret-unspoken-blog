import React from 'react'
import HeaderMeta from './HeaderMeta'

import styles from './PostHeader.module.css'

const estimateTTR = wc => Math.round(wc/250)

const PostHeader = props => (
    <div className={styles.metaHeading}>
        <div>
            <HeaderMeta>{props.date}</HeaderMeta>
            { props.wordCount && (
                <React.Fragment>
                    <HeaderMeta>•</HeaderMeta>
                    <HeaderMeta>{estimateTTR(props.wordCount)} min read</HeaderMeta>
                </React.Fragment>
            )}
        </div>
        <h2>{props.title}</h2>
    </div>
)

export default PostHeader