import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { Container, Icon, Title, Button } from './styles'

interface ITransactionTypeButtonProps extends RectButtonProps {
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
    <Container type={type} isActive={isActive}>
      <Button {...rest}>
        <Icon name={icon[type]} type={type} />
        <Title>{title}</Title>
      </Button>
    </Container>
  )
}

export default TransactionTypeButton
