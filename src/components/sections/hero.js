import React from 'react'
import {Link} from "gatsby"
import styled from "styled-components"
import { colors, media, fonts, fontSizes } from "../../styles"
import {StyledButton} from "../../styles/partials"
import { contact } from "../../config"

const Container = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 100px 0;
  overflow: hidden;
  ${media.phoneL`padding: 80px 0;`}
  ${media.phone`padding: 60px 0;`}
`
const Greeting = styled.div`
  margin-bottom: 30px;
  font-family: ${fonts.mono};
  font-size: ${fontSizes.md};
  color: ${colors.green};
`
const Name = styled.h1`
  color: ${colors.lightestSlate};
`
const Slogan = styled.h2`
  color: ${colors.lightSlate};
`
const Description = styled.div`
  margin: 20px 0;
  max-width: 500px;
`
const ContactButton = styled(StyledButton)`
  margin-top: 30px;
  padding: 15px 25px;
  display: inline-block;
`

export default ({id, data}) => {
  const {frontmatter, html} = data

  return (
    <Container id={id}>
      <Greeting>Hi, my name is</Greeting>
      <Name>{frontmatter.name}</Name>
      <Slogan>{frontmatter.slogan}</Slogan>
      <Description dangerouslySetInnerHTML={{ __html: html }} />
      <Link href={`mailto:${contact.email}`}>
        <ContactButton>get in touch</ContactButton>
      </Link>
    </Container>
  )
}