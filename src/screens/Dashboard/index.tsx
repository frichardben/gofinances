import React from 'react'
import HighlightCard from '../../components/HighlightCard'
import TransactionCard, { IData } from '../../components/TransactionCard'

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from './styles'

export interface IDataListProps extends IData {
  id: string
}

function Dashboard() {
  const data: IDataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      date: '13/05/2022',
    },
    {
      id: '2',
      type: 'negative',
      title: 'Hamburger',
      amount: 'R$ 59,00',
      category: {
        name: 'Alimentação',
        icon: 'coffee',
      },
      date: '13/05/2022',
    },
    {
      id: '3',
      type: 'negative',
      title: 'Aluguel do Apartamento',
      amount: 'R$ 1.000,00',
      category: {
        name: 'Casa',
        icon: 'shopping-bag',
      },
      date: '13/05/2022',
    },
  ]

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/24980034?v=4',
              }}
            />
            <User>
              <UserGreeting> Olá,</UserGreeting>
              <UserName>Richard</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de Maio"
        />
        <HighlightCard
          type="down"
          title="Saída"
          amount="R$ 1.400,00"
          lastTransaction="Última entrada dia 03 de Maio"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.000,00"
          lastTransaction="01 à 13 de Maio"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  )
}

export default Dashboard
