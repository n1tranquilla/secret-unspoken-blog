import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Column from '../components/Column'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
        <Column>
            <h2>{post.frontmatter.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
    }
  }
`