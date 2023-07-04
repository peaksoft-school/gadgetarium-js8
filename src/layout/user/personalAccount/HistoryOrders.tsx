import { styled } from '@mui/material'
import {
  deletetOrderHistoryByIdRequest,
  getOrderHistoryRequest
} from '../../../api/personalAccount/history/HistoryService'
import { ReactComponent as PhotoOrderHistory } from '../../../assets/images/personalAccount/photoOrderHistory.svg'

import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { TypeOrderHistory } from '../../../utils/constants/types'
import Button from '../../../components/UI/buttons/Button'
const StyledTr = styled('tr')(() => ({
  width: '65.625rem',
  padding: '.9375rem .625rem .5rem 0px',
  display: 'flex',

  borderBottom: '2px solid #efebeb'
}))

const StyledBody = styled('tbody')(() => ({
  width: '100%'
}))
const StyledTd2 = styled('td')(() => ({
  width: '180px',
  cursor: 'pointer',
  color: 'var(--black-292929, #292929)',
  fontSize: '1.125rem',
  fontFamily: 'Inter',
  fontWeight: '700',
  lineHeight: '150%'
}))
const StyledTd4 = styled('td')(() => ({
  color: 'var(--black-292929, #292929)',
  textAlign: 'right',
  fontSize: '17px',
  fontFamily: 'Inter',
  fontWeight: '700',
  lineHeight: '135.938%',
  width: '210px',
  height: '.625rem'
}))
const StyledTd3 = styled('td')(() => ({
  width: '330px',
  color: ' #F99808'
}))
const StyledTd1 = styled('td')(() => ({
  width: '160px',
  color: 'var(--black-292929, #292929)',
  fontSize: '1rem',
  fontFamily: 'Inter',
  lineHeight: '150%'
}))
const StyledImageContainer = styled('div')(() => ({
  textAlign: 'center',
  div: {
    color: 'var(--black-292929, #292929)',
    fontSize: '24px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '110%',
    textTransform: 'capitalize',
    paddingTop: '30px'
  },
  p: {
    color: 'var(--black-292929, #292929)',
    textAlign: 'center',
    fontSize: '1.125rem',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '140.023%',
    paddingTop: '1.25rem'
  }
}))
const StyledTitle = styled('div')(() => ({
  color: 'var(--black-292929, #292929)',
  fontSize: '.875rem',
  fontFamily: 'Inter',
  lineHeight: '140%',
  cursor: 'pointer',
  paddingLeft: '78.125rem',
  paddingTop: '.3125rem'
}))
const StyledButton = styled(Button)(() => ({
  cursor: 'pointer',
  display: ' inline-flex',
  padding: ' .625rem 1.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '.625rem',
  flexShrink: '0',
  borderRadius: '.25rem',
  marginTop: '1.5rem'
}))
const StyledUserName = styled('h1')(() => ({
  color: 'var(--txt, #384255)',
  fontSize: '18px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal'
}))
const StyledUserEmail = styled('p')(() => ({
  color: 'var(--txt, #384255)',
  fontSize: '16px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '150%',
  marginTop: '5px'
}))
const StyledNavLink = styled(NavLink)(() => ({
  color: 'var(--blue, #2C68F5)',
  fontSize: '16px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: 'normal',
  paddingTop: '19px',
  textDecoration: 'none'
}))
const HistoryOrders = () => {
  const navigate = useNavigate()

  const [orderHistory, setOrderHistory] = useState<TypeOrderHistory>([])
  const getOrderHistory = async () => {
    try {
      const { data } = await getOrderHistoryRequest()
      setOrderHistory(data)
    } catch (error) {}
  }
  useEffect(() => {
    getOrderHistory()
  }, [])

  const deleteAllOrder = async () => {
    try {
      await deletetOrderHistoryByIdRequest()
      setOrderHistory([])
    } catch (error) {}
  }

  const translateWords = () => {
    return orderHistory.map((item) => {
      switch (item.status) {
        case 'PENDING':
          return 'Oжидания'
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
    })
  }

  return (
    <>
      <table>
        {orderHistory.length ? (
          <>
            <StyledTitle onClick={deleteAllOrder}>x Очистить список заказов</StyledTitle>

            <StyledBody>
              {orderHistory.map((item, index) => (
                <>
                  <StyledTr key={item.order_id}>
                    <StyledTd1>{item.date}</StyledTd1>
                    <StyledTd2 onClick={() => navigate(`${item.order_id}`)}>
                      № {item.orderNumber}
                    </StyledTd2>
                    <StyledTd3>{translateWords()[index]}</StyledTd3>
                    <StyledTd4>{item.totalPrice.toFixed(0)} c</StyledTd4>
                  </StyledTr>
                </>
              ))}
            </StyledBody>
          </>
        ) : (
          <>
            <StyledTitle>
              <StyledUserName>
                Азамат <br /> Азаматов
              </StyledUserName>
              <StyledUserEmail>
                aza@gmail.com <br /> +996 (400) 88-88-88
              </StyledUserEmail>
              <StyledNavLink to={''}>Выйти</StyledNavLink>
            </StyledTitle>
            <StyledImageContainer>
              <PhotoOrderHistory />
              <div>Здесь пока пусто</div>
              <p>Здесь будет храниться история ваших заказов.</p>
              <StyledButton>К покупкам</StyledButton>
            </StyledImageContainer>{' '}
          </>
        )}
      </table>
    </>
  )
}

export default HistoryOrders
