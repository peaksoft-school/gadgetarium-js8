import IconButtons from '../../UI/buttons/IconButtons'
import { CustomizeCheckbox } from '../../UI/buttons/Check'
import { ReactComponent as LikeIcon } from '../../../assets/icons/basket-icons/like_icon.svg'
import { ReactComponent as DeletIcon } from '../../../assets/icons/admin-products/deleteIcon.svg'
import BasketItem from './BasketItem'
import Button from '../../UI/buttons/Button'
import { Grid, Stack, Typography, styled } from '@mui/material'
import { InitType, basketActions } from '../../../redux/store/basket/basket.slice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
import { ChangeEvent, useState } from 'react'
import {
  deleteBasketByChoosenId,
  moveToFavoritesByChoosenId
} from '../../../redux/store/basket/basket.thunk'
import { useSnackbar } from '../../../hooks/snackbar/useSnackbar'
import { DeleteModal } from '../UI/modal/DeleteModal'
import { useNavigate } from 'react-router-dom'

const ListContainer = styled('ul')(() => ({
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
  height: '17.5rem',
  backgroundColor: '#ffff',
  padding: '1.875rem',
  borderRadius: '.3125rem',
  position: 'fixed',
  right: '12.5rem'
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
  marginTop: '0.5rem'
}))
const ContainerButton = styled('div')(() => ({
  width: '100%',
  marginTop: '1.25rem'
}))
const StyledButton = styled(Button)(() => ({
  width: '100%',
  color: '#ffff',
  fontWeight: 700,
  fontSize: ' 0.875rem',
  lineHeight: '1.0625rem',
  textAlign: 'center',
  textTransform: 'uppercase',
  padding: '0.875rem 1.25rem'
}))
const BorderBottom = styled('span')(() => ({
  borderBottom: '2px solid'
}))
const SumPriceStyled = styled('span')(() => ({
  borderBottom: '2px solid',
  marginLeft: '0.3125rem'
}))
const Basket = ({ basketData }: { basketData: InitType }) => {
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState<boolean>(false)
  const { snackbarHanler, ToastContainer } = useSnackbar({
    autoClose: 3000,
    position: 'top-right'
  })
  const dispatch = useDispatch<AppDispatch>()
  const [productId, setProductId] = useState<number[]>([])
  const checkboxAllHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked
    const dataCheckbox = {
      id: 'allSelect',
      checked: isChecked
    }
    dispatch(basketActions.toggleCheckbox(dataCheckbox))

    if (!basketData.checkedAll) {
      const dataId = basketData.items.map((item) => item.subProductId)
      setProductId(dataId)
    }
  }
  const snackbarHandle = () => {
    snackbarHanler({
      message: 'Товар успешно добавлен в избранное!',
      linkText: '',
      type: 'success'
    })
  }
  const moveToChoosenProductToFavoritesHandler = () => {
    if (productId.length > 0) {
      dispatch(moveToFavoritesByChoosenId({ id: productId, snackbar: snackbarHandle }))
    }
  }
  const deleteChoosenProductHandler = () => {
    if (productId.length > 0) {
      dispatch(deleteBasketByChoosenId(productId))
    }
    setOpenModal(false)
  }
  const openModalHandler = () => {
    if (productId.length > 0) {
      setOpenModal(true)
    }
  }
  const goToCheckoutHandler = () => {
    navigate('checkout')
  }
  return (
    <Stack>
      {ToastContainer}
      <ListContainer>
        <List>
          <Label>
            <StyledCheckbox
              checked={basketData.checkedAll}
              changecolor="#CB11AB"
              onChange={checkboxAllHandler}
            />
            Отметить все
          </Label>
        </List>
        <List>
          <Label>
            <IconButtons icon={<StyledDeleteIcon />} onClick={openModalHandler} />
            Удалить
          </Label>
        </List>
        <List>
          <Label>
            <IconButtons
              icon={<StyledLikeIcon />}
              onClick={moveToChoosenProductToFavoritesHandler}
            />
            Переместить в избранное
          </Label>
        </List>
      </ListContainer>
      <MainContainer>
        <Grid>
          {basketData.items?.map((item) => {
            return (
              <BasketItem
                item={item}
                key={item.subProductId}
                setProductId={setProductId}
                productId={productId}
              />
            )
          })}
        </Grid>
        <ContainerSumOfOrder>
          <TitleSumOfOrder>Сумма заказа</TitleSumOfOrder>
          <ContainerListOrder>
            <ListOrder>
              <TextOrderStyled>Количество товаров:</TextOrderStyled>
              <Typography>{basketData.totalQuantity} шт.</Typography>
            </ListOrder>
            <ListOrder>
              <TextOrderStyled>Ваша скидка:</TextOrderStyled>
              <DiscountTitle>
                – {basketData.totalDiscount.toFixed(2)} <BorderBottom>с</BorderBottom>
              </DiscountTitle>
            </ListOrder>

            <ListOrder>
              <TextOrderStyled>Сумма:</TextOrderStyled>
              <Typography>
                {basketData.sumPrice.toFixed(2)}
                <SumPriceStyled>с</SumPriceStyled>
              </Typography>
            </ListOrder>
            <ListOrder>
              <TitleTotalPriceStyled>Итого</TitleTotalPriceStyled>
              <TitleTotalPriceStyled>
                {basketData.totalSum.toFixed(2)} <BorderBottom>с</BorderBottom>
              </TitleTotalPriceStyled>
            </ListOrder>
          </ContainerListOrder>
          <ContainerButton>
            <StyledButton onClick={goToCheckoutHandler}>Перейти к оформлению</StyledButton>
          </ContainerButton>
        </ContainerSumOfOrder>
      </MainContainer>
      <DeleteModal
        openModal={openModal}
        closeModalHandler={() => {
          setOpenModal(false)
        }}
        deleteHandler={deleteChoosenProductHandler}
      />
    </Stack>
  )
}
export default Basket
