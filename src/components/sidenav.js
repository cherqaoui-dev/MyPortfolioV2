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
  transform: ${props => props.menuOpen ? `translateX(0)`: `translateX(100%)`};
  transition: all 0.25s ease-in;
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
  margin-top: 40px;
  padding: 20px 50px;
  font-size: ${fontSizes.md};
`

const SideNav = (props) => {

  const handleNavLinkClick = () => {
    props.setMenuState(false)
    document.body.style.position = 'static'
  }
  
  return (
    <Container menuOpen={props.menuOpen}>
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
        <Link href="/resume.pdf" target="_blank">
          <ResumeButton>resume</ResumeButton>
        </Link>
      </Nav>
    </Container>
  )
}
export default SideNav

