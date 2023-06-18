/* eslint-disable @typescript-eslint/no-explicit-any */
import ReusabletTable from '../../../../components/UI/table/AddProductsTable'
import { Box, Pagination, styled } from '@mui/material'
import ProductsDatePicker from '../../../../components/admin/UI/date-picker/DatePicker'
import { OrderPaginationType } from '../../../../utils/common/types'
const DatePickerContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '22rem'
}))
const FindedProduct = styled('p')(() => ({
  marginTop: '1rem'
}))
export type Column<T> = {
  header: string
  key: string
  width?: string | number
  index?: boolean
  cell?: string
  style?: string
  render?: (product: T) => JSX.Element
  checked?: boolean
}

export type Row = {
  id: number
  fullName: string
  orderNumber: string
  date: string
  quantity: number
  totalPrice: number
  deliveryType: boolean
  status: string
}

type Props = {
  columns: Column<Row>[]
  order: Row[]
  queryParams: {
    keyWord: string | null
    status: string
    page: number
    pageSize: number
    from: null
    before: null
  }

  onChangeHandler: (keyWord: string, value: string | number | boolean) => void
  handlerChangePage: (newPage: number) => void
  onFirstChange: (newValue: any) => void
  onSecondChange: (newValue: any) => void
  pagePagination: OrderPaginationType
  goToInnerPageHandler: (product: Row) => void
}

const InProcessingOrders = ({
  queryParams,
  onFirstChange,
  onSecondChange,
  handlerChangePage,
  order,
  columns,
  pagePagination,
  goToInnerPageHandler
}: Props) => {
  return (
    <div>
      <DatePickerContainer>
        <div>
          <ProductsDatePicker value={queryParams.from} onChange={onFirstChange} placeholder="От" />
        </div>
        <div>
          <ProductsDatePicker
            value={queryParams.before}
            onChange={onSecondChange}
            placeholder="До"
          />
        </div>
      </DatePickerContainer>
      <FindedProduct>Найдено {pagePagination.countOfElements} заказов</FindedProduct>
      <ReusabletTable
        columns={columns}
        rows={order}
        getUniqueId={(value: any) => value}
        onClick={goToInnerPageHandler}
      />
      {pagePagination?.countOfElements > 7 ? (
        <Box justifyContent="center" alignItems="center" display="flex" marginTop="2rem">
          <Pagination
            count={pagePagination?.totalPages}
            onChange={(event: React.ChangeEvent<unknown>, newPage) => handlerChangePage(newPage)}
            color="secondary"
            page={pagePagination?.currentPage}
          />
        </Box>
      ) : null}
    </div>
  )
}

export default InProcessingOrders
