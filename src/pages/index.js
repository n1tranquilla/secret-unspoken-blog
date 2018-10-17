import React from 'react'
import Layout from '../components/Layout'
import Column from '../components/Column'
import { graphql } from 'gatsby'
import GetStarted from '../components/GetStarted'
import Subtitle from '../components/Subtitle'
import Subscribe from '../components/Subscribe'
import Hidden from '@material-ui/core/Hidden'
import SubscribeContainer from '../components/SubscribeContainer'

const IndexPage = (props) => (
  <Layout>
    <Hidden smDown>
      <Column maxWidth='25vw'/>
    </Hidden>
    <Column>
      <Subtitle >{props.data.site.siteMetadata.subtitle}</Subtitle>
      <div className="markdown-body" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
      <GetStarted />
      <Hidden mdUp>
        <hr/>
        <SubscribeContainer>
          <Subscribe/>
        </SubscribeContainer>
      </Hidden>  
    </Column>
    <Hidden smDown>
      <Column maxWidth='25vw'>
        <SubscribeContainer>
          <Subscribe/>
        </SubscribeContainer>
      </Column>
    </Hidden>
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
    markdownRemark(frontmatter: { title: { eq: "mission" } }) {
      html
    }
  }
`
