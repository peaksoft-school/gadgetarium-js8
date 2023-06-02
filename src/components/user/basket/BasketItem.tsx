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
interface PropsType {
  item: DataType
  setProductId: Dispatch<SetStateAction<number[]>>
  productId: number[] | []
}
const ContainerCard = styled('div')(() => ({
  width: '900px',
  height: '150px',
  marginLeft: '14px',
  display: 'flex',
  padding: '20px 20px 10px 15px',
  backgroundColor: '#ffff',
  borderRadius: '4px'
}))
const StyledGrid = styled(Grid)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: '30px'
}))
const ContainerList = styled('ul')(() => ({
  width: '370px',
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly'
}))
const StyledCheckbox = styled(CustomizeCheckbox)(() => ({
  padding: '5px 8px'
}))
const StyledImage = styled('img')(() => ({
  width: '110px',
  height: '100px'
}))
const ContainerImage = styled('div')(() => ({
  marginRight: '15px'
}))
const TitleStyled = styled('li')(() => ({
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: ' 150%'
}))
const RatingStyled = styled('li')(() => ({
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: ' 15px',
  color: '#909CB5',
  display: 'flex',
  alignItems: 'center'
}))

const CountStyled = styled('li')(() => ({
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: ' 15px',
  color: '#3CDE14'
}))

const PriceStyled = styled('li')(() => ({
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: ' 140%',
  color: '#384255'
}))
const ContainerInfo = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between'
}))
const Circle = styled('div')(() => ({
  width: '25px',
  height: '25px',
  border: '1px solid #909CB5',
  borderRadius: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))
const ContainerAndPrice = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  padding: '20px 0px 33px 40px'
}))
const StyledTotalPrice = styled('p')(() => ({
  marginLeft: '25px',
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: '22px',
  color: '#292929',
  width: '200px'
}))
const Number = styled('span')(() => ({
  width: '30px',
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '135.94%',
  color: '#909CB5',
  textAlign: 'center'
}))
const Amount = styled('p')(() => ({
  display: 'flex',
  alignItems: 'center'
}))
const StyledIconButton = styled(IconButtons)(() => ({
  padding: '6px'
}))
const TextStyled = styled('span')(() => ({
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: ' 140%',
  color: '#909CB5'
}))
const FavoritesContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '12px'
}))
const StyledLikeIcon = styled(LikeIcon)(() => ({
  width: '16px',
  height: '13px'
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

    dispatch(basketActions.calculateSum())
    dispatch(basketActions.increment(data))
    dispatch(basketActions.decrement(data))
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
    const data = {
      productQuantity: item.quantityProduct - 1,
      subProductId: item.subProductId
    }

    dispatch(basketActions.decrement(data))
    dispatch(basketActions.calculateSum())
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
  const removeByIdBasket = () => {
    dispatch(deleteBasketById(item.subProductId))
      .unwrap()
      .then(() => {
        snackbarHanler({
          message: 'Товар успешно добавлен в избранное!',
          linkText: '',
          type: 'success'
        })
      })
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
                  sx={{ fontSize: '15px', marginLeft: '4px', marginRight: '4px' }}
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
                    disabled={item.quantityProduct <= 1}
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
                <MiniContainer>
                  <IconButtons icon={<StyledLikeIcon />} onClick={productMovedToFavoritesHandle} />
                  <TextStyled>В избранное</TextStyled>
                </MiniContainer>
                <MiniContainer>
                  <IconButtons icon={<DeleteIcon />} onClick={openModalHandler} />
                  <TextStyled>Удалить</TextStyled>
                </MiniContainer>
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
