import React, { useState } from 'react'
import styled from "styled-components"
import { colors, fontSizes, fonts } from "../styles"

const Container = styled.div`
  position: relative;
`
const DropDownMenu = styled.div`
  position: absolute;
  width: 100%;
  display: ${props => props.menuState ? `flex` : `none`};
  flex-direction: column;
`
const MenuItem = styled.div`
  padding: 10px 5px;
  font-family: ${fonts.mono};
  font-size: ${fontSizes.sm};
  color: ${colors.green};
  text-align: center;
  text-transform: capitalize;
  cursor: pointer;
  
  &:hover {
    background: ${colors.lightGreen};
  }
`

export default ({children}) => {
  const [menuState, setMenuState] = useState(false)

  return (
    <Container 
    onMouseEnter={() => setMenuState(true)} 
    onMouseLeave={() => setMenuState(false)}
    >
      {children}
      <DropDownMenu menuState={menuState}>
        <a href="/CV-Cherqaoui-Mehdi-EN.pdf" target="_blank">
          <MenuItem>english</MenuItem>
        </a>
        <a href="/CV-Cherqaoui-Mehdi-FR.pdf" target="_blank">
          <MenuItem>french</MenuItem>
        </a>
      </DropDownMenu>
    </Container>
  )
}
