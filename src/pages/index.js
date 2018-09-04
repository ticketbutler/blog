import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Header from '../components/header'
import Media from 'react-media'

import '../styles/blog-listing.css'

export default function Index({ data }) {
  console.log(data)
  const posts = data.allMarkdownRemark.edges

  return (
    <div>
      <Header />
      <div
        style={{
          margin: '5em auto',
          width: '100%',
          maxWidth: '42em',
          padding: '0 1em',
          position: 'relative',
        }}
        className="blog-posts"
      >
        {posts

          .filter(post => post.node.frontmatter.title.length > 0)
          .sort()
          .map(({ node: post }) => {
            return (
              <div className="blog-post-preview" key={post.id}>
                <h1>
                  <Link
                    style={{
                      color: '#333F52',
                    }}
                    to={post.frontmatter.path}
                  >
                    {post.frontmatter.title}
                  </Link>
                </h1>
                <div
                  style={{
                    display: 'flex',
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: 300,
                        height: 200,
                      }}
                    >
                      <img
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                        src={post.frontmatter.image}
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                      }}
                    >
                      <h2>{post.frontmatter.date}</h2>
                      <h2>{post.frontmatter.author}</h2>
                    </div>
                  </div>

                  <div
                    style={{
                      padding: '2em',
                    }}
                  >
                    <p
                      style={{
                        maxWidth: 350,
                        textAlign: 'justify',
                        minWidth: 350,
                        justifyContent: 'space-between',
                        padding: '1em',
                      }}
                    >
                      {post.excerpt}
                    </p>
                    <h2
                      style={{
                        textAlign: 'right',
                        fontSize: '20px',
                        color: '#3465DA',
                        lineHeight: '24px',
                      }}
                    >
                      <a
                        href={post.frontmatter.path}
                        style={{
                          textDecoration: 'none',
                          color: '#1DC9CA',
                        }}
                      >
                        Read More
                        <span
                          style={{
                            color: '#1DC9CA',
                          }}
                        >
                          >>
                        </span>
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          excerpt(pruneLength: 150)
          id
          frontmatter {
            title
            image
            date
            path
            author
          }
        }
      }
    }
  }
`
