import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Column from '../components/Column'
import Disqus from 'disqus-react'
import StoryEngagement from "../components/StoryEngagement"
import PostHeader from '../components/PostHeader'
import PostLink from "../components/PostLink"
import AddToHomeScreen from '../components/AddToHomeScreen'
import Helmet from 'react-helmet'

export default ({ data, location, pageContext }) => {
  const siteMeta = data.site.siteMetadata
  const post = data.markdownRemark
  const disqusConfig = {
    url: location.href,
    identifier: post.fields.slug, 
    title: post.frontmatter.title
  }
  const { prev, next } = pageContext
  return (
    <React.Fragment>
      <Helmet>
        <title>{post.frontmatter.title}</title>   
      </Helmet>
      <Layout>
        <AddToHomeScreen after={15000} />
        <Column>
            <PostHeader 
              title={post.frontmatter.title} 
              date={post.frontmatter.date} 
              wordCount={post.wordCount.words}
            />
            <StoryEngagement url={location.href}/>
            <div className="markdown-body" dangerouslySetInnerHTML={{ __html: post.html }} />
            { next && <PostLink isNext={true} to={next.fields.slug}>{next.frontmatter.title}</PostLink> }
            { prev && <PostLink isNext={false} to={prev.fields.slug}>{prev.frontmatter.title}</PostLink> }
            <Disqus.DiscussionEmbed shortname={siteMeta.shortname} config={disqusConfig}/>
        </Column>
      </Layout>
    </React.Fragment>
    
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        shortname
        title
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