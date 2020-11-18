import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import SideBar from "./sidebar"
import { colors, media } from "../styles"
import { socialLinks } from "../config"
import {IconLinkedin, IconFacebook, IconTwitter, IconInstagram, IconGithub, IconCodepen} from "./icons" 

const SocialList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const SocialLink = styled(Link)`
  margin-bottom: 20px;
  width: 24px;
  height: 24px;
  color: inherit;
  transition: all 0.15s ease-in;
  &:hover {
    fill: ${colors.green};
    transform: translateY(-2px);
  }

  ${media.tabletL`
    width: 16px;
    height: 16px;
  `}
`

export default () => {

  return (
    <SideBar orientation="left">
      <SocialList>
        <SocialLink target="_blank" to={socialLinks.linkedin}>
          <IconLinkedin />
        </SocialLink>
        <SocialLink target="_blank" to={socialLinks.codepen}>
          <IconCodepen />
        </SocialLink>
        <SocialLink target="_blank" to={socialLinks.github}>
          <IconGithub />
        </SocialLink>
        <SocialLink target="_blank" to={socialLinks.twitter}>
          <IconTwitter />
        </SocialLink>
        <SocialLink target="_blank" to={socialLinks.facebook}>
          <IconFacebook />
        </SocialLink>
        <SocialLink target="_blank" to={socialLinks.instagram}>
          <IconInstagram/>
        </SocialLink>
      </SocialList>
    </SideBar>
  )
}
