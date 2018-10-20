import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Column from '../components/Column'
import Disqus from 'disqus-react'
import StoryEngagement from "../components/StoryEngagement"
import PostHeader from '../components/PostHeader'

export default ({ data, location }) => {
  const siteMeta = data.site.siteMetadata
  const post = data.markdownRemark
  const disqusConfig = {
    url: location.href,
    identifier: post.fields.slug, 
    title: post.frontmatter.title
  }
  return (
    <Layout>
        <Column>
            <PostHeader 
              title={post.frontmatter.title} 
              date={post.frontmatter.date} 
              wordCount={post.wordCount.words}
            />
            <StoryEngagement url={location.href}/>
            <div className="markdown-body" dangerouslySetInnerHTML={{ __html: post.html }} />
            <Disqus.DiscussionEmbed shortname={siteMeta.shortname} config={disqusConfig}/>
        </Column>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        shortname
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      fields {
        slug
      }
      wordCount {
        words
      }
    }
  }
`