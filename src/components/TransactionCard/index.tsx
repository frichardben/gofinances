import React from 'react'
import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from './styles'

function TransactionCard() {
  return (
    <Container>
      <Title>Desenvolvimento de sites</Title>

      <Amount>R$ 12.000,00</Amount>

      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>Vendas</CategoryName>
        </Category>
        <Date>12/05/2022</Date>
      </Footer>
    </Container>
  )
}

export default TransactionCard
