import React from 'react'
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { IconExternal } from "./icons"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`
const Cover = styled(Img)`
  grid-column: 1/7;
`
const Info = styled.div`
  grid-column: 7/13;
  direction: ${({index}) => (index % 2 === 0) ? `rtl` : `ltr`};
`
const Type = styled.div``
const Title = styled.div`
`
const Description = styled.div``
const TechList = styled.ul``
const TechItem = styled.li``
const External = styled(Link)`
  display: inline-block;
  width: 24px;
  height: 24px;
`

export default ({data, index}) => {

  const { frontmatter, html } = data.node
  const { title, cover, technologies, external } = frontmatter

  return (
    <Container>
      <Cover fluid={cover.childImageSharp.fluid} />
      <Info index={index}>
        <Type>featured project</Type>
        <Title>{title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: html }} />
        <TechList>
          {
            technologies && technologies.map((tech, i) => {
              return (
                <TechItem key={i}>{tech}</TechItem>
              )
            })
          }
        </TechList>
        <External target="_blank" to={external}>
          <IconExternal />
        </External>
      </Info>
    </Container>
  )
}
