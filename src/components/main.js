import React from "react"
import styled from "styled-components"

const Container = styled.div`
  padding: 100px 150px 0;
`

export default ({children}) => (
  <Container>
    {children}
  </Container>
)