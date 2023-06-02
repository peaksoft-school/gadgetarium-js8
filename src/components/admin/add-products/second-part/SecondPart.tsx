import React, { useState, ChangeEvent } from 'react'
import { Button, Input as MuiInput, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../../redux/store'
import { Column } from '../../../../utils/constants/tableColumns'
import AddProductsTable from './AddProductsTable'
import Input from '../../../UI/inputs/Input'
import { ProductType } from '../../UI/addProduct/AddTabComponent'
import { addProductActions } from '../../../../redux/store/addProduct/AddProduct'

const StyledButton = styled(Button)(() => ({
  padding: '12px 26px',
  gap: '10px',
  width: '186px',
  height: '47px',
  background: '#CB11AB',
  borderRadius: '4px',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '19px',
  textTransform: 'none',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#991984'
  }
}))

const StyledInput = styled(Input)(() => ({
  padding: '8px 12px',
  gap: '64px',
  width: '140px',
  height: '47px',
  background: '#FFFFFF',
  border: '1px solid rgba(144, 156, 181, 0.5)',
  borderRadius: '6px'
}))

const Title = styled('p')(() => ({
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '17px',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '0.2px',
  color: '#000000'
}))

const PriceContainer = styled('div')(() => ({
  width: '21.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '0.5rem'
}))

const TableContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end'
}))

const StyledSecondButton = styled(Button)(() => ({
  padding: '10px 24px',
  gap: '10px',
  width: '99px',
  height: '43px',
  background: '#CB11AB',
  borderRadius: '4px',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '19px',
  textTransform: 'none',
  color: '#FFFFFF',
  marginTop: '28px',
  '&:hover': {
    backgroundColor: '#991984'
  }
}))

type Props = {
  handleNext: () => void
}

const SecondPart = ({ handleNext }: Props) => {
  const [transferredValue, setTransferredValue] = useState('')
  const [quantity, setQuantity] = useState('')
  const products = useSelector((state: RootState) => state.addNewProduct.products)

  const dispatch = useDispatch<AppDispatch>()

  const priceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTransferredValue(e.target.value)
  }

  const quantityChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.value)
  }

  const setPriceToTableChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTransferredValue(e.target.value)
  }

  const columns: Column<ProductType>[] = [
    {
      header: 'Бренд',
      key: 'brand',
      render: (product: ProductType) => (
        <>
          <p style={{ paddingLeft: '1rem' }}>{product.brandId}</p>
        </>
      )
    },
    {
      header: 'Цвет',
      key: 'color',
      render: (product: ProductType) => (
        <>
          <p style={{ paddingLeft: '1rem' }}>{product.subProducts.color}</p>
        </>
      )
    },
    {
      header: 'Объем памяти',
      key: 'memory',
      render: (product: ProductType) => (
        <>
          <p style={{ paddingLeft: '1.5rem' }}>{product.subProducts.memorySize.label}</p>
        </>
      )
    },
    {
      header: 'Оперативная память',
      key: 'ram',
      render: (product: ProductType) => (
        <>
          <p style={{ paddingLeft: '1.5rem' }}>{product.subProducts.ram.label}</p>
        </>
      )
    },
    {
      header: 'Кол-во SIM-карт',
      key: 'sim-cards',
      render: (product: ProductType) => (
        <>
          <p style={{ paddingLeft: '1.5rem' }}>{product.subProducts.simCard.label}</p>
        </>
      )
    },
    {
      header: 'Дата выпуска',
      key: 'release',
      render: (product: ProductType) => (
        <>
          <p style={{ paddingLeft: '1rem' }}>{product.dateOfIssue}</p>
        </>
      )
    },
    {
      header: 'Кол-во товара',
      key: 'quantity',
      render: () => (
        <MuiInput
          value={quantity}
          onChange={quantityChangeHandler}
          disableUnderline
          type="number"
          style={{
            width: '100%',
            paddingLeft: '1rem',
            height: '4rem',
            borderRight: '1px solid #CDCDCD',
            backgroundColor: 'rgba(203, 17, 171, 0.1)'
          }}
        />
      )
    },
    {
      header: 'Цена',
      key: 'price',
      render: () => (
        <MuiInput
          disableUnderline
          value={transferredValue}
          onChange={setPriceToTableChangeHandler}
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
  ]
  return (
    <main>
      <div>
        <Title>Общая цена</Title>
        <PriceContainer>
          <StyledInput
            value={transferredValue}
            onChange={priceChangeHandler}
            type="number"
            placeholder="Цена"
          />
          <StyledButton>Установить цену</StyledButton>
        </PriceContainer>
      </div>
      <TableContainer>
        <AddProductsTable rows={products} columns={columns} getUniqueId={(val: any) => val.id} />
        <StyledSecondButton onClick={handleNext}>Далее</StyledSecondButton>
      </TableContainer>
    </main>
  )
}

export default SecondPart
