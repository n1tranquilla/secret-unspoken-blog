import React from 'react'
import Layout from '../components/Layout'
import BlogListItem from '../components/BlogListItem'
import Column from '../components/Column'
import Subtitle from '../components/Subtitle'
import { graphql } from 'gatsby'

import './index.css'

const IndexPage = (props) => (
  <Layout>
    <Column>
      <Subtitle>{props.data.site.siteMetadata.subtitle}</Subtitle>
      { props.data.allMarkdownRemark.edges.map(({ node })=>(
        <BlogListItem 
          to={node.fields.slug}
          title={node.frontmatter.title} 
          date={node.frontmatter.date} 
          excerpt={node.excerpt}
        />
      )) }
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
    allMarkdownRemark(filter: { frontmatter: { type: { eq:"post" } } }, sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
