import React from 'react'
import styled from "styled-components"
import { Section, Featured, Card } from "../"

const Container = styled.div``
const FeaturedList = styled.div``
const CardList = styled.div``


export default ({data}) => {
  const {featuredList, cardList} = data;

  return (
    <Section title="some things i’ve built">
        <Container>
          <FeaturedList>
            {
              featuredList && featuredList.map( (featured, i) => {
                return (
                  <Featured key={i} data={featured} index={i}></Featured>
                )
              })
            }
          </FeaturedList>
          <CardList></CardList>
        </Container>
    </Section>
  )
}
