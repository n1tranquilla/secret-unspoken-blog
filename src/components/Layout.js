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


const Layout = props => (
    <StaticQuery
        query={graphql`
            query {
                site {
                siteMetadata {
                    title
                    tagline,
                    description
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
                    <meta name="Description" content={data.site.siteMetadata.description}/>
                    <html lang="en" />
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

