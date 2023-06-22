import { ChangeEvent } from 'react'
import { Input as MuiInput } from '@mui/material'
import { useAppDispatch } from '../../../../hooks/redux/redux'
import { addProductActions } from '../../../../redux/store/addProduct/AddProduct'

type TablePriceInputProps = {
  transferredValue?: number
  id?: string
}

type TableQuantityInputProps = {
  quantity?: number
  id?: string
}

export const TablePriceInput = ({ transferredValue, id }: TablePriceInputProps) => {
  const dispatch = useAppDispatch()

  const changePriceHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addProductActions.addPriceToSubProduct({ subProductId: id, price: +e.target.value }))
  }
  return (
    <MuiInput
      required
      inputProps={{
        min: 0,
        max: 1000000
      }}
      disableUnderline
      value={transferredValue}
      onChange={changePriceHandler}
      type="number"
      style={{
        paddingLeft: '1rem',
        width: '100%',
        height: '4rem',
        border: 'none',
        backgroundColor: 'rgba(203, 17, 171, 0.1)'
      }}
    />
  )
}

export const TableQuantityInput = ({ quantity, id }: TableQuantityInputProps) => {
  const dispatch = useAppDispatch()
  const changeQuantityHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      addProductActions.addQuantityToSubProduct({ subProductId: id, quantity: +e.target.value })
    )
  }

  return (
    <MuiInput
      required
      inputProps={{
        min: 1,
        max: 1000
      }}
      disableUnderline
      value={quantity}
      onChange={changeQuantityHandler}
      type="number"
      style={{
        paddingLeft: '1rem',
        width: '100%',
        height: '4rem',
        border: 'none',
        backgroundColor: 'rgba(203, 17, 171, 0.1)'
      }}
    />
  )
}
