import React from 'react'
import CartProduct from '../../../components/user/historyOrders/CartProduct'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { styled } from '@mui/material'
import EmptyFavourites from '../../../components/user/favourites/EmptyFavourites'
const StyledCartProduct = styled('div')(() => ({
  width: '500px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  gap: '30px'
}))
const Favorites = () => {
  const { items } = useSelector((state: RootState) => state.favourites)
  console.log(items)

  return (
    <StyledCartProduct>
      {items?.map((item) => (
        <CartProduct
          img={item.image}
          title={item.productInfo}
          rating={item.rating}
          price={item.price}
          quantityOfPeople={item.quantityBasket}
        />
      ))}
    </StyledCartProduct>
  )
}

export default Favorites
