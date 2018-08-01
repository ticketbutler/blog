import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import './index.css'
import "../layout-overide.css";

const IndexPage = () => ( <
  div >

  <
  h1 > Hi people < /h1>  <
  p > Welcome to your new Gatsby site. < /p>  <
  p > Now go build something great. < /p>  <
  Link to = "/page-2/" > Go to page 2 < /Link>  <
  /div >
)

export default IndexPage