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
                    <img src={post.frontmatter.image} />
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingLeft: '1em',
                        paddingRight: '1em',
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
                    <p>{post.excerpt}</p>
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
