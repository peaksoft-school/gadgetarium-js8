import { Typography, styled } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { ProductItem } from './ProductItem'
import { RootState } from '../../../redux/store'
import { useSelector } from 'react-redux'
type Props = {
  quantity: number
  discountSum: number
  sumPrice: number
  totalPrice: number
}
const Container = styled('div')(() => ({
  width: '400px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  marginTop: '28px'
}))
const ContainerSumOfOrder = styled('div')(() => ({
  width: '25rem',
  backgroundColor: '#ffff',
  padding: '1.875rem',
  borderRadius: '.3125rem'
}))
const TitleSumOfOrder = styled('h3')(() => ({
  fontWeight: 500,
  fontSize: '1.1rem',
  lineHeight: '120%',
  borderBottom: '.0938rem solid #CDCDCD',
  paddingBottom: '.75rem',
  marginBottom: '.75rem',
  display: 'flex',
  justifyContent: 'space-between'
}))
const ContainerListOrder = styled('ul')(() => ({
  listStyle: 'none'
}))
const ListOrder = styled('li')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}))
const TextOrderStyled = styled('p')(() => ({
  fontWeight: 400,
  fontSize: '1rem',
  lineHeight: '150%',
  color: '#292929'
}))
const DiscountTitle = styled('p')(() => ({
  fontWeight: 400,
  fontSize: '1rem',
  lineHeight: '150%',
  color: '#F10000'
}))
const TitleTotalPriceStyled = styled('p')(() => ({
  fontWeight: 600,
  fontSize: '1rem',
  lineHeight: '1.18rem',
  color: '#292929',
  marginTop: '0.5rem'
}))

const BorderBottom = styled('span')(() => ({
  borderBottom: '2px solid'
}))
const SumPriceStyled = styled('span')(() => ({
  borderBottom: '2px solid',
  marginLeft: '0.3125rem'
}))
const StyledNavLink = styled(NavLink)(() => ({
  fontWeight: 700,
  fontSize: '14px',
  lineHeight: ' 17px',
  color: '#4B7EE8',
  textDecoration: 'none'
}))
const ProductContainer = styled('div')(() => ({
  overflow: ' auto',
  maxHeight: '300px'
}))
export const OrderedCardList = ({ quantity, sumPrice, discountSum, totalPrice }: Props) => {
  const { items } = useSelector((state: RootState) => state.basket)

  return (
    <Container>
      <ContainerSumOfOrder>
        <TitleSumOfOrder>
          Сумма заказа <StyledNavLink to={'/basket'}>Изменить</StyledNavLink>
        </TitleSumOfOrder>

        <ContainerListOrder>
          <ListOrder>
            <TextOrderStyled>Количество товаров:</TextOrderStyled>
            <Typography>{quantity} шт.</Typography>
          </ListOrder>
          <ListOrder>
            <TextOrderStyled>Ваша скидка:</TextOrderStyled>
            <DiscountTitle>
              – {discountSum.toFixed(2)} <BorderBottom>с</BorderBottom>
            </DiscountTitle>
          </ListOrder>

          <ListOrder>
            <TextOrderStyled>Сумма:</TextOrderStyled>
            <Typography>
              {sumPrice.toFixed(2)}
              <SumPriceStyled>с</SumPriceStyled>
            </Typography>
          </ListOrder>
          <ListOrder>
            <TitleTotalPriceStyled>Итого</TitleTotalPriceStyled>
            <TitleTotalPriceStyled>
              {totalPrice.toFixed(2)} <BorderBottom>с</BorderBottom>
            </TitleTotalPriceStyled>
          </ListOrder>
        </ContainerListOrder>
      </ContainerSumOfOrder>
      <ProductContainer>
        {items.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </ProductContainer>
    </Container>
  )
}
