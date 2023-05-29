import Basket from './Basket'
import { styled } from '@mui/material'
import { AppDispatch } from '../../../redux/store'
import { useEffect } from 'react'
import { getAllBasket } from '../../../redux/store/basket/basket.thunk'
import { useDispatch } from 'react-redux'
const Container = styled('div')(() => ({
  width: '100%',
  height: '100%',
  padding: '60px 195px 120px 195px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  backgroundColor: '#e1e1e1'
}))
const SpanOne = styled('span')(() => ({
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '140%',
  color: '#91969E;'
}))
const SpanTwo = styled('span')(() => ({
  color: '#292929',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '140%'
}))
const Title = styled('p')(() => ({
  width: '100%',
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '30px',
  lineHeight: '110%',
  marginTop: '30px',
  borderBottom: '2px solid #CDCDCD',
  paddingBottom: '20px'
}))
const BasketPage = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getAllBasket())
  }, [])
  return (
    <>
      <Container>
        <SpanOne>Главная » </SpanOne>
        <SpanTwo>Корзина</SpanTwo>
        <Title>Товары в корзине</Title>
        <Basket />
      </Container>
    </>
  )
}
export default BasketPage
