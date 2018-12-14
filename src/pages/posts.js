import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Column from '../components/Column'
import BlogListItem from '../components/BlogListItem'
import { graphql } from 'gatsby'

const PostsPage = props => (
  <React.Fragment>
    <Helmet>
      <title>{props.data.site.siteMetadata.title} | Posts</title>   
    </Helmet>
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
  </React.Fragment>
)

export default PostsPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
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
          wordCount {
            words
          }
        }
      }
    }
  }
`