import React from 'react'
import { Layout } from '../layouts/index.js'
import Link from 'gatsby-link'

export default function Template({ data, location, pathContext }) {
  const post = pathContext.blog
  console.log(pathContext)
  const { markdownRemark: posts } = data
  const { title, date, author, image } = post.frontmatter
  const { next, prev } = pathContext
  const { frontmatter, html } = post

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
        {titldfsdfdfsfe}
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
          <p>
            {prev && (
              <Link to={prev.frontmatter.path}>
                Previous:
                {prev.frontmatter.title}
              </Link>
            )}
          </p>
          <p>
            {next && (
              <Link to={next.frontmatter.path}>
                Next:
                {next.frontmatter.title}
              </Link>
            )}
          </p>
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
