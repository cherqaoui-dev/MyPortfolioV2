import React from "react"
import { graphql } from "gatsby"
import {Layout} from '../components'

export default function Home({data}) {
  return (
  <Layout>
    Hello world
  </Layout>
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
