module.exports = {
  siteMetadata: {
    title: 'Secret Unspoken',
    tagline: 'Facilitating better community for men',
    description: 'A blog discussing sexual addiction among men',
    siteUrl: 'https://secret-unspoken.github.io',
    shortname: 'secret-unspoken',
    twitterUrl: 'https://twitter.com/SecretUnspoken1',
    facebookUrl: 'https://www.facebook.com/secretunspoken',
    instagramUrl: 'https://www.instagram.com/secretunspoken',
    gaTrackingId: 'UA-127453671-1'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-127453671-1",
        // Puts tracking script in the head instead of the body
        head: true
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://github.us19.list-manage.com/subscribe/post?u=14379fe8d1e848c74f7728730&amp;id=b473346c05', // see instructions section below
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options:{
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: {frontmatter: { type: { eq: "post" } }}
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Secret Unspoken RSS Feed",
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/favicon.png",

        appName: "Secret Unspoken", // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#245F57',
        theme_color: '#000000',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/?homescreen=1',
        version: '1.0',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://secret-unspoken.github.io',
        sitemap: 'https://secret-unspoken.github.io/rss.xml',
        policy: [
          { userAgent: '*', allow: '/'},
          { userAgent: '*', disallow: '/me'},
          { userAgent: '*', disallow: '/mission'},
          { userAgent: '*', disallow: '/subscribe'},
          { userAgent: '*', disallow: '/posts$'},
          { userAgent: '*', disallow: '/posts/$'}
        ]
      }
    }
  ],
}
