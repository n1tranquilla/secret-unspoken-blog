import React from 'react'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'
import MobileFooter from './MobileFooter'
import Helmet from 'react-helmet'
import CopyrightNotice from './CopyrightNotice'
import { Location } from '@reach/router'

import { graphql, StaticQuery } from 'gatsby'
import Hidden from '@material-ui/core/Hidden'

import styles from './Layout.module.css'
import GoogleAnalytics from './GoogleAnalytics';


const Layout = props => (
    <StaticQuery
        query={graphql`
            query {
                site {
                siteMetadata {
                    title
                    subtitle
                    gaTrackingID
                }
            }
        }`
        }
        render={data => (
            <React.Fragment>
                <Helmet>
                    <title>{data.site.siteMetadata.title}</title>   
                    <link href="https://fonts.googleapis.com/css?family=Unica+One&text=Secret%20Unspoken" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Spectral|Karla" rel="stylesheet"/>
                    <meta name="Description" content="A blog about men's sexuality and sexual addiction"/>
                    <html lang="en" />
                </Helmet>
                <GoogleAnalytics gaTrackingID={data.site.siteMetadata.gaTrackingID}/>
                <Hidden smDown>
                    <DesktopHeader 
                        title={data.site.siteMetadata.title}
                        subtitle={data.site.siteMetadata.subtitle}
                    />
                </Hidden>
                <Hidden mdUp>
                    <MobileHeader 
                        title={data.site.siteMetadata.title}
                        subtitle={data.site.siteMetadata.subtitle}
                    />
                </Hidden>
                <div className={styles.layout}>
                    { props.children }
                </div>
                <CopyrightNotice/>
                <Hidden mdUp>
                    <Location>
                        { ({ location }) => <MobileFooter location={location}/> }
                    </Location>
                </Hidden>
            </React.Fragment>
        )}
    />
    
)

export default Layout

