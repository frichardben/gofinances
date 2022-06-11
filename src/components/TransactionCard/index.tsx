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

interface ICategory {
  name: string
  icon: string
}

export interface IData {
  title: string
  amount: string
  category: ICategory
  date: string
}
export interface TransactionCardProps {
  data: IData
}

function TransactionCard({ data }: TransactionCardProps) {
  return (
    <Container>
      <Title>{data.title}</Title>

      <Amount>{data.amount}</Amount>

      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}

export default TransactionCard
