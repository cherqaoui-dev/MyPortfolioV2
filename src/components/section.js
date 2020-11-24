import React from "react"
import styled from "styled-components"
import { media, colors, fonts } from "../styles"

const Container = styled.section`
  max-width: 950px;
  margin: 0 auto;
  padding: 100px 0;
  overflow: hidden;
  ${media.phoneL`padding: 80px 0;`}
  ${media.phone`padding: 60px 0;`}
`

const Heading = styled.h4`
  position: relative;
  display: inline-block;
  font-family: ${fonts.mono};
  font-weight: 700;
  color: ${colors.lightestSlate};
  text-transform: capitalize;

  margin: 10px 0 60px;

  &:before {
    counter-increment: section;
    content: '0' counter(section) '. ';
    color: ${colors.green};
  }
  &:after {
    content: '';
    width: 100vw;
    height: 1px;

    position: absolute;
    top: 50%;
    right: -103vw;

    background-color: ${colors.lightestNavy};
  }
`

export default ({children, title, id}) => {
  return (
    <Container id={id}>
      <Heading>{title}</Heading>
      {children}
    </Container>
  )
}