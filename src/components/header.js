import React from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo.png'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'linear-gradient(295.21deg, #326DE9 0%, #7E52E8 100%)',
      top: 0,
      zIndex: 100,
      height: '80px !important',
      padding: '0px,',
      width: '100%',
    }}
  >
    <img
      src={logo}
      style={{
        width: '10%',
        margin: '1em',
      }}
    />

    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
      }}
    />
  </div>
)

export default Header
