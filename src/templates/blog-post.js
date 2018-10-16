import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Column from '../components/Column'
import DateOfPost from '../components/DateOfPost'
import Disqus from 'disqus-react'
import StoryEngagement from "../components/StoryEngagement"

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
            <DateOfPost>{post.frontmatter.date}</DateOfPost>
            <h2>{post.frontmatter.title}</h2>
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
    }
  }
`