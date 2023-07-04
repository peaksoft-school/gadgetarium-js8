import { styled } from '@mui/material'
import React from 'react'
import ProductRating from '../card/RatingProduct'
type Props = {
  img: string
  title: string
  rating: number
  price: number
  quantityOfPeople: number
}
const StyledContainer = styled('div')(() => ({
  width: '100%',
  borderRadius: '4px',
  boxSizing: 'border-box',
  background: '#fff',
  padding: '20px 24px 26px 20px',
  '&. hover': {
    background: '#605b5b',
    boxShadow: '10px 5px 5px #605b5b'
  }
}))
const StyledImg = styled('img')(() => ({
  width: '210px',
  height: '210px',
  flexShrink: '0',
  padding: '5px'
}))
const StyledTitle = styled('p')(() => ({
  margin: '20px 0 8px',
  color: 'var(--black, #292929)',
  fontSize: '14px',
  fontFamily: 'Inter',
  fontWeight: '500',
  lineHeight: '140%'
}))
const StyledPrice = styled('h1')(() => ({
  marginTop: '16px',
  color: 'var(--black, #292929)',
  fontSize: '18px',
  fontFamily: 'Inter',
  fontWeight: '700',
  lineHeight: '135.938%'
}))
const CartProduct = ({ img, title, rating, price, quantityOfPeople }: Props) => {
  return (
    <StyledContainer>
      <StyledImg src={img} alt="" />
      <StyledTitle>{title}</StyledTitle>
      <ProductRating rating={rating} quantityOfPeople={quantityOfPeople} />
      <StyledPrice>{price.toFixed(0)} c</StyledPrice>
    </StyledContainer>
  )
}

export default CartProduct
