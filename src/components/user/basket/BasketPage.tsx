import Basket from './Basket'
import { AppDispatch, RootState } from '../../../redux/store'
import { useEffect } from 'react'
import { getAllBasket } from '../../../redux/store/basket/basket.thunk'
import { useDispatch, useSelector } from 'react-redux'
import { Box, styled } from '@mui/material'
import EmptyBasket from './EmptyBasket'
import Loading from '../../UI/loading/Loading'
import { SuccessModal } from '../../../containers/user/order/SuccessModal'
import { basketActions } from '../../../redux/store/basket/basket.slice'
import { userOrderActions } from '../../../redux/store/user-order/user.order.slice'
const Container = styled('div')(() => ({
  width: '100%',
  height: '100%',
  padding: '3.75rem 10.1875rem 7.5rem 12.1875rem',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  backgroundColor: '#e1e1e1'
}))
const SpanOne = styled('span')(() => ({
  fontWeight: 400,
  fontSize: '.875rem',
  lineHeight: '140%',
  color: '#91969E;'
}))
const SpanTwo = styled('span')(() => ({
  color: '#292929',
  fontWeight: 400,
  fontSize: '.875rem',
  lineHeight: '140%'
}))
const Title = styled('p')(() => ({
  width: '100%',
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '1.875rem',
  lineHeight: '110%',
  marginTop: '1.875rem',
  borderBottom: '.125rem solid #CDCDCD',
  paddingBottom: '1.25rem'
}))
const BasketPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const basketData = useSelector((state: RootState) => state.basket)
  useEffect(() => {
    dispatch(getAllBasket())
  }, [])
  const closeModalHandler = () => {
    const isModal = {
      openModal: !basketData.openModal
    }
    dispatch(basketActions.openModalSuccess(isModal))
    dispatch(userOrderActions.clearOrder())
  }
  return (
    <>
      {basketData.isLoading ? (
        <Box
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          minHeight={'45rem'}
        >
          <Loading />
        </Box>
      ) : (
        <Container>
          <SpanOne>Главная » </SpanOne>
          <SpanTwo>Корзина</SpanTwo>
          <Title>Товары в корзине</Title>

          {basketData.items.length === 0 ? <EmptyBasket /> : <Basket basketData={basketData} />}
        </Container>
      )}
      <SuccessModal
        open={basketData.openModal}
        onClose={closeModalHandler}
        orderNumber={basketData.orderNumber}
      />
    </>
  )
}
export default BasketPage
