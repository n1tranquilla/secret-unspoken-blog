import React from 'react'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'
import MobileFooter from './MobileFooter'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'
import Hidden from '@material-ui/core/Hidden'

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
            <React.Fragment>
                <Helmet>
                    <title>{data.site.siteMetadata.title}</title>   
                    <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond|Nunito" rel="stylesheet"/>
                </Helmet>
                <Hidden smDown>
                    <DesktopHeader title={data.site.siteMetadata.title}/>
                </Hidden>
                <Hidden mdUp>
                    <MobileHeader title={data.site.siteMetadata.title}/>
                </Hidden>
                <div className={styles.layout}>
                    { props.children }
                </div>
                <Hidden mdUp>
                    <MobileFooter />
                </Hidden>
            </React.Fragment>
        )}
    />
    
)

export default Layout

