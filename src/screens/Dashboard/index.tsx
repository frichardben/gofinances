import React from 'react'

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
} from './styles'

function Dashboard() {
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
        </UserWrapper>
      </Header>
    </Container>
  )
}

export default Dashboard
