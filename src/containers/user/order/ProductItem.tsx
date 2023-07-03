import { styled } from '@mui/material'
import { DataType, basketActions } from '../../../redux/store/basket/basket.slice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
const StyledContainerImage = styled('div')(() => ({
  width: '75px',
  height: '85px'
}))
const StyledImage = styled('img')(() => ({
  width: '100%',
  height: '100%'
}))
const ContainerProduct = styled('div')(() => ({
  marginTop: '1rem',
  display: 'flex'
}))
const ListContainer = styled('ul')(() => ({
  listStyle: 'none',
  marginLeft: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '5px'
}))
const List = styled('li')(() => ({
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '140%',
  color: '#384255'
}))
const Parapraph = styled('p')(() => ({
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '150%',
  color: '#292929;'
}))
const Border = styled('p')(() => ({
  borderBottom: '2px solid #CDCDCD',
  marginTop: '16px'
}))
export const ProductItem = ({ item }: { item: DataType }) => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    const data = {
      productQuantity: item.quantityProduct,
      subProductId: item.subProductId
    }

    dispatch(basketActions.increment(data))
    dispatch(basketActions.decrement(data))
    dispatch(basketActions.calculateSum())
  }, [])
  return (
    <>
      <ContainerProduct>
        <StyledContainerImage>
          <StyledImage src={item.image} />
        </StyledContainerImage>
        <ListContainer>
          <List>
            <Parapraph>{item.name}</Parapraph>
          </List>
          <List>Артикул: {item.itemNumber} </List>
          <List>Кол-во: {item.quantityProduct} </List>
        </ListContainer>
      </ContainerProduct>
      <Border />
    </>
  )
}
