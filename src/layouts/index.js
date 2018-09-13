import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../layouts/layout-overide.css'
import Media from 'react-media'

export const Layout = ({ children, title }) => (
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <div
      style={{
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <Media query={{ maxWidth: 848 }}>
        {matches =>
          matches ? (
            <div
              style={{
                margin: '0 auto',
                maxWidth: 980,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: '100%',
                padding: '25px',
              }}
            >
              <div
                style={{
                  flex: 2,
                }}
              >
                {typeof children === 'function' ? children() : children}
              </div>
            </div>
          ) : (
            <div
              style={{
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              <div
                style={{
                  marginLeft: '15%',
                  marginRight: '15%',
                  marginTop: '2em',
                  paddingRight: '30px',
                  textAlign: 'center',
                }}
              >
                {typeof children === 'function' ? children() : children}
              </div>
              <div style={{ flex: 1 }} />
            </div>
          )
        }
      </Media>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
