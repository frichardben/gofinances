import React, { useCallback } from 'react'
import { FlatList } from 'react-native'
import Button from '../../components/Form/Button'
import categories from '../../utils/categories'
import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Divider,
  Footer,
} from './styles'

interface Category {
  key: string
  name: string
}

interface CategoryProps {
  category: string
  setCategory: (category: Category) => void
  closeSelectCategory: () => void
}

function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: CategoryProps) {
  const MemoizedNestedComponent = useCallback(() => <Divider />, [])

  return (
    <Container>
      <Header>
        <Title>Cadastrar</Title>
      </Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category>
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={MemoizedNestedComponent}
      />

      <Footer>
        <Button title="Selecionar" />
      </Footer>
    </Container>
  )
}

export default CategorySelect
