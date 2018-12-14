import React from 'react'
import Subscribe from '../components/Subscribe'
import Layout from '../components/Layout'
import Column from '../components/Column'
import Delay from '../components/Delay'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

const SubscribePage = props => (
    <React.Fragment>
        <Helmet>
            <title>{props.data.site.siteMetadata.title} | Subscribe</title>   
        </Helmet>
        <Layout>
            <Column>
                <Delay>
                    <Subscribe/>
                </Delay>
            </Column>
        </Layout>
    </React.Fragment>
    
)

export default SubscribePage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`