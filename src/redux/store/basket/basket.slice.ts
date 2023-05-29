import { createSlice } from '@reduxjs/toolkit'

type DataType = {
  subProductId: number
  image: string
  quantity: number
  productInfo: string
  rating: number
  price: number
  discount: number
}
type ItemType = DataType[]
type InitType = {
  items: ItemType
}
const initialState: InitType = {
  items: [
    {
      subProductId: 0,
      image: '',
      quantity: 0,
      productInfo: '',
      rating: 0,
      price: 0,
      discount: 0
    }
  ]
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {}
})

export const basketActions = basketSlice.actions
