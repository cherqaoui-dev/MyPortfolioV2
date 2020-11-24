import React from 'react'
import {Link} from "gatsby"
import styled from "styled-components"
import {StyledButton} from "../../styles/partials"
import {Section} from "../"
import { contact } from "../../config"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Message = styled.div`
  max-width: 500px;
  font-size: 1.2em;
  margin-bottom: 40px;
  
  p {
    text-align: center;
  }
`
const ContactButton = styled(StyledButton)`
  padding: 1em 1.5em;
`

export default ({id, data}) => {
  const {html} = data;
  return (
    <Section id={id} title="get in touch">
      <Container>
        <Message dangerouslySetInnerHTML={{ __html: html }} />
        <Link href={`mailto:${contact.email}`}>
          <ContactButton>say hello</ContactButton>
        </Link>
      </Container>
    </Section>
  )
}
