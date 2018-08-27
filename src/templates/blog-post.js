import React from 'react'
import { Layout } from '../layouts/index.js'

export default function Template({ pathContext }) {
  const post = pathContext
  const { title, date, author, image } = post.frontmatter

  return (
    <Layout title={title}>
      <a
        href="./"
        style={{
          margin: '0 auto',
          fontSize: '1.2rem',
          textDecoration: 'none',
        }}
      >
        {title}
      </a>

      <img
        style={{
          width: '100%',
          paddingTop: '1em',
        }}
        src={post.frontmatter.image}
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingLeft: '2em',
          paddingRight: '2em',
        }}
      >
        <h2>{post.frontmatter.date}</h2>
        <h2>{post.frontmatter.author}</h2>
      </div>
      <div className="blog-post-container">
        <div className="blog-post">
          <div
            style={{
              textAlign: 'justify',
              textJustify: 'inter-word',
              margin: '5em auto',
              width: '100%',
              maxWidth: '50em',
              padding: '0 1em',
              position: 'relative',
            }}
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
