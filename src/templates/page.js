import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Column from '../components/Column'
import PostHeader from '../components/PostHeader'
import "github-markdown-css"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
        <Column>
            <PostHeader 
              title={post.frontmatter.title} 
              date={post.frontmatter.date}
            />
            <div className="markdown-body" dangerouslySetInnerHTML={{ __html: post.html }} />
        </Column>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`