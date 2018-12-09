import React from 'react'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'
import MobileFooter from './MobileFooter'
import Helmet from 'react-helmet'
import CopyrightNotice from './CopyrightNotice'
import GoogleAnalyticsDisclaimer from './GoogleAnalyticsDisclaimer'
import { Location } from '@reach/router'
import BottomPadding from './BottomPadding'
import Support from './Support'
import FollowUs from './FollowUs'
import ThemeMounter from './Theme/ThemeMounter'

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
                    tagline,
                    description
                    gaTrackingId
                    twitterUrl
                    facebookUrl
                    instagramUrl
                }
            }
        }`
        }
        render={data => (
            <React.Fragment>
                <Helmet>
                    <html lang="en" />
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
                    
                    <title>{data.site.siteMetadata.title}</title>   
                    <meta name="Description" content={data.site.siteMetadata.description}/>

                    <meta name="flattr:id" content="vlp70e" />
                    
                    <link href="https://fonts.googleapis.com/css?family=Unica+One&text=Secret%20Unspoken" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Spectral|Karla" rel="stylesheet"/>
                </Helmet>
                <Hidden smDown>
                    <DesktopHeader 
                        title={data.site.siteMetadata.title}
                        subtitle={data.site.siteMetadata.tagline}
                    />
                </Hidden>
                <Hidden mdUp>
                    <MobileHeader 
                        title={data.site.siteMetadata.title}
                        subtitle={data.site.siteMetadata.tagline}
                    />
                </Hidden>
                <ThemeMounter />
                <div className={styles.layout}>
                    { props.children }
                </div>
                <BottomPadding />
                <FollowUs 
                    twitterUrl={data.site.siteMetadata.twitterUrl}
                    facebookUrl={data.site.siteMetadata.facebookUrl}
                    instagramUrl={data.site.siteMetadata.instagramUrl}
                />
                <CopyrightNotice/>
                <Support />
                <GoogleAnalyticsDisclaimer gaTrackingId={data.site.siteMetadata.gaTrackingId}/>
                <BottomPadding />
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

