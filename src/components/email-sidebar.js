import React from "react"
import styled from "styled-components"
import SideBar from "./sidebar"
import { fonts, fontSizes } from "../styles"
import { contact } from "../config"


const VerticalEmail = styled.div`
  font-family: ${fonts.mono};
  font-size: ${fontSizes.xs};
  letter-spacing: 1.4px;
  writing-mode: vertical-rl;
  margin-bottom: 20px;
`

export default () => {

  return (
    <SideBar orientation="right">
      <VerticalEmail>{contact.email}</VerticalEmail>
    </SideBar>
  )
}
