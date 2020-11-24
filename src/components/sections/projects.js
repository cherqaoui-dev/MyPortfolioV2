import React, {useState} from 'react'
import styled from "styled-components"
import { Section, Featured, Card } from "../"
import { StyledButton } from "../../styles/partials"
import { colors, media } from "../../styles"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FeaturedList = styled.div`
  width: 100%;
  margin-bottom: 200px;
  ${media.phoneL`margin-bottom: 160px;`}
  ${media.phone`margin-bottom: 120px;`}
` 
const CardsTitle = styled.h3`
  color: ${colors.lightestSlate};
  margin-bottom: 50px;
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

export default ({id, data}) => {
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
    <Section id={id} title="some things i’ve built">
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
          <CardsTitle>Other Noteworthy Projects</CardsTitle>
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
