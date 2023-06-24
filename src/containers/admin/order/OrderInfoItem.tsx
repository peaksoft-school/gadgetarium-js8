import { Box, Grid, styled, Typography } from '@mui/material'
import { OrderDataType } from './OrderInfoPage'
import { NavLink } from 'react-router-dom'
type Props = {
  getInfoOrder: OrderDataType | null
}
const ContainerStyled = styled('div')(() => ({
  width: '100%',
  mainHeight: '31.25rem',
  paddingLeft: '12.1875rem',
  paddingRight: '12.1875rem',
  paddingTop: '120px',
  fontFamily: 'inherit'
}))

const StyledNavLink = styled(NavLink)(() => ({
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
const Title = styled('a')(() => ({
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
const CardList = styled('ul')(() => ({
  listStyle: 'none',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
}))
const List = styled('li')(() => ({
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '19px',
  color: '#292929',
  width: '14rem'
}))
const StyledGridContainer = styled(Grid)(() => ({
  paddingTop: '40px',
  display: 'flex',
  justifyContent: 'space-between'
}))
const StyledDiscount = styled('p')(() => ({
  color: '#F10000',
  marginTop: '10px'
}))
const Container = styled('div')(() => ({
  display: 'flex',
  borderBottom: '2px solid #CDCDCD',

  paddingBottom: '20px'
}))
const StyledDicountNumber = styled('p')(() => ({
  marginTop: '28px'
}))
const CardContainer = styled('div')(() => ({
  width: '590px'
}))
const StyledTotal = styled('p')(() => ({
  textAlign: 'right',
  marginTop: '10px'
}))
const StyledSpan = styled('p')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '19px',
  color: '#292929',
  display: 'inline-block',
  marginRight: '10px'
}))
const InfoOrderContainer = styled('div')(() => ({
  width: '450px',
  height: '286px',
  border: '2px solid #CDCDCD',
  padding: '30px',
  marginRight: '250px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  ':first-child(1)': {
    borderBottom: '2px solid #CDCDCD '
  }
}))
const StyledTypography = styled(Typography)(() => ({
  fontFamily: 'Inter',
  fontStyle: ' normal',
  fontWeight: 500,
  fontSize: ' 16px',
  lineHeight: '120%',
  color: '#292929'
}))
const StyledNumberOfOrder = styled('span')(() => ({
  fontWeight: 400,
  fontSize: '15px'
}))
const StyledText = styled('p')(() => ({
  fontWeight: 400,
  fontSize: '16px',
  marginTop: '5px'
}))
const StyledFirstTypography = styled(Typography)(() => ({
  fontFamily: 'Inter',
  fontStyle: ' normal',
  fontWeight: 500,
  fontSize: ' 16px',
  lineHeight: '120%',
  color: '#292929',
  borderBottom: '2px solid  #CDCDCD  ',
  paddingBottom: '18px'
}))
const OrderInfoItem = ({ getInfoOrder }: Props) => {
  return (
    <ContainerStyled>
      <StyledNav>
        <StyledNavLink to={'/admin/orders'}>Заказы </StyledNavLink>
        <Title>{getInfoOrder?.customerName}</Title>
      </StyledNav>
      <BoxStyled>
        <TypographyStyled variant="h5">Оплата заказа {getInfoOrder?.orderNumber}</TypographyStyled>
      </BoxStyled>
      <StyledGridContainer>
        {getInfoOrder?.products.map((product) => {
          return (
            <CardContainer>
              <Container>
                <CardList>
                  <List>Наименование:</List>
                  <List>Кол-во товара:</List>

                  <List>
                    <p>Общая сумма заказа:</p>
                    <StyledDiscount>Скидка:{`${product.percentOfDiscount}%`}</StyledDiscount>
                  </List>
                  <List>Сумма скидки:</List>
                </CardList>
                <CardList>
                  <li>{product.name}</li>
                  <li>{getInfoOrder.quantity}</li>
                  <li>{getInfoOrder.totalPrice.toFixed(2)}</li>
                  <li>
                    <StyledDicountNumber>{product.sumOfDiscount.toFixed(2)}</StyledDicountNumber>
                  </li>
                </CardList>
              </Container>
              <StyledTotal>
                <StyledSpan>Итого:</StyledSpan>
                {(getInfoOrder.totalPrice - product.sumOfDiscount).toFixed(2)}
              </StyledTotal>
            </CardContainer>
          )
        })}
        <InfoOrderContainer>
          <StyledFirstTypography>Информация о заказе</StyledFirstTypography>
          <StyledTypography>
            Заказ № <StyledNumberOfOrder>{getInfoOrder?.orderNumber}</StyledNumberOfOrder>
          </StyledTypography>
          <StyledTypography>
            Состояние: <StyledNumberOfOrder>Завершено</StyledNumberOfOrder>
          </StyledTypography>
          <StyledTypography>
            Контактный телефон:
            <StyledText>{getInfoOrder?.phoneNumber}</StyledText>
          </StyledTypography>
          <StyledTypography>
            Адрес доставки:
            <StyledText>{getInfoOrder?.address}</StyledText>
          </StyledTypography>
        </InfoOrderContainer>
      </StyledGridContainer>
    </ContainerStyled>
  )
}

export default OrderInfoItem
