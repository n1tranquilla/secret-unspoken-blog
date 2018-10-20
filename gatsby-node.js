const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { filter, pathOr, equals, compose } = require('ramda')

const getFileType = pathOr('',['node','frontmatter','type'])
const filterByFileType = type => filter(compose(
  equals(type),getFileType
))
const getEdges = pathOr([],['data','allMarkdownRemark','edges'])

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: node.frontmatter.type==='post' ? '/posts'+slug : slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
          edges {
            node {
              frontmatter {
                type
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      const all=getEdges(result)
      const posts = filterByFileType("post")(all)
      const pages = filterByFileType("page")(all)
      posts.forEach(({ node },index) => {
        const prev = index === 0 ? false : posts[index - 1].node
        const next = index === posts.length - 1 ? false : posts[index + 1].node
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
            prev,
            next
          },
        })
      })
      pages.forEach(({ node })=>{
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}