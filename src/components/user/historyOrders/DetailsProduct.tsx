import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/store'
import { getHistoryOrderDetails } from '../../../redux/store/userMainPage/GetProduct.thunk'
import { useParams } from 'react-router-dom'
import CartProduct from './CartProduct'
import { Divider, styled } from '@mui/material'
import { Container } from '@mui/system'

const StyledNav = styled('nav')(() => ({
  display: 'flex',
  paddingTop: '60px'
}))

const StyledNavLink = styled('a')(() => ({
  textDecoration: 'none',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '0.875rem',
  lineHeight: '140%',
  color: '#292929',
  '&:not(:last-of-type)': {
    color: '#91969E'
  },
  '&:not(:last-of-type)::after': {
    margin: '0.25rem',
    content: "'»'",
    color: '#91969E'
  }
}))

const Title = styled('h3')(() => ({
  fontFamily: 'Ubuntu, sans-serif',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '1.875rem',
  lineHeight: '110%',
  marginTop: '2.0625rem'
}))

const StyledDivider = styled(Divider)(() => ({
  marginTop: '1.25rem'
}))

const StyledId = styled('div')(() => ({
  padding: '40px 0 30px',

  color: 'var(--black-292929, #292929)',
  fontSize: '30px',
  fontFamily: 'Ubuntu',
  fontWeight: '500',
  lineHeight: '110%'
}))
const StyledCartProduct = styled('div')(() => ({
  width: '500px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  gap: '30px'
}))
const StyledUserInfo = styled('div')(() => ({
  display: 'flex',
  padding: '20px 0 30px'
}))
const StyledSpan = styled('span')(() => ({
  color: ' #1b1b1e',
  textAlign: 'right',
  fontSize: ' 16px',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: 'normal',
  textTransform: 'uppercase'
}))
const StyledFirstInnerContainer = styled('div')(() => ({
  paddingRight: '8.5rem'
}))
const StyledUserData = styled('p')(() => ({
  color: '#000',
  fontSize: '16px',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal'
}))
const StyledStatus = styled('p')(() => ({
  display: 'flex',
  width: '125px',
  padding: '6px 10px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  borderRadius: '6px',
  background: '#BDDEF1',
  color: '#033152',
  fontSize: ' 14px',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
  letterSpacing: '1px',
  marginTop: '6px'
}))
const StyledTitle = styled('p')(() => ({
  color: 'var(--txt, #384255)',
  fontSize: '14px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
  paddingTop: '30px'
}))
const StyledTotal = styled('p')(() => ({
  color: 'var(--txt, #384255)',
  fontSize: '14px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
  paddingTop: '5px'
}))
const DetailsProduct = () => {
  const {
    orderedProducts,
    orderNumber,
    status,
    client,
    firstName,
    region,
    address,
    telNumber,
    email,
    date,
    paymentType,
    lastName,
    city,
    discountPrice,
    totalPrice
  } = useSelector((state: RootState) => state.historyOrder.data)
  const { id } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(getHistoryOrderDetails(id))
  }, [])

  const translateWords = () => {
    switch (status) {
      case 'PENDING':
        return 'Oжидании'
      case 'DELIVERED':
        return 'Доставлен'
      case 'CANCEL':
        return 'Отменен'
      case 'COURIER_ON_THE_WAY':
        return 'В пути'
      case 'READY_FOR_DELIVERY':
        return 'В обработке'
      case 'RECEIVED':
        return 'Полученный'

      default:
        return ''
    }
  }

  return (
    <div style={{ background: '#f4f4f4' }}>
      <Container>
        <StyledNav>
          <StyledNavLink>Личный кабинет </StyledNavLink>
          <StyledNavLink> История заказов </StyledNavLink>
        </StyledNav>

        <Title>История заказов</Title>
        <StyledDivider orientation="horizontal" />
        <StyledId> № {orderNumber}</StyledId>
        <StyledCartProduct>
          {orderedProducts.map((item) => (
            <CartProduct
              quantityOfPeople={item.countOfReviews}
              img={item.image}
              title={item.productInfo}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </StyledCartProduct>
        <div>
          {' '}
          <StyledTitle>Статус</StyledTitle>
          <StyledStatus>{translateWords()}</StyledStatus>
        </div>
        <StyledUserInfo>
          <StyledFirstInnerContainer>
            <div>
              {' '}
              <StyledTitle>Клиент</StyledTitle>
              <StyledUserData>{client}</StyledUserData>
            </div>
            <div>
              <StyledTitle>Имя</StyledTitle>
              <StyledUserData>{lastName}</StyledUserData>
            </div>
            <div>
              <StyledTitle>Область/регион </StyledTitle>
              <StyledUserData>{region}</StyledUserData>
            </div>
            <div>
              <StyledTitle>Адрес </StyledTitle>
              <StyledUserData>{address}</StyledUserData>
            </div>
            <div>
              <StyledTitle>Телефон </StyledTitle>
              <StyledUserData>{telNumber}</StyledUserData>
            </div>
            <div>
              <StyledTitle>Email </StyledTitle>
              <StyledUserData>{email}</StyledUserData>
            </div>{' '}
            <div>
              <StyledTitle>
                {' '}
                Скидка: <StyledSpan>{discountPrice.toFixed(0)} C</StyledSpan>{' '}
              </StyledTitle>
              <StyledTotal>
                Итого: <StyledSpan>{totalPrice.toFixed(0)} C</StyledSpan>
              </StyledTotal>
            </div>
          </StyledFirstInnerContainer>
          <div>
            <div>
              <StyledTitle>Дата </StyledTitle>
              <StyledUserData>{date}</StyledUserData>
            </div>{' '}
            <div>
              <StyledTitle>Способ оплаты </StyledTitle>
              <StyledUserData>{paymentType}</StyledUserData>
            </div>{' '}
            <div>
              <StyledTitle>Фамилия </StyledTitle>
              <StyledUserData>{firstName}</StyledUserData>
            </div>{' '}
            <div>
              <StyledTitle>Город </StyledTitle>
              <StyledUserData>{city}</StyledUserData>
            </div>{' '}
          </div>
        </StyledUserInfo>
      </Container>
    </div>
  )
}

export default DetailsProduct
