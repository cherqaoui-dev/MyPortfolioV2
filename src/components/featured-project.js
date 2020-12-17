import React from 'react'
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { IconExternal, IconGithub } from "./icons"
import {fonts, colors, fontSizes, media} from "../styles"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  overflow: hidden;
  position: relative;
  margin-bottom: 100px;

  ${media.phoneL`
    margin-bottom: 60px;
  `}
`
const Cover = styled(Img)`
  grid-column: ${({counter}) => (counter % 2 === 0) ? `1 / 8` : `6/13`};
  grid-row: 1/1;
  border-radius: 4px;

  ${media.phoneL`
    grid-column: 1 / 13;
  `}
`

const Info = styled.div`
  position: relative;
  padding: 2em 0;
  z-index: 2;
  grid-column: ${({counter}) => (counter % 2 === 0) ? `6 / 13` : `1 / 8`};
  grid-row: 1/1;
  direction: ${({counter}) => (counter % 2 === 0) ? `rtl` : `ltr`};

  ${media.phoneL`
    grid-column: 1 / 13;
    background: ${colors.lightGreen};
    opacity: 0.95;
    padding: 2em 1.5em;
  `}
  ${media.phone`
    padding: 1em 0.5em;
  `}
`
const Type = styled.div`
  margin-bottom: 10px;
  font-family: ${fonts.mono};
  font-size: ${fontSizes.sm};
  color: ${colors.green};
  text-transform: capitalize;
`
const Title = styled.h3`
  margin-bottom: 20px;
  color: ${colors.lightestSlate};
`
const Description = styled.div`
  max-width: 500px;
  margin-bottom: 20px;
  padding: 1em 1.5em;
  font-size: ${fontSizes.lg};
  color: ${colors.lightSlate};
  background: ${colors.lightNavy};
  box-shadow: 2px 2px 5px ${colors.navyShadow};
  border-radius: 4px;

  ${media.phoneL`
    background: transparent;
    box-shadow: unset;
    padding 1em 0;
  `}
`
const TechList = styled.ul`
  margin-bottom: 20px;
  & > * {
    margin: ${({counter}) => (counter % 2 === 0) ? `0 0 0 20px` : `0 20px 0 0`};
  }
`
const TechItem = styled.li`
  display: inline;
  font-type: ${fonts.mono};
  font-size: ${fontSizes.md};
`
const LinkList = styled.ul`
  & > * {
    margin: ${({counter}) => (counter % 2 === 0) ? `0 0 0 20px` : `0 20px 0 0`};
  }
`
const LinkItem = styled.li`
  display: inline;
`
const IconLink = styled(Link)`
  display: inline-block;
  cursor: pointer;
  width: 24px;
  height: 24px;
  fill: ${colors.lightestSlate};
  &:hover {
    fill: ${colors.green};
  }
`

export default ({data, counter}) => {

  const { frontmatter, html } = data.node
  const { title, cover, technologies, external, github } = frontmatter


  return (
    <Container>
      <Cover counter={counter} fluid={cover.childImageSharp.fluid} />
      <Info counter={counter}>
        <Type>featured project</Type>
        <Title>{title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: html }} />
        <TechList counter={counter}>
          {
            technologies && technologies.map((tech, i) => {
              return (
                <TechItem key={i}>{tech}</TechItem>
              )
            })
          }
        </TechList>
        <LinkList counter={counter}>
        { 
          external !== "#" && (
          <LinkItem>
            <IconLink target="_blank" to={external}>
              <IconExternal />
            </IconLink>
          </LinkItem>
          )
        }
        { 
          github !== "#" && (
          <LinkItem>
            <IconLink target="_blank" to={github}>
              <IconGithub />
            </IconLink>
          </LinkItem>
          )
        }
        </LinkList>
      </Info>
    </Container>
  )
}
