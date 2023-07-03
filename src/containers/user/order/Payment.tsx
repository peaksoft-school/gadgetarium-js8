/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/store'
import Button from '../../../components/UI/buttons/Button'
import { postOrderedProductRequest } from '../../../api/order/orderService'
import { useNavigate } from 'react-router-dom'
import { basketActions } from '../../../redux/store/basket/basket.slice'
import { isRejectedWithValue } from '@reduxjs/toolkit'
import { AxiosError, isAxiosError } from 'axios'

const Container = styled('ul')(() => ({
  marginTop: '3px',
  fontFamily: 'Inter',
  fontStyle: 'normal'
}))
const Title = styled('h2')(() => ({
  fontWeight: 500,
  fontSize: ' 24px',
  lineHeight: ' 110%',
  color: '#292929',
  marginBottom: '30px'
}))
const FirstList = styled('li')(() => ({
  color: '#CB11AB',
  borderBottom: '2px solid #CDCDCD',
  paddingBottom: '8px'
}))
const SpanOne = styled('span')(() => ({
  fontWeight: 800,
  fontSize: ' 20px',
  lineHeight: '24px'
}))
const SpanTwo = styled('span')(() => ({
  fontWeight: 700,
  fontSize: ' 17px',
  lineHeight: '22px',
  marginLeft: '80px'
}))
const SpanThree = styled('span')(() => ({
  fontWeight: 700,
  fontSize: ' 16px',
  lineHeight: '24px',
  color: '#384255',
  width: '80px'
}))
const SpanFour = styled('span')(() => ({
  fontWeight: 400,
  fontSize: ' 16px',
  lineHeight: '24px',
  color: '#384255',
  width: '120px'
}))
const SpanFive = styled('p')(() => ({
  fontWeight: 700,
  fontSize: ' 14px',
  lineHeight: '17px',
  color: '#4B7EE8',
  marginTop: '5px',
  width: '50px',
  cursor: 'pointer'
}))
const SecondList = styled('li')(() => ({
  display: 'flex',
  alignContent: 'center',
  gap: '60px',
  marginTop: '20px'
}))
const ThirdList = styled('li')(() => ({
  display: 'flex',
  alignContent: 'center',
  gap: '60px',
  borderBottom: '2px solid #CDCDCD',
  paddingBottom: '8px',
  marginTop: '20px'
}))
const TotalContainer = styled('div')(() => ({
  width: '409px',
  listStyle: 'none'
}))
const StyledButton = styled(Button)(() => ({
  width: '100%',
  textTransform: 'uppercase',
  marginTop: '30px',
  fontWeight: 700,
  fontSize: ' 14px',
  lineHeight: '16px'
}))
const Payment = ({ handleTabChange }: { handleTabChange: (newValue: string) => void }) => {
  const dispatch = useDispatch<AppDispatch>()
  const order = useSelector((state: RootState) => state.userorder)
  const { totalSum, items, openModal } = useSelector((state: RootState) => state.basket)
  const navigate = useNavigate()
  const changeDataHandler = () => {
    handleTabChange('Tab 1')
  }
  const translateWordHandler = () => {
    if (order.typePayment === 'BY_CARD_ONLINE') {
      return 'Оплата картой'
    } else if (order.typePayment === 'BY_CARD_OFFLINE') {
      return 'Картой при получении'
    } else if (order.typePayment === 'BY_CASH') {
      return 'Наличными при получении'
    } else {
      return ''
    }
  }
  const openModalHandler = () => {
    const isModal = {
      openModal: !openModal
    }
    dispatch(basketActions.openModalSuccess(isModal))
  }
  const postProductsOrderHandler = async () => {
    try {
      const productsIdAndQuantity: any = {}
      items.forEach((item) => {
        productsIdAndQuantity[item.subProductId] = item.quantityProduct
      })
      const orderData = {
        productsIdAndQuantity,
        deliveryType: order.deliveryType,
        customerInfo: {
          firstName: order.firstName,
          lastName: order.lastName,
          email: order.email,
          phoneNumber: order.phoneNumber,
          address: order.address
        },
        paymentType: order.typePayment
      }
      const { data } = await postOrderedProductRequest(orderData)
      if (data.orderNumber !== '') {
        dispatch(basketActions.getOrderNumber(data.orderNumber))
        navigate('/basket')
        openModalHandler()
      }
    } catch (e) {
      if (isAxiosError(e)) {
        const error = e as AxiosError<{
          status: number
          message: string
        }>
        return isRejectedWithValue(error.response?.data.message)
      }
      return isRejectedWithValue('Something went wrong')
    }
  }
  return (
    <Container>
      <Title>Обзор заказа</Title>
      <TotalContainer>
        <FirstList>
          <SpanOne>Итого</SpanOne>
          <SpanTwo>{totalSum.toFixed(2)} с</SpanTwo>
        </FirstList>
        <SecondList>
          <SpanThree>Доставка</SpanThree>
          <SpanFour>{order.address}</SpanFour>
          <SpanFive onClick={changeDataHandler}>Изменить</SpanFive>
        </SecondList>
        <ThirdList>
          <SpanThree>Оплата</SpanThree>
          <SpanFour>{translateWordHandler()}</SpanFour>
          <SpanFive onClick={changeDataHandler}>Изменить</SpanFive>
        </ThirdList>
        <StyledButton onClick={postProductsOrderHandler}>Оформить заказ</StyledButton>
      </TotalContainer>
    </Container>
  )
}
export default Payment
