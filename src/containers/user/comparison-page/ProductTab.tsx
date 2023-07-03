import React, { useState } from 'react'
import { Button, styled, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { ReactComponent as RemoveIcon } from '../../../assets/icons/compare-icons/removeIcon.svg'
import IconButtons from '../../../components/UI/buttons/IconButtons'
import { useSnackbar } from '../../../hooks/snackbar/useSnackbar'
import { deleteCompareProductRequest } from '../../../api/compare-products/compareProductsService'
import Modal from '../../../components/UI/modals/Modal'
import { isAxiosError } from 'axios'

const StyledTab = styled(Tab)(() => ({
  backgroundColor: '#E0E2E7',
  padding: '4px 16px 4px 16px',
  borderRadius: '0.25rem',
  color: '#384255',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '0.875rem',
  lineHeight: '1.1875rem',
  textTransform: 'none',
  marginRight: '1rem'
}))

const StyledTabPanel = styled(TabPanel)(() => ({
  padding: '1.875rem 0rem 0rem 0rem'
}))

const TabContainer = styled('div')(() => ({
  width: '100%'
}))
const RemoveContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center'
}))

const AdditionalActionsContainer = styled('div')(() => ({
  width: '425px',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '0.6rem'
}))

const StyledText = styled('p')(() => ({
  color: '#384255',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '0.875rem',
  lineHeight: '140%',
  cursor: 'pointer'
}))

const ModalContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '1rem',
  paddingLeft: '30px',
  paddingRight: '30px',
  paddingBottom: '1rem',
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
    backgroundColor: '#991984'
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
  textTransform: 'none'
}))

const ModalButtonContainers = styled('div')(() => ({
  marginTop: '2rem',
  display: 'flex',
  justifyContent: 'space-around'
}))

interface Product {
  id: number
  label: string
  value: string
  Component: React.ReactNode
}

interface ProductsTabProps {
  tabs: Product[]
  defaultValue: string
}

const ProductTab: React.FC<ProductsTabProps> = ({ tabs, defaultValue }) => {
  const [value, setValue] = React.useState(defaultValue)
  const [openModal, setOpenModal] = useState(false)

  const { snackbarHanler, ToastContainer } = useSnackbar({
    autoClose: 2500,
    position: 'bottom-right'
  })

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const openModalHandler = () => {
    setOpenModal(true)
  }
  const closeModalHandler = () => {
    setOpenModal(false)
  }

  const deleteHandler = async () => {
    try {
      await deleteCompareProductRequest()
      snackbarHanler({
        message: 'Товары Успешно удалены!',
        linkText: '',
        type: 'success'
      })
      setOpenModal(false)
    } catch (e) {
      if (isAxiosError(e)) {
        setOpenModal(false)
        return snackbarHanler({
          message: e.response?.data.message,
          linkText: '',
          type: 'error'
        })
      }
      return snackbarHanler({
        message: 'Что-то пошло не так',
        linkText: '',
        type: 'error'
      })
    }
  }

  return (
    <>
      {ToastContainer}
      <TabContainer>
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            TabIndicatorProps={{ style: { backgroundColor: 'transparent' } }}
            sx={{
              div: {
                '& button.Mui-selected': {
                  backgroundColor: '#384255',
                  color: '#fff'
                }
              }
            }}
            aria-label="lab API tabs example"
          >
            {tabs?.map((el) => (
              <StyledTab key={el.id} label={el.label} value={el.value} />
            ))}
          </TabList>
          <AdditionalActionsContainer>
            <RemoveContainer>
              <IconButtons onClick={openModalHandler} icon={<RemoveIcon />} />
              <StyledText onClick={openModalHandler}>Очистить список</StyledText>
            </RemoveContainer>
          </AdditionalActionsContainer>
          {tabs?.map((el) => {
            return (
              <StyledTabPanel key={el.id} value={el.value}>
                {el.Component}
              </StyledTabPanel>
            )
          })}
        </TabContext>
      </TabContainer>
      <>
        <Modal open={openModal} onClose={closeModalHandler}>
          <ModalContainer>
            <p>Вы уверены, что хотите удалить товары из сравнения?</p>
            <ModalButtonContainers>
              <CancelModalButton onClick={closeModalHandler}>Нет</CancelModalButton>
              <DeleteModalButton onClick={deleteHandler}>Да</DeleteModalButton>
            </ModalButtonContainers>
          </ModalContainer>
        </Modal>
      </>
    </>
  )
}

export default ProductTab
