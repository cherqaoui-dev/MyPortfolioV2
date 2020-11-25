import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import SideNav from "./sidenav"
import { IconBrand } from "./icons"
import { navLinks } from "../config"
import { StyledLink, StyledButton } from "../styles/partials"
import { colors, fontSizes, fonts, media } from "../styles"

// height need to be the same for padding in the main section
const Container = styled.header`
  padding: 0 50px;
  position: fixed;
  top: 0;
  z-index: 3;
  transform: ${props => props.hideNav ? `translateY(-100px)` : `translateY(0)`};
  width: 100%;
  height: ${props => props.isNearTop ? `100px` : `80px`};

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${props => props.isNearTop ? `${colors.navy}` : `${colors.transparentNavy}`};
  box-shadow: ${props => props.isTop ? `none` : `0 10px 30px -10px ${colors.navyShadow}`};
  transition: all 0.2s cubic-bezier(.55,.06,.68,.19);

  ${media.tabletL`padding: 0 100px;`}
  ${media.tablet`padding: 0 60px;`}
  ${media.phoneL`padding: 0 30px;`}
  ${media.phone`padding: 0 20px;`}
`
const Brand = styled(Link)`
  width: 50px;
  height: 60px;
  svg {
    fill: ${colors.green};
    width: 100%;
    height: 100%;
  }
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;

  ${media.phoneL`
    display: none;
  `}
`
const NavItem = styled.li`
  display: inline-block;
  margin-right: 24px;
  counter-increment: item 1;
  &:before {
    content: '0' counter(item) '.';
    margin-right: 5px;
    color: ${colors.green};
    font-family: ${fonts.mono};
    font-size: ${fontSizes.xs};
  }
`
const NavLink = styled(StyledLink)`
  font-size: ${fontSizes.xs}
`

const BurgerButton = styled.div`
  position: relative;
  z-index: 3;
  display: none;
  width: 36px;
  height: 36px;
  color: ${colors.green};
  cursor: pointer;

  ${media.phoneL`
    display: unset;
  `}
`
const BurgerButtonBars = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 2px;
  background-color: ${props => props.menuState ? `transparent` : `${colors.green}`};
  transition: all 0.15s ease-in;

  &:before, &:after {
    content: '';
    position: absolute;
    width: 36px;
    height: 2px;
    background-color: ${colors.green};
    transition: all 0.15s ease-in;
  }

  &:before {
    top: ${props => props.menuState ? `0` : `-17px`};
    transform: ${props => props.menuState ? `rotate(135deg)` : `rotate(0)`};
  }
  &:after {
    bottom: ${props => props.menuState ? `0` : `-17px`};
    transform: ${props => props.menuState ? `rotate(45deg)` : `rotate(0)`};
  }
`

const ResumeButton = styled(StyledButton)`
  padding: 10px;
`

export default ({menuState, setMenuState}) => {

  const NAV_NEAR_TOP_THRESHOLD = 60
  let previousY = 0
  let isGoingUp = false
  
  const [isTop, setIsTop] = useState(true)
  const [isNearTop, setIsNearTop] = useState(true)
  const [hideNav, setHideNav] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleBurgerClick = () => {
    if(!menuState) {
      // keep track of the previous position
      setScrollPosition(window.scrollY)
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = ''
      // scroll back to the last position 
      window.scrollTo(0, scrollPosition)
    }
    setMenuState(!menuState)
  }

  const handleScroll = () => {
    const currentY = window.scrollY

    // Determine if we are on top or not
    if(currentY === 0)
      setIsTop(true)
    else
      setIsTop(false)

    // handle near top position
    if(currentY < NAV_NEAR_TOP_THRESHOLD){
      setIsNearTop(true)
      setHideNav(false)
    } else {
      setIsNearTop(false)
    }
    
    // Determine if we are scrolling down or up
    if(previousY - currentY > 0){
      setHideNav(false)
      isGoingUp = true
    } else {
      isGoingUp = false
    }

    // hide nav after bypassing threshold going down  
    if(currentY > NAV_NEAR_TOP_THRESHOLD && !isGoingUp)
      setHideNav(true)
      
    previousY = currentY
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => { 
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Container hideNav={hideNav} isTop={isTop} isNearTop={isNearTop}>
      <Brand to="#">
        <IconBrand />
      </Brand>
      <Nav>
        <ul>
        {
          navLinks && navLinks.map(({name, url}, i) => (
            <NavItem key={i}>
              <NavLink to={url}>{name}</NavLink>
            </NavItem>
          ))
        }
        </ul>
        <a href="/resume.pdf" target="_blank">
          <ResumeButton>resume</ResumeButton>
        </a>
      </Nav>
      <BurgerButton onClick={handleBurgerClick}>
        <BurgerButtonBars menuState={menuState} />
      </BurgerButton>
      <SideNav menuState={menuState} setMenuState={setMenuState} />
    </Container>
  )
}