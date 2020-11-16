import React from "react"
import styled from "styled-components"
import { media, colors } from "../styles"

const Container = styled.div`
  width: 100px;
  height: 100vh;
  padding-top: 10px;

  position: fixed;
  top: 40vh;
  left: ${props => props.orientation === 'left' ? 0 : 'unset'};
  right: ${props => props.orientation === 'right' ? 0 : 'unset'};
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  color: ${colors.lightSlate};
  fill: ${colors.lightSlate};
  overflow: hidden;

  ${media.tablet`display: none`}
`

const VerticalLine = styled.div`
  width: 1px;
  height: 100vh;
  background-color: ${colors.lightSlate};
`

export default ({children, orientation}) => {
  return (
    <Container orientation={orientation}>
      {children}
      <VerticalLine />
    </Container>
  )
}