import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/feedback-icons/admin_delete_icon.svg'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Rating, TableCell, TableRow, TextField, Typography, styled } from '@mui/material'
import IconButtons from '../../UI/buttons/IconButtons'
import Button from '../../UI/buttons/Button'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/store'
import {
  deleteReviewById,
  postReviews,
  updateReviews
} from '../../../redux/store/reviews/reviews.thunk'
import CutTextReviews from './CutTextReviews'
import Modal from '../../UI/modals/Modal'
import { useSnackbar } from '../../../hooks/snackbar/useSnackbar'

type AllReviewsType = {
  id: number
  productImg: string
  productItemNumber: number
  productName: string
  date: string | null
  commentary: string
  grade: number
  answer: string
  images: string[]
  userName: string
  userEmail: string
  userImg: string
}
interface PropsType {
  item: AllReviewsType
  index: number
  page: string
}
const ModalContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '',
  paddingLeft: '60px',
  paddingRight: '60px',
  p: {
    color: '#292929',
    fontFamily: 'Inter, sans-serif',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '140%',
    textAlign: 'center'
  }
}))

const DeleteModalButton = styled(Button)(() => ({
  backgroundColor: '#CB11AB',
  padding: '0.5rem 1.5rem',
  borderRadius: '4px',
  color: '#fff',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '19px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#991984',
    color: '#ffff'
  }
}))

const CancelModalButton = styled(Button)(() => ({
  backgroundColor: '#fff',
  padding: '0.45rem 1rem',
  borderRadius: '4px',
  border: '1px solid #CB11AB',
  color: '#CB11AB',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '1rem',
  lineHeight: '19px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#991984',
    color: '#ffff'
  }
}))

const ModalButtonContainers = styled('div')(() => ({
  marginTop: '1rem',
  display: 'flex',
  justifyContent: 'space-around'
}))
const StyledTableBodyCell = styled(TableCell)(() => ({
  padding: '1.25rem 0rem',
  textAlign: 'left',
  verticalAlign: 'top'
}))

const StyledTypographyOne = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: ' .875rem'
}))
const StyledTypographyTwoAndThree = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: '.875rem',
  lineHeight: ' 1.25rem',
  color: '#909CB5'
}))
const ImageContainer = styled('div')(() => ({
  width: '2.625rem',
  height: '2.625rem',
  borderRadius: '100%',
  backgroundColor: '#D9D9D9',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '1rem'
}))
const NameOfUser = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: '.875rem',
  lineHeight: '1.0625rem',
  color: '#292929'
}))
const ContainerUserInfo = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}))
const EmailOfUser = styled(Typography)(() => ({
  marginTop: '.25rem',
  fontWeight: 500,
  fontSize: '.9375rem',
  lineHeight: '1.0625rem',
  color: '#91969E'
}))
const ContainerImageAndTitle = styled('div')(() => ({
  display: 'flex',
  width: '20px'
}))
const ContainerIconButtons = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center'
}))
const StyledIconButton = styled(IconButtons)(() => ({
  marginBottom: '.875rem'
}))
const Label = styled('label')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '.875rem',
  lineHeight: ' 120%',
  color: '#292929'
}))
const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: 600,
  fontSize: ' 1rem',
  lineHeight: '1.1875rem',
  color: theme.customPalette.primary.main,
  backgroundColor: '#ffff',
  padding: '.75rem 4.5rem',
  marginTop: '.875rem',
  float: 'right',
  border: ` .0625rem solid ${theme.customPalette.primary.main}`,
  ':hover': {
    backgroundColor: theme.customPalette.primary.main,
    color: '#FFFFFF'
  }
}))
const StyledProductImage = styled('img')(() => ({
  width: '4.375rem',
  height: '5.125rem'
}))
const StyledUserProductImage = styled('img')(() => ({
  width: '100%',
  height: '100%',
  borderRadius: '100%'
}))
const ContainerButton = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between'
}))
const StyledTextField = styled(TextField)(() => ({
  width: '100%',
  marginTop: '.625rem'
}))
const RowTable = ({ item, index, page }: PropsType) => {
  const { snackbarHanler, ToastContainer } = useSnackbar({
    autoClose: 2500,
    position: 'bottom-right'
  })
  const dispatch = useDispatch<AppDispatch>()
  const { error } = useSelector((state: RootState) => state.reviews)
  const [inputValue, setInputValue] = useState('')
  const [openArrowIcon, setOpenArrowIcon] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  useEffect(() => {
    setInputValue(item.answer)
  }, [item.answer])
  const errorHandler = () => {
    if (error) {
      return true
    } else {
      return false
    }
  }
  const reviewsSnackbarHandler = (message: string, type: 'error' | 'success' | undefined) => {
    snackbarHanler({ message, linkText: '', type })
  }
  const sendHandleButtonClick = () => {
    const reviewData = {
      page: page,
      id: item.id,
      answer: inputValue,
      snackbar: reviewsSnackbarHandler
    }
    dispatch(postReviews(reviewData))
    setOpenArrowIcon(false)
  }
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const trimmedValue = event.target.value
    setInputValue(trimmedValue)
  }
  const removeItemById = () => {
    const reviewData = {
      id: item.id,
      page: page,
      snackbar: reviewsSnackbarHandler
    }
    dispatch(deleteReviewById(reviewData))
    setOpenModal(false)
  }
  const updateHandleButtonClick = () => {
    const updateData = {
      id: item.id,
      page: page,
      answer: inputValue.trim(),
      snackbar: reviewsSnackbarHandler
    }

    dispatch(updateReviews(updateData))
    if (inputValue.length >= 2) {
      setOpenArrowIcon(false)
    } else {
      setOpenArrowIcon(true)
    }
  }
  const cancelHandleButtonClick = () => {
    setOpenArrowIcon(false)
  }
  const closeModalHandler = () => {
    setOpenModal(false)
  }
  const openModalHandler = () => {
    setOpenModal(true)
  }
  return (
    <React.Fragment>
      {ToastContainer}
      <TableRow>
        <StyledTableBodyCell style={{ width: '1.875rem' }}>{index + 1}</StyledTableBodyCell>
        <StyledTableBodyCell style={{ width: '6.25rem' }}>
          <StyledProductImage src={item.productImg} />
        </StyledTableBodyCell>
        <StyledTableBodyCell style={{ width: '10.625rem', paddingRight: '.9375rem' }}>
          <StyledTypographyOne>{item.productName}</StyledTypographyOne>
          <StyledTypographyTwoAndThree>Модель</StyledTypographyTwoAndThree>
          <StyledTypographyTwoAndThree>{item.productItemNumber}</StyledTypographyTwoAndThree>
        </StyledTableBodyCell>
        <StyledTableBodyCell style={{ width: '22.5rem' }}>
          <CutTextReviews
            open={openArrowIcon}
            images={item.images}
            date={item.date}
            text={item.commentary}
            answer={item.answer}
          />
        </StyledTableBodyCell>
        <StyledTableBodyCell sx={{ width: '31.25rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: '1.875rem'
            }}
          >
            <Rating
              name="read-only"
              value={item.grade}
              readOnly
              size="small"
              style={{ width: '40%' }}
            />
            <ContainerUserInfo style={{ width: '60%' }}>
              <ContainerImageAndTitle>
                <ImageContainer>
                  <StyledUserProductImage src={item.userImg} alt="images" />
                </ImageContainer>
                <div>
                  <NameOfUser>{item.userName}</NameOfUser>
                  <EmailOfUser>{item.userEmail}</EmailOfUser>
                </div>
              </ContainerImageAndTitle>
              <ContainerIconButtons>
                <StyledIconButton icon={<DeleteIcon />} onClick={openModalHandler} />
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpenArrowIcon(!openArrowIcon)}
                  sx={{ marginBottom: '.875rem' }}
                >
                  {openArrowIcon ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              </ContainerIconButtons>
            </ContainerUserInfo>
          </div>
          <Collapse in={openArrowIcon} timeout="auto" unmountOnExit>
            <form>
              <Label>Ответить на комментарий</Label>
              <StyledTextField
                multiline
                rows={4}
                value={inputValue}
                onChange={handleChange}
                label={error}
                error={errorHandler()}
              />
              {item.answer !== null || item.answer !== null ? (
                <ContainerButton>
                  <StyledButton onClick={cancelHandleButtonClick}>Отменить</StyledButton>
                  {item.answer !== inputValue ? (
                    <StyledButton onClick={updateHandleButtonClick}>Сохранить</StyledButton>
                  ) : null}
                </ContainerButton>
              ) : (
                <StyledButton onClick={sendHandleButtonClick}>Ответить</StyledButton>
              )}
            </form>
          </Collapse>
        </StyledTableBodyCell>
        <Modal open={openModal} onClose={closeModalHandler}>
          <ModalContainer>
            <p>Вы уверены, что хотите удалить?</p>
            <ModalButtonContainers>
              <CancelModalButton onClick={closeModalHandler}>Отменить</CancelModalButton>
              <DeleteModalButton onClick={removeItemById}>Удалить</DeleteModalButton>
            </ModalButtonContainers>
          </ModalContainer>
        </Modal>
      </TableRow>
    </React.Fragment>
  )
}
export default RowTable
