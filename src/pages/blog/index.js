import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout2"

const Headline = styled.h1`
  display: inline-block;
  color: cornflowerblue;
`

export default ({ data }) => (
  <Layout>
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <title>My Blog Posts Overview (on Netlify)</title>
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="React, Javascript" />
        <meta name="author" content="King Kong" />
      </Helmet>
      <Headline>My Blog Posts</Headline>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <hr />
          <Link to={node.fields.slug} style={{ textDecoration: "none" }}>
            <h3>{node.frontmatter.title}</h3>
            <p>
              <i>{node.frontmatter.date}</i>
            </p>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
