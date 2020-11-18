import React from 'react'
import Img from "gatsby-image"
import styled from "styled-components"
import Section from "../section"

// Need to decide between grid and flexbox
const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`
const WideColumn = styled.div`
  flex: 60%;
`
const NarrowColumn = styled.div`
  flex: 40%;
`

const Description = styled.div`

`

export default ({data}) => {
  const {frontmatter, html} = data[0].node
  const { title, avatar, skills } = frontmatter

  return (
    <Section title={title}>
      <Container>
        <WideColumn>
          <Description dangerouslySetInnerHTML={{ __html: html }} />
        </WideColumn>
        <NarrowColumn>
          <Img fluid={avatar.childImageSharp.fluid} />
        </NarrowColumn>
      </Container>
    </Section>
  )
}