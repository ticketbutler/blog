import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Media from 'react-media'
import dateFns from 'date-fns'
import {
  SmallTriangle,
  SquareShape,
  BigTriangle,
} from '../components/elements/shapes'
import { RightImage } from '../components/elements/elements'
import '../styles/blog-listing.css'
//import postLayouts from '../layouts/post'
import logo from '../../images/logo_white.png'
export default function Index({ data }) {
  console.log(data)
  const { edges: posts } = data.allMarkdownRemark

  return (
    <div>
      <div
        style={{
          width: '100%',
          height: 600,
          backgroundColor: 'black',
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            position: 'absolute',
            margin: 'auto',
            top: '20%',
            left: 0,
            right: 0,
          }}
        />
        <div
          style={{
            color: 'white',
            fontSize: 25,
            position: 'absolute',
            margin: 'auto',
            left: 0,
            right: 0,
            textAlign: 'center',
            top: '30%',
            paddingLeft: 315,
          }}
        >
          {' '}
          blog{' '}
        </div>
      </div>

      <div
        style={{
          margin: '4em auto',
          width: '100%',
          maxWidth: '50em',
          padding: '0 1em',
          position: 'relative',
        }}
        className="blog-posts"
      >
        {posts.sort().map(({ node: post }, i) => {
          /*  let Layout =
            postLayouts[(i + 1 * postLayouts.length) % postLayouts.length]
          console.log(Layout) */
          return (
            // <Layout>
            <div className="blogParent">
              <div className="blog-post-preview" key={post.id}>
                <div
                  className="swappable-row"
                  style={{
                    display: 'flex',
                    ...(i % 2 ? { flexDirection: 'row-reverse' } : {}),
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: 500,
                        height: 400,
                      }}
                    >
                      <img
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        src={post.frontmatter.image}
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      padding: '1em',
                      backgroundColor: '#4f4f4f',
                      position: 'absolute',
                      height: 300,
                      maxWidth: 400,
                      marginTop: '2em',
                      ...(i % 2 ? { left: 30 } : { right: 30 }),
                    }}
                  >
                    <div
                      style={{
                        borderBottom: '2px solid white',
                      }}
                    >
                      <Link
                        style={{
                          color: 'white',
                          fontSize: '0.5em',
                          textTransform: 'uppercase',
                          textDecoration: 'none',
                          ...(i % 2
                            ? { textAlign: 'right' }
                            : { textAlign: 'left' }),
                        }}
                        to={post.frontmatter.path}
                      >
                        <h1>{post.frontmatter.title}</h1>
                      </Link>
                    </div>

                    <p
                      style={{
                        textAlign: 'justify',
                        color: 'white',
                        fontSize: 15,
                        marginTop: 15,
                      }}
                    >
                      {post.excerpt}
                    </p>
                    <div>
                      <ul
                        style={{
                          width: '100%',
                          padding: 0,
                          ...(i % 2
                            ? { textAlign: 'right' }
                            : { textAlign: 'left' }),
                        }}
                      >
                        <li
                          style={{
                            color: 'white',
                            fontSize: 15,
                            display: 'inline-block',
                            width: '50%',
                            paddingTop: 10,
                            borderTop: '2px solid white',
                          }}
                        >
                          {dateFns.format(post.frontmatter.date, 'YYYY-MM-YY')}
                        </li>

                        <li
                          style={{
                            color: 'white',
                            fontSize: 15,
                            display: 'block',
                          }}
                        >
                          {post.frontmatter.author}
                        </li>
                      </ul>
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
                            position: 'absolute',

                            right: 0,
                            bottom: 0,
                            margin: '1em',
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
            </div>
            // </Layout>
          )
        })}
      </div>
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
