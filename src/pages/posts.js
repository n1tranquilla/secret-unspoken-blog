import React from 'react'
import Layout from '../components/Layout'
import Column from '../components/Column'
import BlogListItem from '../components/BlogListItem'
import { graphql } from 'gatsby'

const PostsPage = props => (
    <Layout>
        <Column>
          { props.data.allMarkdownRemark.edges.map(({ node })=>(
              <BlogListItem 
              to={node.fields.slug}
              title={node.frontmatter.title} 
              date={node.frontmatter.date} 
              wordCount={node.wordCount.words}
              excerpt={node.excerpt}
              />
          )) }
        </Column>
    </Layout>
)

export default PostsPage

export const query = graphql`
  query {
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
          wordCount {
            words
          }
        }
      }
    }
  }
`