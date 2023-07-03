import { Grid, styled } from '@mui/material'
import { NavLink } from 'react-router-dom'
import LinearTabs from './LinearTab'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
import { getAllBasket } from '../../../redux/store/basket/basket.thunk'

const Container = styled('div')(() => ({
  padding: '60px 130px'
}))
const StyledNavLink = styled(NavLink)(() => ({
  textDecoration: 'none',
  color: '#090909'
}))
const Title = styled('h1')(() => ({
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '30px',
  lineHeight: '110%',
  marginTop: '30px',
  borderBottom: '2px solid #CDCDCD',
  paddingBottom: '20px'
}))

export const UserOrderPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(getAllBasket())
  }, [])
  return (
    <Container>
      <Grid>
        <StyledNavLink to={'/'}>Главная </StyledNavLink>»{' '}
        <StyledNavLink to={'/basket'}>Корзина</StyledNavLink> »{' '}
        <StyledNavLink to={'/basket/ordering'}>Оформление заказа</StyledNavLink>
      </Grid>
      <Title>Оформление заказа</Title>
      <LinearTabs />
    </Container>
  )
}
