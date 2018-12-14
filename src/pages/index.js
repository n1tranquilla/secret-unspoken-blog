import React from 'react'
import Layout from '../components/Layout'
import Column from '../components/Column'
import { graphql } from 'gatsby'
import GetStarted from '../components/GetStarted'
import Subscribe from '../components/Subscribe'
import Hidden from '@material-ui/core/Hidden'
import SecondaryContent from '../components/SecondaryContent'
import BottomPadding from '../components/BottomPadding'
import PreviousPosts from '../components/PreviousPosts'
import Helmet from 'react-helmet'

const IndexPage = (props) => (
  <React.Fragment>
    <Helmet>
      <title>{props.data.site.siteMetadata.title}</title>   
    </Helmet>
    <Layout>
      <Hidden smDown>
        <Column maxWidth='25vw'/>
      </Hidden>
      <Column>
        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
        <GetStarted />
        <Hidden mdUp>
          <hr/>
          <BottomPadding />
          <SecondaryContent>
            <Subscribe/>
          </SecondaryContent>
        </Hidden>  
      </Column>
      <Hidden smDown>
        <Column maxWidth='25vw'>
          <SecondaryContent>
            <Subscribe/>
          </SecondaryContent>
          <SecondaryContent>
            <PreviousPosts posts={props.data.allMarkdownRemark}/>
          </SecondaryContent>
        </Column>
      </Hidden>
    </Layout>  
  </React.Fragment>
  
)

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { title: { eq: "mission" } }) {
      html
    }
    allMarkdownRemark(filter: { frontmatter: { type: { eq:"post" } } }, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMM DD")
          }
        }
      }
    }
  }
`
