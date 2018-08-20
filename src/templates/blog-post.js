import React from 'react'
import { Layout } from '../layouts/index.js'

export default function Template({ pathContext }) {
  const post = pathContext
  const { title, date, image } = post.frontmatter

  return (
    <Layout title={title}>
      <img
        style={{
          width: '100%',
        }}
        src={post.frontmatter.image}
      />
      <h2>{post.frontmatter.date}</h2>
      <div className="blog-post-container">
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
        image
        date
        path
        title
        author
      }
    }
  }
`
