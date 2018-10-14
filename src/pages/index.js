import React from 'react'
import Layout from '../components/Layout'
import Column from '../components/Column'
import { graphql } from 'gatsby'
import Subtitle from '../components/Subtitle'

const IndexPage = (props) => (
  <Layout>
    <Column>
      <Subtitle >{props.data.site.siteMetadata.subtitle}</Subtitle>
      <div className="markdown-body" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
    </Column>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        subtitle
      }
    }
    markdownRemark(frontmatter: { title: { eq: "Our Mission" } }) {
      html
    }
  }
`
