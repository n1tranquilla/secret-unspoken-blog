import React from 'react'
import Header from './Header'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

import styles from './Layout.module.css'

const Layout = props => (
    <StaticQuery
        query={graphql`
            query {
                site {
                siteMetadata {
                    title
                }
                }
            }`
        }
        render={data => (
            <div>
                <Helmet>
                    <title>{data.site.siteMetadata.title}</title>   
                    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" />
                </Helmet>
                <Header title={data.site.siteMetadata.title}/>
                <div className={styles.layout}>
                    { props.children }
                </div>
            </div>
        )}
    />
    
)

export default Layout

