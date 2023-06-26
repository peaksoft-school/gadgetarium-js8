import { styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { RootState } from '../../../redux/store'
import { PATHS } from '../../../utils/constants/router/routerConsts'
import { STORAGE_KEYS } from '../../../utils/constants/storage'

const StyledMenuItem = styled('ul')(() => ({
  listStyle: 'none',
  width: '192px',
  padding: '10px 20px',
  background: '#FFFFFF',
  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
  borderRadius: '4px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '19px',
  color: '#292929'
}))

const StyledLink = styled(Link)(() => ({
  textDecoration: 'none',
  margin: '3px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '19px',
  color: '#292929',
  '&:hover': {
    color: '#CB11AB'
  }
}))

const MenuItem = () => {
  const { isAuthorized } = useSelector((state: RootState) => state.auth)
  const navigate = useNavigate()
  const logOutHandler = () => {
    localStorage.removeItem(STORAGE_KEYS.AUTH)
    navigate('/login', { replace: true })
  }
  return (
    <StyledMenuItem>
      {isAuthorized ? (
        <>
          <StyledLink to={'/'}>
            <li>История заказов</li>
          </StyledLink>
          <StyledLink to={'/'}>
            <li>Избранное</li>
          </StyledLink>
          <StyledLink to={'/'}>
            <li>Профиль</li>
          </StyledLink>
          <StyledLink to={PATHS.APP.logIn}>
            <div onClick={logOutHandler}>Выйти</div>
          </StyledLink>
        </>
      ) : (
        <>
          {' '}
          <StyledLink to={PATHS.APP.logIn}>
            <li>Войти</li>
          </StyledLink>
          <StyledLink to={PATHS.APP.signUp}>
            <li>Регистрация</li>
          </StyledLink>
        </>
      )}
    </StyledMenuItem>
  )
}

export default MenuItem
