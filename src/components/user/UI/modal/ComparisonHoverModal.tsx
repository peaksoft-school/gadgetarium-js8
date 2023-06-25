import React from 'react'
import { styled } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { CompareProducts } from '../../../../api/compare-products/compareProductsService'
import Button from '../../../UI/buttons/Button'
const StyledMuiButton = styled(Button)(() => ({
  color: '#ffff'
}))
const StyledContainer = styled('div')(() => ({
  width: '30.25rem',
  padding: '1.875rem',
  background: '#FFFFFF',
  boxShadow: '0rem 1.25rem 3.75rem rgba(133, 143, 164, 0.1)',
  maxHeight: '18.75rem',
  borderRadius: ' .3125rem',
  overflow: 'scroll'
}))
const StyledContent = styled('div')(() => ({
  display: 'flex',
  borderBottom: '.0625rem solid rgba(133, 143, 164, 0.15)',
  padding: '1.25rem .9375rem ',
  gap: '.9375rem'
}))
const StyledTitele = styled('p')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '1.2rem',
  lineHeight: '150%',
  paddingTop: '30px',
  color: '#292929',
  display: 'flex',
  width: '255px',
  flexDirection: 'column'
}))
const StyledPrice = styled('h2')(() => ({
  width: '6.25rem',
  fontFamily: 'Inter',
  paddingTop: '1.875rem',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '1.2rem',
  lineHeight: '1.0625rem',

  color: '#384255'
}))
type Props = {
  children: string
  path: string
  basketItems: CompareProducts[]
}
const StyledBtnContainer = styled('div')(() => ({
  marginTop: '.75rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))
const StyledNavLink = styled(NavLink)(() => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  textDecoration: 'none',
  gap: '1.25rem',
  alignItems: 'center'
}))
const StyledImage = styled('img')(() => ({
  width: '59.38px',
  height: '67.783px'
}))
const ComparisonHoverModal = ({ children, path, basketItems }: Props) => {
  return (
    <StyledContainer>
      {basketItems.map((items) => (
        <StyledContent>
          <StyledImage src={items.img} alt="" />
          <StyledTitele>{items.name}</StyledTitele>
          <StyledPrice>{items.price}c</StyledPrice>
        </StyledContent>
      ))}
      <StyledBtnContainer>
        <StyledNavLink to={path}>
          <StyledMuiButton>{children}</StyledMuiButton>
        </StyledNavLink>
      </StyledBtnContainer>
    </StyledContainer>
  )
}

export default ComparisonHoverModal
