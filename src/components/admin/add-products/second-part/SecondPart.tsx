/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, ChangeEvent } from 'react'
import { Button, TableCell, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../../redux/store'
import { Column } from '../../../../utils/constants/tableColumns'
import AddProductsTable from './AddProductsTable'
import Input from '../../../UI/inputs/Input'
import { ProductType } from '../../UI/addProduct/AddTabComponent'
import { TablePriceInput, TableQuantityInput } from '../../UI/table-inputs/TableInputs'
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

const StyledTableCell = styled(TableCell)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.01em;
  color: #292929;
  border-top: 1px solid rgba(224, 224, 224, 1);
  &:first-of-type {
    border-left: 1px solid rgba(224, 224, 224, 1);
  }
  &:last-of-type {
    border-right: 1px solid rgba(224, 224, 224, 1);
  }
`

type Props = {
  handleNext: () => void
}

type SubProduct = {
  brandId: number
  colour: string
  characteristics: object
  images: File[]
  quantity?: number
  price?: number
  id: string
}

const SecondPart = ({ handleNext }: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const [transferredValue, setTransferredValue] = useState<number>()

  const products = useSelector((state: RootState) => state.addNewProduct.products)

  const priceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTransferredValue(+e.target.value)
  }

  const handleTransferClick = () => {
    dispatch(addProductActions.addPriceToAllProducts(transferredValue))
  }

  const tableCharacteristicHeaders = Object.keys(products[0].subProducts[0].characteristics)

  const renderCharacteristics = (charsObj: any): React.ReactNode => {
    if (!tableCharacteristicHeaders.length) {
      return null
    }

    return tableCharacteristicHeaders.map((key: any) => {
      return <StyledTableCell sx={{ paddingLeft: '3rem' }}>{charsObj[key]}</StyledTableCell>
    })
  }

  const tableData = products[0]?.subProducts
    ? products[0].subProducts.map((sub: any) => {
        return {
          ...sub,
          brandId: products[0].brandId,
          price: sub.price,
          quantity: sub.quantity
        }
      })
    : []

  const columns: Column<SubProduct>[] = [
    {
      header: 'Бренд',
      key: 'brand',
      render: (product: SubProduct) => (
        <>
          <p style={{ paddingLeft: '1rem' }}>{product.brandId}</p>
        </>
      )
    },
    {
      header: 'Цвет',
      key: 'color',
      render: (product: SubProduct) => (
        <>
          <p style={{ paddingLeft: '1rem' }}>{product.colour}</p>
        </>
      )
    },
    {
      header: tableCharacteristicHeaders,
      key: 'characteristics',
      render: (product: SubProduct) => <>{renderCharacteristics(product.characteristics)}</>
    },
    {
      header: 'Кол-во товара',
      key: 'quantity',
      render: (product: SubProduct) => (
        <TableQuantityInput quantity={product.quantity} id={product.id} />
      )
    },
    {
      header: 'Цена',
      key: 'price',
      render: (product: SubProduct) => (
        <TablePriceInput transferredValue={product.price} id={product.id} />
      )
    }
  ]
  return (
    <form onSubmit={handleNext}>
      <div>
        <Title>Общая цена</Title>
        <PriceContainer>
          <StyledInput
            value={transferredValue}
            onChange={priceChangeHandler}
            type="number"
            placeholder="Цена"
          />
          <StyledButton onClick={handleTransferClick}>Установить цену</StyledButton>
        </PriceContainer>
      </div>
      <TableContainer>
        <AddProductsTable rows={tableData} columns={columns} getUniqueId={(val: any) => val.id} />
        <StyledSecondButton type="submit">Далее</StyledSecondButton>
      </TableContainer>
    </form>
  )
}

export default SecondPart
