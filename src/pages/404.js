import React, {useState} from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {Main, Header, Footer, SocialSideBar, EmailSidebar, SEO} from "../components"
import {StyledButton} from "../styles/partials"
import {colors, media, fonts} from "../styles"

const LayoutStyle = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`

const Container = styled.div`
  text-align: center;
  padding: 100px 0;
  margin: 0 auto;
  & > * {
    margin-bottom: 30px;
  }
  ${media.phoneL`padding: 80px 0;`}
  ${media.phone`padding: 60px 0;`}
`

const Title = styled.h1`
  color: ${colors.green};
  font-family: ${fonts.SFMono};
`

const Subtitle = styled.h2`
  color: ${colors.lightSlate};
`
const GoHomeButton = styled(StyledButton)`
  padding: 15px 30px;
`

export default () => {
  const [menuState, setMenuState] = useState(false)

  return (
    <React.Fragment>
      <SEO />
      <Header setMenuState={setMenuState} />
      <SocialSideBar />
      <EmailSidebar />
      <Main menuState={menuState}>
        <Container>
          <Title>404</Title>
          <Subtitle>Page Not Found</Subtitle>
          <Link to={`/`}>
            <GoHomeButton>Go Home</GoHomeButton>
          </Link>
        </Container>
      </Main>
    </React.Fragment>
  )
}
