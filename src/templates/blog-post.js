import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Column from '../components/Column'
import DateOfPost from '../components/DateOfPost'
import "github-markdown-css"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
        <Column>
            <DateOfPost>{post.frontmatter.date}</DateOfPost>
            <h2>{post.frontmatter.title}</h2>
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