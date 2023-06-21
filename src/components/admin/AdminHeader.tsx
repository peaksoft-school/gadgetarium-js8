import { useState } from 'react'
import { styled, Button, Divider, Tooltip, TooltipProps, tooltipClasses } from '@mui/material'
import { ReactComponent as LogoIcon } from '../../assets/icons/header-icons/logo.svg'
import { ReactComponent as VectorIcon } from '../../assets/icons/admin-header/vector.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import IconButtons from '../UI/buttons/IconButtons'
import Modal from '../UI/modals/Modal'
import CreateMailingList from './UI/mailingList/MailingList'
import { STORAGE_KEYS } from '../../utils/constants/storage'

const MainContainer = styled('div')(() => ({
  position: 'fixed',
  zIndex: '19',
  top: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundColor: '#1A1A25',
  color: '#fff',
  height: '4.71875rem',
  width: '100%',
  borderBottom: '1px solid #858FA426'
}))

const StyledList = styled('ul')(() => ({
  listStyle: 'none',
  display: 'flex',
  marginLeft: '3rem',
  alignItems: 'center',
  '.active': {
    backgroundColor: '#ffffff24',
    padding: '0.75rem 0.857rem',
    borderRadius: '4px'
  }
}))

const StyledNavLink = styled(NavLink)(() => ({
  textDecoration: 'none',
  color: '#fff',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '140%',
  textAlign: 'center',
  marginRight: '1.5rem',
  padding: '0.75rem 0.857rem',
  '&:hover': {
    backgroundColor: '#e4e4e423',
    padding: '0.75rem 0.857rem',
    borderRadius: '4px'
  }
}))

const ButtonsContainer = styled('div')(() => ({
  display: 'flex',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '1rem',
  lineHeight: '1.1875rem',
  marginRight: '1.5rem'
}))

const StyledDivider = styled(Divider)(() => ({
  height: '2.5rem',
  background: '#CDCDCD',
  marginRight: '1.5rem'
}))

const StyledButton = styled(Button)(() => ({
  backgroundColor: '#CB11AB',
  color: '#fff',
  opacity: '1000',
  padding: '0.75rem 1.25rem 0.75rem 1.25rem',
  borderRadius: '46px',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '1rem',
  lineHeight: '1.1875rem',
  textTransform: 'none',

  '&:hover': {
    backgroundColor: '#991984'
  }
}))

const Profile = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '#fff',
  gap: '0.75rem',
  cursor: 'pointer',
  span: {
    marginTop: '0.19rem',
    marginLeft: '-0.5rem'
  }
}))

const ProfileCircle = styled('div')(() => ({
  borderRadius: '50%',
  backgroundColor: '#fff',
  width: '44px',
  height: '44px',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '1.625rem',
  lineHeight: '1.9375rem',
  color: '#CB11AB',
  textAlign: 'center',
  padding: '0.4375rem',
  cursor: 'pointer'
}))

const ExitButton = styled(Button)(() => ({
  backgroundColor: '#fff',
  color: '#292929',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '19px',
  textTransform: 'none'
}))

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

const ExitModalButton = styled(Button)(() => ({
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
  marginTop: '1rem',
  display: 'flex',
  justifyContent: 'space-around'
}))

const ActionContainer = styled('div')(() => ({
  display: 'flex'
}))

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11
  }
}))

const AdminHeader = () => {
  const [openModal, setOpenModal] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const [openMailing, setOpenMailing] = useState(false)
  const handleOpen = () => setOpenMailing(true)
  const handleClose = () => setOpenMailing(false)

  const openModalHandler = () => {
    setOpenModal(true)
  }
  const closeModalHandler = () => {
    setOpenModal(false)
  }

  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    setOpen(true)
  }

  const logOutHandler = () => {
    localStorage.removeItem(STORAGE_KEYS.AUTH)
    navigate('/login', { replace: true })
  }
  return (
    <header>
      <MainContainer>
        <div>
          <Link to="/admin/products">
            <IconButtons icon={<LogoIcon />} />
          </Link>
        </div>
        <div>
          <StyledList>
            <StyledNavLink to="products" className={({ isActive }) => (isActive ? 'active' : '')}>
              Товары
            </StyledNavLink>
            <StyledNavLink to="orders">Заказы</StyledNavLink>
            <StyledNavLink to="reviews">Отзывы и рейтинг</StyledNavLink>
          </StyledList>
        </div>
        <ActionContainer>
          <ButtonsContainer>
            <StyledButton onClick={handleOpen}>Создать рассылку</StyledButton>
          </ButtonsContainer>
          <StyledDivider orientation="vertical" />
          <StyledTooltip
            PopperProps={{
              disablePortal: true
            }}
            onClose={handleTooltipClose}
            open={open}
            title={<ExitButton onClick={openModalHandler}>Выйти</ExitButton>}
          >
            <Profile>
              <ProfileCircle>G</ProfileCircle>
              <p onClick={handleTooltipOpen}>Администратор</p>
              <span>
                <IconButtons onClick={handleTooltipOpen} icon={<VectorIcon />} />
              </span>
            </Profile>
          </StyledTooltip>
        </ActionContainer>
      </MainContainer>
      <Modal open={openModal} onClose={closeModalHandler}>
        <ModalContainer>
          <p>Вы уверены, что хотите выйти?</p>
          <ModalButtonContainers>
            <CancelModalButton onClick={closeModalHandler}>Отменить</CancelModalButton>
            <ExitModalButton onClick={logOutHandler}>Выйти</ExitModalButton>
          </ModalButtonContainers>
        </ModalContainer>
      </Modal>
      <CreateMailingList modal={openMailing} modalHandler={handleClose} />
    </header>
  )
}

export default AdminHeader
