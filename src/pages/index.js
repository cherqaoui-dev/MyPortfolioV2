import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import {Main, Header, Footer, SocialSideBar, EmailSidebar, Loader, SEO} from "../components"
import { Hero, About, Jobs, Projects, Contact } from "../components/sections"

const LayoutStyle = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`

export default function Home({data}) {

  const [menuState, setMenuState] = useState(false)

  return (
    <React.Fragment>
      <Loader />
      <SEO />
      <LayoutStyle>
        <Header menuState={menuState} setMenuState={setMenuState} />
        <SocialSideBar />
        <EmailSidebar />
        <Main menuState={menuState}>
          <Hero id="hero" data={data.hero.edges[0].node} />
          <About id="about" data={data.about.edges[0].node} />
          <Jobs id="jobs" data={data.jobs.edges} />
          <Projects 
            id="projects"
            data={
              {
              'featuredList': data.featured.edges,
              'cardList': data.others.edges
              }
            }
          />
          <Contact id="contact" data={data.contact.edges[0].node}/>
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
    featured: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/featured/"}}, sort: {fields: frontmatter___number}) {
      edges {
        node {
          frontmatter {
            number
            title
            cover {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            technologies
            external
            github
          }
          html
        }
      }
    }
    others: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/other/" }}, sort: {fields: frontmatter___number}) {
      edges {
        node {
          frontmatter {
            title
            external
            github
            technologies
          }
          html
        }
      }
    }
    contact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
      edges {
        node {
          html
        }
      }
    }
  }
`
