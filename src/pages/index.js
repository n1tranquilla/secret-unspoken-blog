import React from 'react'
import Layout from '../components/Layout'
import Column from '../components/Column'
import { graphql } from 'gatsby'
import GetStarted from '../components/GetStarted'
import Subscribe from '../components/Subscribe'
import Hidden from '@material-ui/core/Hidden'
import SecondaryContent from '../components/SecondaryContent'
import FollowUs from '../components/FollowUs'

const IndexPage = (props) => (
  <Layout>
    <Hidden smDown>
      <Column maxWidth='25vw'/>
    </Hidden>
    <Column>
      <FollowUs twitterUrl={props.data.site.siteMetadata.twitterUrl}/>
      <div className="markdown-body" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
      <GetStarted />
      <Hidden mdUp>
        <hr/>
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
      </Column>
    </Hidden>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        twitterUrl
      }
    }
    markdownRemark(frontmatter: { title: { eq: "mission" } }) {
      html
    }
  }
`
