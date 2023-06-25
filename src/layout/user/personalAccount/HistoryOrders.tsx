import { styled } from '@mui/material'
import {
  deletetOrderHistoryByIdRequest,
  getOrderHistoryRequest
} from '../../../api/personalAccount/history/HistoryService'
import { useEffect, useState } from 'react'
import { TypeOrderHistory } from '../../../utils/common/types'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../../utils/constants/router/routerConsts'
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
  width: '330px'
}))
const StyledTd1 = styled('td')(() => ({
  width: '160px',
  color: 'var(--black-292929, #292929)',
  fontSize: '1rem',
  fontFamily: 'Inter',
  lineHeight: '150%'
}))
const StyledTitle = styled('div')(() => ({
  color: 'var(--black-292929, #292929)',
  fontSize: '14px',
  fontFamily: 'Inter',
  lineHeight: '140%',
  cursor: 'pointer',
  paddingLeft: '750px',
  paddingTop: '10px'
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
        <StyledTitle onClick={deleteAllOrder}>x Очистить список заказов</StyledTitle>
        <StyledBody>
          {orderHistory.map((item, index) => (
            <>
              <StyledTr key={item.order_id}>
                <StyledTd1>{item.date}</StyledTd1>
                <StyledTd2 onClick={() => navigate(PATHS.PERSONAL.detailsHistory)}>
                  № {item.orderNumber}
                </StyledTd2>
                <StyledTd3>{translateWords()[index]}</StyledTd3>
                <StyledTd4>{item.totalPrice} c</StyledTd4>
              </StyledTr>
            </>
          ))}
        </StyledBody>
      </table>
    </>
  )
}

export default HistoryOrders
