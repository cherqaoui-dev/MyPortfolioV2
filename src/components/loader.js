import React, { useEffect, useState } from 'react'
import styled, { keyframes } from "styled-components"
import { colors, media } from "../styles"
import { IconBrand } from "./icons"

const Container = styled.div`
  position: fix;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.navy};

  display: ${({isLoading}) => (isLoading) ? `flex` : `none`};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const animation = keyframes`
  0% {
    transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
  33% {
    transform: rotate(0) scale(1);
    opacity: 1;
  }
  66% {
    transform: rotate(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
 `

const Brand = styled.div`
  position: relative;
  width: 10%;
  fill: ${colors.green};

  animation: ${animation} 3s ease-out both;
  
  ${media.tablet`width: 15%;`}
  ${media.phoneL`width: 20%;`}
  ${media.phone`width: 25%;`}

`

export default () => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.body.style.position = 'fixed'

    setTimeout(() => {
      setIsLoading(false)
      document.body.style.position = ''
    }, 3000)
    
  }, [])

  return (
    <Container isLoading={isLoading}>
      <Brand>
        <IconBrand />
      </Brand>
    </Container>
  )
}
