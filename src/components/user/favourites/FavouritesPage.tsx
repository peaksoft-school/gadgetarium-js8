import { ReactComponent as DeleteIcon } from '../../../assets/icons/favourites/favourite-delete-icon.svg'
import { Box, CircularProgress, styled } from '@mui/material'
import IconButtons from '../../UI/buttons/IconButtons'
import { Favourites } from './Favourites'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFavourite, removeAllFavourites } from '../../../redux/store/favourites/favourites.thunk'
import { AppDispatch, RootState } from '../../../redux/store'
import EmptyFavourites from './EmptyFavourites'
import { useSnackbar } from '../../../hooks/snackbar/useSnackbar'
import { DeleteModal } from '../UI/modal/DeleteModal'

const Container = styled('div')(() => ({
  width: '100%',
  height: '100%',
  padding: '60px 195px 120px 195px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  backgroundColor: '#e1e1e1'
}))
const SpanOne = styled('span')(() => ({
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '140%',
  color: '#91969E;'
}))
const SpanTwo = styled('span')(() => ({
  color: '#292929',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '140%'
}))
const Title = styled('p')(() => ({
  width: '100%',
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '30px',
  lineHeight: '110%',
  marginTop: '30px',
  borderBottom: '2px solid #CDCDCD',
  paddingBottom: '20px'
}))
const StyledDeleteIcon = styled(DeleteIcon)(() => ({
  width: '10px',
  height: '10px'
}))
const Label = styled('label')(() => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: '40px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '140%'
}))
const ListContainer = styled('div')(() => ({
  marginTop: '30px',
  display: 'grid',
  gridTemplateColumns: ' 1fr 1fr 1fr 1fr 1fr',
  gap: '12px'
}))
export const FavouritesPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { items, isLoading } = useSelector((state: RootState) => state.favourites)
  const [openModal, setOpenModal] = useState(false)
  const { snackbarHanler, ToastContainer } = useSnackbar({ autoClose: 2500, position: 'top-right' })
  useEffect(() => {
    dispatch(getFavourite())
  }, [])
  const isSnackbarHandler = () => {
    snackbarHanler({ message: 'Товар успешно удален!', linkText: '', type: 'success' })
  }
  const deleteAllFavouritesHandle = () => {
    dispatch(removeAllFavourites({ snackbar: isSnackbarHandler }))
    setOpenModal(false)
  }
  const closeModalHandler = () => {
    setOpenModal(false)
  }
  const openModalHandler = () => {
    setOpenModal(true)
  }

  return (
    <>
      <DeleteModal
        openModal={openModal}
        closeModalHandler={closeModalHandler}
        deleteHandler={deleteAllFavouritesHandle}
      />
      {isLoading ? (
        <Box
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          minHeight={'700px'}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Container>
          <SpanOne>Главная » </SpanOne>
          <SpanTwo>Избранное</SpanTwo>
          <Title>Избранное</Title>
          {items.length === 0 ? (
            <EmptyFavourites />
          ) : (
            <>
              <Label>
                <IconButtons icon={<StyledDeleteIcon />} onClick={openModalHandler} /> Очистить
                список товаров
              </Label>
              <ListContainer>
                <Favourites items={items} />
              </ListContainer>
            </>
          )}
        </Container>
      )}
      {ToastContainer}
    </>
  )
}
