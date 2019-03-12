import React from "react"
import styled, { css } from "styled-components"
import Layout from "../../components/layout2"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import gatsbyAstronaut from "../../images/gatsby-astronaut.png"

const UserWreapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0, auto, 12px, auto;
`

const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  margin: 0;
`
const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`

const Username = styled.div`
  margin: 0 0 12px 0;
  color: red;
`

const Excerpt = styled.p`
  margin: 0;
`

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: green;
  border: 2px solid green;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props =>
    props.primary &&
    css`
      background: lightblue;
      color: palevioletred;
    `}
`

const User = props => (
  <UserWreapper>
    <Avatar src={props.avatar} alt="" />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWreapper>
)

const AboutPage = ({ data }) => (
  <Layout>
    <div>
      <h1>About Page</h1>
      <User
        username={data.site.siteMetadata.author}
        avatar={gatsbyAstronaut}
        excerpt="Getting to learn gatsby for web develepment"
      />
      <br />
      <Link to="/">Home</Link>
    </div>
    <Button as={Link} href="www.google.dk" target="_blank" primary />
    <Button as={Link} href="/docs" prefetch>
      Documentation
    </Button>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default AboutPage
