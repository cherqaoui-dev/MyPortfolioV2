import React from 'react'
import Img from "gatsby-image"
import styled from "styled-components"
import Section from "../section"
import { colors, fontSizes, media } from "../../styles"

const Container = styled.div`
  display: flex;
  gap: 10%;
  ${media.phoneL`
    display: block;
    & > div {
      margin-bottom: 40px;
    }
  `}
`
const WideColumn = styled.div`
  max-width: 500px;
  flex: 55%;
`
const NarrowColumn = styled.div`
  flex: 35%;
  max-width: 315px;
  margin: 0 auto;
`

const Picture = styled(Img)`
  position: relative;
  max-width: 95%;
  overflow: unset !important;
  cursor: pointer;
  img {
    border-radius: 5px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(5%, 5%);
    z-index: -1;
    width: 100%;
    height: 100%;
    border: 2px solid ${colors.green};
    border-radius: 5px;
    transition: all 0.25s ease-in;
  }

  &:hover {
    &:before {
      transform: translate(3%, 3%);
    }    
  }
`

const Description = styled.div`
  p {
    margin-bottom: 10px;
  }
`

const SkillList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  max-width: 320px;
  margin-top: 20px;
  font-size: ${fontSizes.md};
  ${media.phoneL`margin: 20px auto`}
`
const SkillItem = styled.div`
  &:before {
    content: '▹';
    margin-right: 5px;
    color: ${colors.green};
  }
`

export default ({id, data}) => {
  const {frontmatter, html} = data
  const { title, avatar, skills } = frontmatter

  return (
    <Section id={id} title={title}>
      <Container>
        <WideColumn>
          <Description dangerouslySetInnerHTML={{ __html: html }} />
          <SkillList>
          {
            skills && skills.map((skill, i) => {
              return (<SkillItem key={i}>{skill}</SkillItem>)
            })
          }
          </SkillList>
        </WideColumn>
        <NarrowColumn>
          <Picture fluid={avatar.childImageSharp.fluid} />
        </NarrowColumn>
      </Container>
    </Section>
  )
}