import React from 'react'
import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from './styles'

function HighlightCard() {
  return (
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name="arrow-up-circle" />
      </Header>
      <Footer>
        <Amount>R$ 3.000,00</Amount>
        <LastTransaction>Última entrada dia 13 de Maio</LastTransaction>
      </Footer>
    </Container>
  )
}

export default HighlightCard
