import { CustomizeCheckbox } from '../../UI/buttons/Check'
import { ReactComponent as PlusIcon } from '../../../assets/icons/basket-icons/+ (1).svg'
import { ReactComponent as MinusIcon } from '../../../assets/icons/basket-icons/–.svg'
import { ReactComponent as LikeIcon } from '../../../assets/icons/basket-icons/like_icon.svg'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/basket-icons/x.svg'
import { Grid, Rating, styled } from '@mui/material'
import IconButtons from '../../UI/buttons/IconButtons'
import { DataType, basketActions } from '../../../redux/store/basket/basket.slice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react'
import { deleteBasketById, moveToFavoritesById } from '../../../redux/store/basket/basket.thunk'
import { useSnackbar } from '../../../hooks/snackbar/useSnackbar'
import { isRejectedWithValue } from '@reduxjs/toolkit'
import { DeleteModal } from '../UI/modal/DeleteModal'
import { CustomTooltip } from '../../UI/tooltip/CustomTooltip'
interface PropsType {
  item: DataType
  setProductId: Dispatch<SetStateAction<number[]>>
  productId: number[] | []
}
const ContainerCard = styled('div')(() => ({
  width: '56.25rem',
  height: '9.375rem',
  marginLeft: '.875rem',
  display: 'flex',
  padding: '1.25rem 1.25rem .625rem .9375rem',
  backgroundColor: '#ffff',
  borderRadius: '.25rem'
}))
const StyledGrid = styled(Grid)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: '1.875rem'
}))
const ContainerList = styled('ul')(() => ({
  width: '23.125rem',
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly'
}))
const StyledCheckbox = styled(CustomizeCheckbox)(() => ({
  padding: '.3125rem .5rem'
}))
const StyledImage = styled('img')(() => ({
  width: '6.875rem',
  height: '6.25rem'
}))
const ContainerImage = styled('div')(() => ({
  marginRight: '.9375rem'
}))
const TitleStyled = styled('li')(() => ({
  fontWeight: 400,
  fontSize: '1.125rem',
  lineHeight: ' 150%'
}))
const RatingStyled = styled('li')(() => ({
  fontWeight: 500,
  fontSize: '.75rem',
  lineHeight: ' .9375rem',
  color: '#909CB5',
  display: 'flex',
  alignItems: 'center'
}))

const CountStyled = styled('li')(() => ({
  fontWeight: 500,
  fontSize: '.75rem',
  lineHeight: ' .9375rem',
  color: '#3CDE14'
}))

const PriceStyled = styled('li')(() => ({
  fontWeight: 400,
  fontSize: '.875rem',
  lineHeight: ' 140%',
  color: '#384255'
}))
const ContainerInfo = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between'
}))
const Circle = styled('div')(() => ({
  width: '1.5625rem',
  height: '1.5625rem',
  border: '.0625rem solid #909CB5',
  borderRadius: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))
const ContainerAndPrice = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  padding: '1.25rem 0rem 2.0625rem 2.5rem'
}))
const StyledTotalPrice = styled('p')(() => ({
  marginLeft: '1.5625rem',
  fontWeight: 700,
  fontSize: '1.125rem',
  lineHeight: '1.375rem',
  color: '#292929',
  width: '12.5rem'
}))
const Number = styled('span')(() => ({
  width: '1.875rem',
  fontWeight: 400,
  fontSize: '1.125rem',
  lineHeight: '135.94%',
  color: '#909CB5',
  textAlign: 'center'
}))
const Amount = styled('p')(() => ({
  display: 'flex',
  alignItems: 'center'
}))
const StyledIconButton = styled(IconButtons)(() => ({
  padding: '.375rem'
}))
const TextStyled = styled('span')(() => ({
  fontWeight: 400,
  fontSize: '.875rem',
  lineHeight: ' 140%',
  color: '#909CB5'
}))
const FavoritesContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '.75rem'
}))
const StyledLikeIcon = styled(LikeIcon)(() => ({
  width: '1rem',
  height: '.8125rem'
}))
const MiniContainer = styled('label')(() => ({
  display: 'flex',
  alignItems: 'center'
}))

const BasketItem = ({ item, setProductId, productId }: PropsType) => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const { snackbarHanler, ToastContainer } = useSnackbar({
    autoClose: 3000,
    position: 'top-right'
  })
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const data = {
      productQuantity: item.quantityProduct,
      subProductId: item.subProductId
    }

    dispatch(basketActions.increment(data))
    dispatch(basketActions.decrement(data))
    dispatch(basketActions.calculateSum())
  }, [])

  const addCountHandler = () => {
    const data = {
      productQuantity: item.quantityProduct + 1,
      subProductId: item.subProductId
    }

    dispatch(basketActions.increment(data))
    dispatch(basketActions.calculateSum())
  }

  const subtractCountHandler = () => {
    if (item.quantityProduct <= 1) {
      setOpenModal(true)
    } else {
      const data = {
        productQuantity: item.quantityProduct - 1,
        subProductId: item.subProductId
      }

      dispatch(basketActions.decrement(data))
      dispatch(basketActions.calculateSum())
    }
  }
  const checkboxHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked
    const dataCheckbox = {
      id: item.subProductId,
      checked: isChecked
    }
    dispatch(basketActions.toggleCheckbox(dataCheckbox))
    if (isChecked === true) {
      setProductId([...productId, item.subProductId])
    } else {
      const deletedItems = productId.filter((id) => id !== item.subProductId)
      setProductId(deletedItems)
    }
  }
  const snackbarDeleteHandler = (message: string, type: 'success' | 'error' | undefined) => {
    snackbarHanler({
      message: message,
      linkText: '',
      type
    })
  }
  const removeByIdBasket = () => {
    dispatch(deleteBasketById({ id: item.subProductId, snackbar: snackbarDeleteHandler }))
    setOpenModal(false)
  }
  const productMovedToFavoritesHandle = () => {
    dispatch(moveToFavoritesById({ id: item.subProductId }))
      .unwrap()
      .then(() => {
        snackbarHanler({
          message: 'Товар успешно добавлен в избранное!',
          linkText: '',
          type: 'success'
        })
      })
      .catch((e) => {
        isRejectedWithValue(e)
      })
  }
  const openModalHandler = () => {
    setOpenModal(true)
  }
  return (
    <>
      <StyledGrid>
        {ToastContainer}
        <StyledCheckbox checked={item.checked} onChange={checkboxHandler} changecolor="#CB11AB" />
        <ContainerCard>
          <ContainerImage>
            <StyledImage src={item.image} alt="image" />
          </ContainerImage>
          <ContainerInfo>
            <ContainerList>
              <TitleStyled>{item.name}</TitleStyled>
              <RatingStyled>
                Рейтинг
                <Rating
                  name="size-small"
                  value={item.rating}
                  size="small"
                  readOnly
                  sx={{ fontSize: '.9375rem', marginLeft: '.25rem', marginRight: '.25rem' }}
                />
                ({item.numberOfReviews})
              </RatingStyled>
              <CountStyled>В наличии ({item.quantity})</CountStyled>
              <PriceStyled>Код товара: {item.itemNumber} </PriceStyled>
            </ContainerList>
            <Grid>
              <ContainerAndPrice>
                <Amount>
                  <StyledIconButton
                    icon={
                      <Circle>
                        <MinusIcon />
                      </Circle>
                    }
                    onClick={subtractCountHandler}
                  />
                  <Number>{item.quantityProduct}</Number>
                  <StyledIconButton
                    icon={
                      <Circle>
                        <PlusIcon />
                      </Circle>
                    }
                    onClick={addCountHandler}
                    disabled={item.quantityProduct >= item.quantity}
                  />
                </Amount>
                <StyledTotalPrice>{item.price} с</StyledTotalPrice>
              </ContainerAndPrice>
              <FavoritesContainer>
                <CustomTooltip title="Добавить в избранное">
                  <MiniContainer>
                    <IconButtons
                      icon={<StyledLikeIcon />}
                      onClick={productMovedToFavoritesHandle}
                    />
                    <TextStyled>В избранное</TextStyled>
                  </MiniContainer>
                </CustomTooltip>
                <CustomTooltip title="Удалить из корзины">
                  <MiniContainer>
                    <IconButtons icon={<DeleteIcon />} onClick={openModalHandler} />
                    <TextStyled>Удалить</TextStyled>
                  </MiniContainer>
                </CustomTooltip>
              </FavoritesContainer>
            </Grid>
          </ContainerInfo>
        </ContainerCard>
      </StyledGrid>
      <DeleteModal
        openModal={openModal}
        closeModalHandler={() => {
          setOpenModal(false)
        }}
        deleteHandler={removeByIdBasket}
      />
    </>
  )
}
export default BasketItem
