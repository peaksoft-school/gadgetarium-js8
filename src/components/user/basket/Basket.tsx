import IconButtons from '../../UI/buttons/IconButtons'
import { CustomizeCheckbox } from '../../UI/buttons/Check'
import { ReactComponent as LikeIcon } from '../../../assets/icons/basket-icons/like_icon.svg'
import { ReactComponent as DeletIcon } from '../../../assets/icons/admin-products/deleteIcon.svg'
import BasketItem from './BasketItem'
import Button from '../../UI/buttons/Button'
import { Grid, Stack, Typography, styled } from '@mui/material'
const ListContainer = styled('li')(() => ({
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '2.4375rem',
  marginTop: '1.875rem'
}))
const List = styled('li')(() => ({
  fontWeight: 400,
  fontSize: '1.25rem',
  lineHeight: '110%',
  display: 'flex',
  alignItems: 'center'
}))
const StyledDeleteIcon = styled(DeletIcon)(() => ({
  width: '1.4375rem',
  height: '1.4375rem'
}))
const StyledLikeIcon = styled(LikeIcon)(() => ({
  width: '1.375rem',
  height: '1.375rem'
}))
const StyledCheckbox = styled(CustomizeCheckbox)(() => ({
  padding: '.3125rem .5rem'
}))
const Label = styled('label')(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center'
}))
const ContainerSumOfOrder = styled('div')(() => ({
  width: '25rem',
  height: '280px',
  backgroundColor: '#ffff',
  padding: '1.875rem',
  borderRadius: '.3125rem'
}))
const TitleSumOfOrder = styled('h3')(() => ({
  fontWeight: 500,
  fontSize: '1.25rem',
  lineHeight: '120%',
  borderBottom: '.0938rem solid #CDCDCD',
  paddingBottom: '.75rem',
  marginBottom: '.75rem'
}))
const ContainerListOrder = styled('ul')(() => ({
  listStyle: 'none',
  paddingRight: '3.75rem'
}))
const ListOrder = styled('li')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}))
const MainContainer = styled('div')(() => ({
  marginTop: '.9375rem',
  display: 'flex',
  justifyContent: 'space-between'
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
  marginTop: '8px'
}))
const ContainerButton = styled('div')(() => ({
  width: '100%',
  marginTop: '20px'
}))
const StyledButton = styled(Button)(() => ({
  width: '100%',
  color: '#ffff',
  fontWeight: 700,
  fontSize: ' 14px',
  lineHeight: '17px',
  textAlign: 'center',
  textTransform: 'uppercase',
  padding: '14px 20px'
}))
const BorderBottom = styled('span')(() => ({
  borderBottom: '2px solid'
}))
const Basket = () => {
  return (
    <Stack>
      <ListContainer>
        <List>
          <Label>
            <StyledCheckbox /> Отметить все
          </Label>
        </List>
        <List>
          <Label>
            <IconButtons icon={<StyledDeleteIcon />} /> Удалить
          </Label>
        </List>
        <List>
          <Label>
            <IconButtons icon={<StyledLikeIcon />} /> Переместить в избранное
          </Label>
        </List>
      </ListContainer>
      <MainContainer>
        <Grid>
          <BasketItem />
          <BasketItem />
          <BasketItem />
        </Grid>
        <ContainerSumOfOrder>
          <TitleSumOfOrder>Сумма заказа</TitleSumOfOrder>
          <ContainerListOrder>
            <ListOrder>
              <TextOrderStyled>Количество товаров:</TextOrderStyled>
              <Typography>3 шт.</Typography>
            </ListOrder>
            <ListOrder>
              <TextOrderStyled>Ваша скидка:</TextOrderStyled>
              <DiscountTitle>
                – 20 000 <BorderBottom>с</BorderBottom>
              </DiscountTitle>
            </ListOrder>

            <ListOrder>
              <TextOrderStyled>Сумма:</TextOrderStyled>
              <Typography>
                220 900 <BorderBottom>с</BorderBottom>
              </Typography>
            </ListOrder>
            <ListOrder>
              <TitleTotalPriceStyled>Итого</TitleTotalPriceStyled>
              <TitleTotalPriceStyled>
                200 900 <BorderBottom>с</BorderBottom>
              </TitleTotalPriceStyled>
            </ListOrder>
          </ContainerListOrder>
          <ContainerButton>
            <StyledButton>Перейти к оформлению</StyledButton>
          </ContainerButton>
        </ContainerSumOfOrder>
      </MainContainer>
    </Stack>
  )
}
export default Basket
