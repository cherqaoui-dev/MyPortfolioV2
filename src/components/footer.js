import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { media, colors, fonts, fontSizes } from "../styles"
import { site } from "../config"

const Container = styled.header`
  margin-top: 40px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Copyrights = styled.div`
  text-align: center;
  font-family: ${fonts.mono};
  font-size: ${fontSizes.sm};
  line-height: 1.8;
  color: ${colors.lightSlate};
  &:hover {
    color: ${colors.green};
  }

  ${media.phoneL`font-size: ${fontSizes.xs}`}
  ${media.phone`font-size: ${fontSizes.xxs}`}
`
export default () => (
  <Container>
    <Link to={site.githubRepository}>
      <Copyrights>
      Designed by Brittany Chiang<br />Built by Cherqaoui Mehdi
      </Copyrights>
    </Link>
  </Container>
)