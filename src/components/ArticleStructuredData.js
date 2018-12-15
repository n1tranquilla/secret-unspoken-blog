import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import moment from 'moment'

const ArticleStructuredData = props => {
    const { title, slug, author, description } = props 
    const { blogName, imgs, pubDate, modDate, siteUrl } = props
    const content=JSON.stringify({
        "@context": "http://schema.org",
        "@type": "NewsArticle",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": slug
        },
        "headline": title,
        "image": imgs,
        "datePublished": moment.utc(pubDate,"YYYY-MM-DD").format(),
        "dateModified": moment.utc(modDate,"YYYY-MM-DD").format(),
        "author": {
            "@type": "Person",
            "name": author
        },
        "publisher": {
            "@type": "Organization",
            "name": blogName,
            "logo":{
                "@type": "ImageObject",
                "url": `${siteUrl}/site-logo.png`
            }
        },
        "description": description
    })
    return (
        <Helmet>
            <script type="application/ld+json">{ content }</script>
        </Helmet>  
    )
}

const strType=PropTypes.string
ArticleStructuredData.propTypes={
    title: strType.isRequired,
    slug: strType.isRequired,
    author: strType.isRequired,
    description: strType.isRequired,
    blogName: strType.isRequired,
    imgs:PropTypes.arrayOf([strType]),
    pubDate: strType.isRequired,
    modDate: strType.isRequired,
    siteUrl: strType.isRequired
}

export default ArticleStructuredData