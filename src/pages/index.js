import React from "react"
import { graphql } from "gatsby"
import styled, { createGlobalStyle} from "styled-components"
import {Main, Header, Footer} from '../components'

const GlobalStyle = createGlobalStyle`
html, body {
  width: 100%;
  height: 100%;
}
`
const LayoutStyle = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`

export default function Home({data}) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <LayoutStyle>
        <Header />
        <Main>
        Hello World
        </Main>
        <Footer />
      </LayoutStyle>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            name
            slogan
          }
          html
        }
      }
    }
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90){
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            skills
          }
          html
        }
      }
    }
    jobs: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/jobs/"}}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            company
            title
            startDate
            endDate
            tasks
          }
        }
      }
    }
    featured: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/featured/" } }) {
      edges {
        node {
          frontmatter {
            title
            cover {
              childImageSharp {
                fluid (maxWidth: 700, quality: 90){
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            technologies
            external
          }
          html
        }
      }
    }
    others: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/other/" } }) {
      edges {
        node {
          frontmatter {
            title
            technologies
          }
          html
        }
      }
    }
  }
`
