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
  display: flex;
  max-width: 320px;
  margin-top: 20px;
  font-size: ${fontSizes.md};
  ${media.phoneL`margin: 20px auto`}
`
const Column = styled.div`
  flex: 50%;
`
const SkillItem = styled.div`
  &:before {
    content: '▹';
    margin-right: 5px;
    color: ${colors.green};
  }
`

export default ({data}) => {
  const {frontmatter, html} = data[0].node
  const { title, avatar, skills } = frontmatter

  return (
    <Section title={title}>
      <Container>
        <WideColumn>
          <Description dangerouslySetInnerHTML={{ __html: html }} />
          <SkillList>
            <Column>
              {
                skills && skills.map((skill, i) => {
                  if(i % 2 === 0) 
                    return (<SkillItem key={i}>{skill}</SkillItem>)
                })
              }
            </Column>
            <Column>
              {
                skills && skills.map((skill, i) => {
                  if(i % 2 === 1) 
                    return (<SkillItem key={i}>{skill}</SkillItem>)
                })
              }
            </Column>
          </SkillList>
        </WideColumn>
        <NarrowColumn>
          <Picture fluid={avatar.childImageSharp.fluid} />
        </NarrowColumn>
      </Container>
    </Section>
  )
}