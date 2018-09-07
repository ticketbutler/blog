import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Header from '../components/header'
import Media from 'react-media'
import {
  SmallTriangle,
  SquareShape,
  BigTriangle,
} from '../components/elements/shapes'
import { RightImage } from '../components/elements/elements'

import '../styles/blog-listing.css'

export default function Index({ data }) {
  console.log(data)
  const { edges: posts } = data.allMarkdownRemark

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
        <SquareShape>
          <div
            className="shape"
            style={{
              display: 'flex',
              position: 'absolute',
              top: '70%',
              left: '120%',
            }}
          >
            <span id="first" />
            <span id="second" />
          </div>
        </SquareShape>

        <BigTriangle>
          <div
            style={{
              position: 'absolute',
              left: '100%',
            }}
            className="shape"
          >
            <span id="first">&#x25BC;</span>
            <span id="second">&#x25BC;</span>
          </div>
        </BigTriangle>

        <SmallTriangle>
          <div
            className="shape"
            style={{
              position: 'absolute',
              top: '70%',
              right: ' 110%',
            }}
          >
            <span id="first">&#x25BC;</span>
            <span id="second">&#x25BC;</span>
          </div>
        </SmallTriangle>

        {posts

          .filter(post => post.node.frontmatter.title.length > 0)
          .sort()
          .map(({ node: post }) => {
            return (
              <div className="blogParent">
                <div className="blog-post-preview" key={post.id}>
                  <div>
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
                  </div>
                  <div
                    className="swappable-row"
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
                        <div
                          className="second_shape first-box blue"
                          style={{
                            position: 'absolute',
                            zIndex: -2,
                            height: 240,
                            width: 250,
                            right: 510,
                            top: 480,
                            backgroundColor: '#326de9',
                          }}
                        />
                        <div
                          className="second_shape second-box green"
                          style={{
                            position: 'absolute',
                            zIndex: -1,
                            top: 545,
                            right: 520,
                            height: 210,
                            width: 270,
                            backgroundColor: '#1dc9cc',
                            clipPath: 'polygon(0 0, 0% 100%, 100% 100%)',
                          }}
                        />
                        <div className="clear-fix" />
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          padding: '1em',
                          justifyContent: 'space-between',
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
              </div>
            )
          })}
      </div>
      <style jsx>{`
        .blogParent:nth-child(2n) .swappable-row {
          display: flex;
          flex-direction: row-reverse;
        }
      `}</style>
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
