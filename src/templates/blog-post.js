import React from 'react'
import { Layout } from '../layouts/index.js'
import Link from 'gatsby-link'
import dateFns from 'date-fns'

export default function Template({ data, location, pathContext }) {
  const post = pathContext.blog

  const { markdownRemark: posts } = data
  const { title, date, author, image } = post.frontmatter
  const { next, prev } = pathContext
  const { frontmatter, html } = post

  return (
    <Layout title={title}>
      <div style={{}}>
        <div style={{ textAlign: 'center' }}>
          <a
            href="./"
            style={{
              margin: '0 auto',
              fontSize: '1.2rem',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
          >
            {title}
          </a>
        </div>

        <img
          style={{
            width: '100%',
            maxWidth: 850,
            minWidth: 850,
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
            color: 'lightslategrey',
          }}
        >
          <h2>{dateFns.format(post.frontmatter.date, 'YYYY-MM-YY')}</h2>
          <h2>{post.frontmatter.author}</h2>
        </div>
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
          <div
            style={{
              maxWidth: 850,
              margin: '0 auto',
            }}
          >
            <p
              style={{
                display: 'block',
                width: '50%',
                textAlign: 'left',
                float: 'left',
                fontSize: 15,
                textTransform: 'uppercase',
              }}
            >
              {prev && (
                <Link
                  to={prev.frontmatter.path}
                  style={{ textDecoration: 'none' }}
                >
                  Previous post
                  <h2 style={{ color: 'lightslategrey', fontSize: 18 }}>
                    {prev.frontmatter.title}
                  </h2>
                </Link>
              )}
            </p>
            <p
              style={{
                display: 'block',
                float: 'right',
                width: '50%',
                textAlign: 'right',
                textDecoration: 'none',
                textTransform: 'uppercase',
                fontSize: 15,
              }}
            >
              {next && (
                <Link
                  to={next.frontmatter.path}
                  style={{ textDecoration: 'none' }}
                >
                  Next post
                  <h2 style={{ color: 'lightslategrey', fontSize: 18 }}>
                    {next.frontmatter.title}
                  </h2>
                </Link>
              )}
            </p>
          </div>
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
