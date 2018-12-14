import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Column from '../components/Column'
import PostHeader from '../components/PostHeader'
import Helmet from 'react-helmet'
import "github-markdown-css"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <React.Fragment>
      <Helmet>
        <title>{data.site.siteMetadata.title} | {post.frontmatter.title}</title>
      </Helmet>
      <Layout>
          <Column>
              <PostHeader 
                title={post.frontmatter.title} 
                date={post.frontmatter.date}
              />
              <div className="markdown-body" dangerouslySetInnerHTML={{ __html: post.html }} />
          </Column>
      </Layout>
    </React.Fragment>
    
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`