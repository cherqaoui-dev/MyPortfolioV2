import React from "react"
import styled from "styled-components"
import { media, colors, fonts, fontSizes } from "../styles"

const Container = styled.section`
  padding: 100px 0;
  overflow: hidden;
  ${media.phoneL`padding: 80px 0;`}
  ${media.phone`padding: 60px 0;`}
`
// After top need to be sync with h2 in all media query breakpoints
const Heading = styled.h2`
  position: relative;
  display: inline-block;
  font-family: ${fonts.mono};
  font-size: ${fontSizes.xxl};
  text-transform: capitalize;

  &:before {
    counter-increment: section;
    content: '0' counter(section) '. ';
    color: ${colors.green};
    font-size: ${fontSizes.xl};
  }
  &:after {
    content: '';
    width: 100vw;
    height: 1px;

    position: absolute;
    top: 80%;
    right: -103vw;

    background-color: ${colors.lightestNavy};
  }
`

export default ({children, name}) => {
  return (
    <Container>
      <Heading>{name}</Heading>
      {children}
    </Container>
  )
}