import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, Title } from './styles'

interface ITransactionTypeButtonProps extends TouchableOpacityProps {
  type: 'up' | 'down'
  title: string
  isActive?: boolean
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
}

function TransactionTypeButton({
  type,
  title,
  isActive,
  ...rest
}: ITransactionTypeButtonProps) {
  return (
    <Container {...rest} type={type} isActive={isActive}>
      <Icon name={icon[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  )
}

export default TransactionTypeButton