import React from "react"
import styled from "styled-components"
import { media } from "../styles"

const Container = styled.div`
  padding: 100px 150px;
  margin: 0 auto;
  max-width: 1600px;
  filter: ${props => props.applyBlur ? `blur(3px)` : `none`};
  counter-reset: section;
  ${media.tabletL`padding: 100px 100px;`}
  ${media.tablet`padding: 100px 60px;`}
  ${media.phoneL`padding: 100px 30px;`}
  ${media.phone`padding: 100px 20px;`}
`

export default ({children, menuState}) => {

  return (
    <Container applyBlur={menuState}>
      {children}
    </Container>
  )
}