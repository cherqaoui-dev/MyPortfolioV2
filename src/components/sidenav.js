import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { navLinks } from "../config"
import { StyledButton } from "../styles/partials"
import { colors, fontSizes, fonts } from "../styles"

//transform: translateX(80%);
const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  width: 70%;
  height: 100vh;
  
  background-color: ${colors.lightNavy};
  transform: ${props => props.menuState ? `translateX(0)`: `translateX(100%)`};
  transition: all 0.15s ease-in;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: inherit;
`
const NavLink = styled(Link)`
  width: 100%;
  text-align: center;
  padding: 20px;
  color: ${colors.lightSlate};
  font-size: ${fontSizes.xxl};

  counter-increment: item 1;
  &:before {
    content: '0' counter(item) '.';
    color: ${colors.green};
    font-family: ${fonts.mono};
    font-size: ${fontSizes.xl};
  }
`
const ResumeButton = styled(StyledButton)`
  padding: 20px 24px;
  font-size: ${fontSizes.md};
`

const ResumeLink = styled.a`
  margin-top: 40px;
`

const SideNav = (props) => {

  const handleNavLinkClick = () => {
    document.body.style.overflowY = ''
    props.setMenuState(false)
  }
  
  return (
    <Container menuState={props.menuState}>
      <Nav>
        {
          navLinks && navLinks.map(({name, url}, i) => (
            <NavLink 
            key={i} 
            to={url} 
            onClick={handleNavLinkClick}
            >
              <span>{name}</span>
            </NavLink>
          ))
        }
        <ResumeLink href="/CV-Cherqaoui-Mehdi-EN.pdf" target="_blank">
          <ResumeButton>english resume</ResumeButton>
        </ResumeLink>
        <ResumeLink href="/CV-Cherqaoui-Mehdi-FR.pdf" target="_blank">
          <ResumeButton>french resume</ResumeButton>
        </ResumeLink>
      </Nav>
    </Container>
  )
}
export default SideNav

