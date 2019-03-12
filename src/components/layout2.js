import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout2 = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath: { regex: "/fullscreen/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <Img
          style={{ maxHeight: "40vh" }}
          fluid={data.file.childImageSharp.fluid}
        />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 650,
            padding: `0 1rem`,
          }}
        >
          <header style={{ marginBottom: `1.5 rem` }}>
            <h3 style={{ display: `inline` }}>
              {data.site.siteMetadata.title}
            </h3>
            <ul style={{ listStyle: `none`, float: `right` }}>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/page-2">Page 2</ListLink>
              <ListLink to="/blog">Blog</ListLink>
              <ListLink to="/info/about">About</ListLink>
            </ul>
          </header>
          {children}
        </div>
      </div>
    )}
  />
)

Layout2.propTypes = {
  children: PropTypes.node.isRequired, // Page content
}

export default Layout2
