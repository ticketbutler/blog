import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Media from 'react-media'

import '../styles/blog-listing.css'

export default function Index({ data }) {
  console.log(data)
  const posts = data.allMarkdownRemark.edges
  return (
    <div className="blog-posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id}>
              <h1>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h1>

              <h2>{post.frontmatter.date}</h2>
              <h2>{post.frontmatter.author}</h2>
              <p>{post.excerpt}</p>
            </div>
          )
        })}
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

            date
            path
            author
          }
        }
      }
    }
  }
`
