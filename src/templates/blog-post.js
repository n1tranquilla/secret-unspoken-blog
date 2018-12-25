import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Column from '../components/Column'
import Disqus from 'disqus-react'
import StoryEngagement from "../components/StoryEngagement"
import PostHeader from '../components/PostHeader'
import PostLink from "../components/PostLink"
import AddToHomeScreen from '../components/AddToHomeScreen'
import Helmet from 'react-helmet'
import ArticleStructuredData from "../components/ArticleStructuredData"
import moment from 'moment'
import BlogPostFooter from "../components/BlogPostFooter/BlogPostFooter"

export default ({ data, location, pageContext }) => {
  const siteMeta = data.site.siteMetadata
  const post = data.markdownRemark
  const disqusConfig = {
    url: location.href,
    identifier: post.fields.slug, 
    title: post.frontmatter.title
  }
  const { prev, next } = pageContext
  return ( 
    <React.Fragment>
      <ArticleStructuredData 
        title={post.frontmatter.title}
        slug={post.frontmatter.slug}
        author={post.frontmatter.author}
        imgs={[post.frontmatter.banner]}
        description={post.frontmatter.description}
        blogName={siteMeta.title}
        pubDate={post.frontmatter.date}
        modDate={post.frontmatter.date}
        siteUrl={siteMeta.siteUrl}
      />
      <Helmet>
        <title>{post.frontmatter.title}</title>   
      </Helmet>
      <Layout>
        <AddToHomeScreen after={15000} />
        <Column>
            <PostHeader 
              title={post.frontmatter.title} 
              date={moment(post.frontmatter.date).format("DD MMMM, YYYY")} 
              wordCount={post.wordCount.words}
            />
            <StoryEngagement url={location.href}/>
            <div className="markdown-body" dangerouslySetInnerHTML={{ __html: post.html }} />
            { next && <PostLink isNext={true} to={next.fields.slug}>{next.frontmatter.title}</PostLink> }
            { prev && <PostLink isNext={false} to={prev.fields.slug}>{prev.frontmatter.title}</PostLink> }
            <BlogPostFooter />
            <Disqus.DiscussionEmbed shortname={siteMeta.shortname} config={disqusConfig}/>
        </Column>
      </Layout>
    </React.Fragment>
    
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        shortname
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        author
        description
        banner
      }
      fields {
        slug
      }
      wordCount {
        words
      }
    }
  }
`