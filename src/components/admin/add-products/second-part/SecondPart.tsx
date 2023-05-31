import React, { useEffect, useState, ChangeEvent } from 'react'
import { Button, Input as MuiInput, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../../redux/store'
import { getAllProducts } from '../../../../redux/store/products/products.thunk'
import { Column } from '../../../../utils/constants/tableColumns'
import AddProductsTable from './AddProductsTable'
import Input from '../../../UI/inputs/Input'

const MainContainer = styled('div')(() => ({
  margin: '7rem 100px'
}))

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

interface ProductsTypes {
  createdAt: string
  image: string
  itemNumber: number
  name: string
  percentOfDiscount: number
  price: number
  quantity: number
  subProductId: number
  totalPrice: number
}

const SecondPart = () => {
  const [price, setPrice] = useState(0)
  const [queryParams, setQueryParams] = useState({
    status: 'Все товары',
    page: 1,
    keyWord: null,
    pageSize: 7,
    sortBy: null,
    from: null,
    before: null
  })
  const products = useSelector((state: RootState) => state.products.items)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(getAllProducts(queryParams))
  }, [queryParams])

  const priceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(+e.target.value)
  }

  const setPriceToTableHandler = () => {}

  const columns: Column<ProductsTypes>[] = [
    {
      header: 'Бренд',
      key: 'brand',
      render: () => <p style={{ paddingLeft: '1rem' }}>154665884</p>
    },
    {
      header: 'Цвет',
      key: 'color',
      render: () => <p style={{ paddingLeft: '1rem' }}>Черный</p>
    },
    {
      header: 'Объем памяти',
      key: 'memory',
      render: () => <p style={{ paddingLeft: '1rem' }}>128 ГБ</p>
    },
    {
      header: 'Оперативная память',
      key: 'ram',
      render: () => <p style={{ paddingLeft: '1rem' }}>RAM 8ГБ</p>
    },
    {
      header: 'Кол-во SIM-карт',
      key: 'sim-cards',
      render: () => <p style={{ paddingLeft: '1rem' }}>1</p>
    },
    {
      header: 'Дата выпуска',
      key: 'release',
      render: (product: ProductsTypes) => <p style={{ paddingLeft: '1rem' }}>12.12.2020</p>
    },
    {
      header: 'Кол-во товара',
      key: 'quantity',
      render: () => (
        <MuiInput
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
          // value={}
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
    <MainContainer>
      <div>
        <Title>Общая цена</Title>
        <PriceContainer>
          <StyledInput
            value={price}
            onChange={priceChangeHandler}
            type="number"
            placeholder="Цена"
          />
          <StyledButton>Установить цену</StyledButton>
        </PriceContainer>
      </div>
      <TableContainer>
        <AddProductsTable
          rows={products.elements}
          columns={columns}
          getUniqueId={(val: { subProductId: any }) => val.subProductId}
        />
        <StyledSecondButton>Далее</StyledSecondButton>
      </TableContainer>
    </MainContainer>
  )
}

export default SecondPart
