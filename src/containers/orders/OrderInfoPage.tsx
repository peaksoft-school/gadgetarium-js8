import { Box, styled, Typography } from '@mui/material'

const ContainerStyled = styled('div')(() => ({
  width: '100%',
  mainHeight: '31.25rem',
  paddingLeft: '12.1875rem',
  paddingRight: '12.1875rem',
  paddingTop: '3.9375rem',
  fontFamily: 'inherit'
}))

const StyledNavLink = styled('a')(() => ({
  textDecoration: 'none',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '.875rem',
  lineHeight: '140%',
  color: '#292929',
  '&:not(:last-of-type)': {
    color: '#91969E'
  },
  '&:not(:last-of-type)::after': {
    margin: '.25rem',
    content: "'»'",
    color: '#91969E'
  }
}))

const StyledNav = styled('nav')(() => ({
  display: 'flex',
  marginBottom: '33px'
}))

const BoxStyled = styled(Box)(() => ({
  padding: '0 0 16px 0',
  borderBottom: '.0625rem solid #CDCDCD',
  '& h1': {
    fontFamily: 'Ubuntu',
    fontWeight: '500',
    fontSize: '2rem',
    lineHeight: '2rem'
  }
}))

const TypographyStyled = styled(Typography)(() => ({
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '1.875rem',
  lineHeight: '110%',
  display: 'flex',
  alignItems: 'flex-end',
  color: '#292929'
}))

const OrderInfoPage = () => {
  return (
    <ContainerStyled>
      <StyledNav>
        <StyledNavLink>Заказы </StyledNavLink>
        <StyledNavLink>Айзат Жумагулова</StyledNavLink>
      </StyledNav>
      <BoxStyled>
        <TypographyStyled variant="h5">Оплата заказа 000000-455247</TypographyStyled>
      </BoxStyled>
    </ContainerStyled>
  )
}

export default OrderInfoPage
