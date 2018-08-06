import React from 'react'
import Helmet from 'react-helmet'
import { Layout } from '../layouts/index.js'

export default function Template({ pathContext }) {
  const post = pathContext
  const { title, date } = post.frontmatter

  return (
    <Layout title={title}>
      <div className="blog-post-container">
        <Helmet title={`Bloggg - ${title}`} />
        <div className="blog-post">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`
