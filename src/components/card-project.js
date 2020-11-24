import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"
import {fonts, colors, fontSizes} from "../styles"
import {IconFolder, IconExternal, IconGithub} from "./icons"

const Container = styled.div`
  display: ${({isVisible}) => (isVisible) ? `flex` : `none`};
  flex-direction: column;
  justify-content: space-between;

  padding: 1.5em 1.5em;
  background-color: ${colors.lightNavy};
  box-shadow: 1px 0 4px ${colors.navyShadow};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.15s ease-in;
  &:hover {
    transform: translateY(-5px);
  }
`

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1.5em;
`
const Icon = styled.div`
  width: 40px;
  height: 40px;
  fill: ${colors.green};
`
const LinkList = styled.ul``
const LinkItem = styled.li`
  display: inline-block;
  margin-left: 10px;
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

const Body = styled.div`
  margin-bottom: 1.5em;
`
const Title = styled.div`
  margin-bottom: .7em;
  font-size: ${fontSizes.xl};
  font-weight: 700;
  color: ${colors.lightestSlate};
`
const Description = styled.div`
  color: ${colors.lightSlate};
`
const Footer = styled.div``
const TechList = styled.ul``
const TechItem = styled.li`
  display: inline;
  margin-right: 1em;
  font-family: ${fonts.mono};
  font-size: ${fontSizes.xxs};
`

export default ({data, isVisible}) => {
  const {frontmatter, html} = data.node
  const {title, technologies, external, github} = frontmatter

  return (
    <Container isVisible={isVisible}>
      <div>
        <Head>
          <Icon>
            <IconFolder />
          </Icon>
          <LinkList>
            {
              external !== "#" && (
              <LinkItem>
                <IconLink to={external}>
                  <IconExternal />
                </IconLink>
              </LinkItem>
              )
            }
            {
              github !== "#" && (
              <LinkItem>
                <IconLink to={github}>
                  <IconGithub />
                </IconLink>
              </LinkItem>
              )
            }
          </LinkList>
        </Head>
        <Body>
          <Title>{title}</Title>
          <Description dangerouslySetInnerHTML={{ __html: html }} />
        </Body>
      </div>
      <Footer>
        <TechList>
          {
            technologies && technologies.map((tech, i) => {
              return (
                <TechItem key={i}>{tech}</TechItem>
              )
            })
          }
        </TechList>
      </Footer>
    </Container>
  )
}
