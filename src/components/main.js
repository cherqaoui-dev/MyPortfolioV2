import React from "react"
import styled from "styled-components"
import { media } from "../styles"

const Container = styled.div`
  padding: 100px 150px 0;
  max-width: 1600px;
  filter: ${props => props.menuState ? `blur(3px)` : `none`};
  transition: all .25s ease-in;
  counter-reset: section;
  ${media.tabletL`padding: 100px 100px 0;`}
  ${media.tablet`padding: 100px 60px 0;`}
  ${media.phoneL`padding: 100px 30px 0;`}
  ${media.phone`padding: 100px 20px 0;`}
`

export default ({children, menuState}) => {

  return (
    <Container menuState={menuState}>
      {children}
    </Container>
  )
}