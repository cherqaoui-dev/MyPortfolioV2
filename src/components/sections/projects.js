import React, {useState} from 'react'
import styled from "styled-components"
import { Section, Featured, Card } from "../"
import { StyledButton } from "../../styles/partials"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FeaturedList = styled.div`
  margin-bottom: 100px;
`
const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
  margin-bottom: 50px;
`
const ShowMoreButton = styled(StyledButton)`
  display: inline-block;
  padding: 1em 1.5em;
`

export default ({data}) => {
  const {featuredList, cardList} = data
  const CARDS_TO_ADD = 3
  const MIN_CARDS_NUMBER = 6

  const [currentCardsNumber, setCurrentCardsNumber] = useState(MIN_CARDS_NUMBER)

  const handleShowMore = () => {
    if(cardList.length > currentCardsNumber)
      setCurrentCardsNumber(currentCardsNumber + CARDS_TO_ADD)
    else if(currentCardsNumber > MIN_CARDS_NUMBER)
      setCurrentCardsNumber(currentCardsNumber - CARDS_TO_ADD)
  }

  return (
    <Section title="some things i’ve built">
        <Container>
          <FeaturedList>
            {
              featuredList && featuredList.map( (featured, i) => {
                return (
                  <Featured key={i} data={featured} counter={i} />
                )
              })
            }
          </FeaturedList>
          <CardList>
            {
              cardList && cardList.map( (card, i) => {
                return (
                  <Card key={i} data={card} isVisible={(i < currentCardsNumber)}/>
                )
              })
            }
          </CardList>
          <ShowMoreButton onClick={e => handleShowMore()}>
            {(currentCardsNumber > cardList.length) ? `show less` : `show more`}
          </ShowMoreButton>
        </Container>
    </Section>
  )
}
