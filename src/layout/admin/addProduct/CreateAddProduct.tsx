import React from 'react'
import { Container, Divider, styled } from '@mui/material'
import { MyComponent } from '../../../components/admin/UI/addProduct/CreateAddTabsComponent'
import { useSearchParams } from 'react-router-dom'

const StyledNav = styled('nav')(() => ({
  display: 'flex',
  marginTop: '60px'
}))

const StyledContainer = styled(Container)(() => ({
  marginTop: '140px',
  marginBottom: '150px'
}))

const StyledNavLink = styled('a')(() => ({
  textDecoration: 'none',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '0.875rem',
  lineHeight: '140%',
  color: '#292929',
  '&:not(:last-of-type)': {
    color: '#91969E'
  },
  '&:not(:last-of-type)::after': {
    margin: '0.25rem',
    content: "'»'",
    color: '#91969E'
  }
}))

const Title = styled('h3')(() => ({
  fontFamily: 'Ubuntu, sans-serif',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '1.875rem',
  lineHeight: '110%',
  marginTop: '2.0625rem'
}))

const StyledDivider = styled(Divider)(() => ({
  marginTop: '1.25rem',
  background: '#CDCDCD'
}))

const StyledDiv = styled('div')(() => ({
  width: '100%'
}))

const OBJECT = {
  add: 'Добавление товара',
  price: 'Установка цены и количества',
  description: 'Описание и обзор'
}

const AddProductsPage = () => {
  const [searchParams] = useSearchParams()

  const titleKey: string = searchParams.get('new-product') || 'add'

  const renderedTitle = OBJECT[titleKey as keyof typeof OBJECT]

  return (
    <>
      <StyledContainer>
        <StyledNav>
          <StyledNavLink>Товары </StyledNavLink>
          <StyledNavLink>{renderedTitle}</StyledNavLink>
        </StyledNav>

        <Title>{renderedTitle}</Title>
        <StyledDivider orientation="horizontal" />
        <StyledDiv>
          <MyComponent />
        </StyledDiv>
      </StyledContainer>
    </>
  )
}

export default AddProductsPage
