/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { Product } from '../../../api/product/productService'
import { Column } from '../../../utils/constants/tableColumns'
import { Divider, styled } from '@mui/material'
import ProductsDatePicker from '../UI/date-picker/DatePicker'
import AppTable from '../UI/table/Table'
import Sorting from '../UI/sorting/Sorting'
import { useAppDispatch } from '../../../hooks/redux/redux'
import { getAllProducts } from '../../../redux/store/products/products.thunk'
import { format } from 'date-fns'

const StyledDivider = styled(Divider)(() => ({
  width: '100%',
  color: '#CDCDCD'
}))

const DatePickerContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '22rem'
}))

const FoundProducts = styled('p')(() => ({
  color: '#384255',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '0.875rem',
  lineHeight: '130%'
}))

const TableContainer = styled('div')(() => ({
  marginTop: '5rem'
}))

const SearchSortContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between'
}))

type Props = {
  queryParams: {
    keyWord: string | null
    status: string
    page: number
    pageSize: number
    sortBy: null
    from: null
    before: null
  }
  setQueryParams: React.Dispatch<
    React.SetStateAction<{
      keyWord: null
      status: string
      page: number
      pageSize: number
      sortBy: null
      from: null
      before: null
    }>
  >
  onChangeHandler: (keyWord: string, value: string | number | boolean) => void
  handlerChangePage: (newPage: number) => void
  onFirstChange: (newValue: any) => void
  onSecondChange: (newValue: any) => void
  collectSelectedIds: (ids: number[]) => void
}

const FavoriteProducts = ({
  collectSelectedIds,
  queryParams,
  onChangeHandler,
  handlerChangePage,
  onFirstChange,
  onSecondChange
}: Props) => {
  const dispatch = useAppDispatch()
  const products = useSelector((state: RootState) => state.products.items)

  useEffect(() => {
    dispatch(
      getAllProducts({
        ...queryParams,
        from: queryParams.from ? format(queryParams.from, 'yyyy-MM-dd') : null,
        before: queryParams.before ? format(queryParams.before, 'yyyy-MM-dd') : null
      })
    )
  }, [queryParams])

  const columns: Column<Product>[] = [
    {
      header: 'ID',
      key: 'id',
      index: true
    },
    {
      header: 'Фото',
      key: 'image'
    },
    {
      header: 'Артикул',
      key: 'articul',
      cell: '20'
    },
    {
      header: 'Наименование товара',
      key: 'name',
      cell: '20'
    },
    {
      header: 'Дата создания',
      key: 'date',
      cell: '20'
    },
    {
      header: 'Кол-во',
      key: 'quantity',
      cell: '20'
    },
    {
      header: 'Цена товара',
      key: 'price'
    },
    {
      header: 'Текущая цена',
      key: 'currentPrice'
    },
    {
      header: 'Действия',
      key: 'actions'
    }
  ]

  return (
    <>
      <StyledDivider />
      <div>
        <DatePickerContainer>
          <div>
            <ProductsDatePicker
              value={queryParams.from}
              onChange={onFirstChange}
              placeholder="От"
            />
          </div>
          <div>
            <ProductsDatePicker
              value={queryParams.before}
              onChange={onSecondChange}
              placeholder="До"
            />
          </div>
        </DatePickerContainer>
      </div>
      <TableContainer>
        <SearchSortContainer>
          <FoundProducts>{`Найдено ${products.countOfElements} Товаров`}</FoundProducts>
          <Sorting onChange={onChangeHandler} />
        </SearchSortContainer>
        <AppTable
          collectSelectedIds={collectSelectedIds}
          onChange={handlerChangePage}
          page={products.currentPage}
          pageSize={products.totalPages}
          columns={columns}
          rows={products.elements}
          withPagination={true}
        />
      </TableContainer>
    </>
  )
}

export default FavoriteProducts
