/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import AppTable from '../../../components/UI/table/Table'
import ProductsDatePicker from '../../../components/admin/UI/date-picker/DatePicker'
import { styled } from '@mui/material'
import { getAllOrdersRequest } from '../../../api/orders/orderService'
import { format } from 'date-fns'

const DatePickerContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '22rem'
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
  queryParams: {
    keyWord: string | null
    status: string
    page: number
    pageSize: number
    from: null
    before: null
  }
  setQueryParams: React.Dispatch<
    React.SetStateAction<{
      keyWord: null
      status: string
      page: number
      pageSize: number
      from: null
      before: null
    }>
  >
  onChangeHandler: (keyWord: string, value: string | number | boolean) => void
  handlerChangePage: (newPage: number) => void
  onFirstChange: (newValue: any) => void
  onSecondChange: (newValue: any) => void
}

const InProcessingOrders = ({ queryParams, onFirstChange, onSecondChange }: Props) => {
  const [onHover, setHover] = useState(false)
  const [order, setOrder] = useState<any[]>([])

  const columns: Column<Row>[] = [
    {
      header: 'ID',
      key: 'id',
      index: true
    },
    {
      header: 'ФИО',
      key: 'fullName'
    },
    {
      header: 'Номер/дата',
      key: 'orderNumber'
    },
    {
      header: 'Кол-во',
      key: 'quantity',
      cell: '20'
    },
    {
      header: 'Общая сумма',
      key: 'totalPrice',
      cell: '20'
    },
    {
      header: 'Оформление заказа',
      key: 'deliveryType',
      cell: '20'
    },
    {
      header: 'Статус',
      key: 'status',
      cell: '20'
    },
    {
      header: 'Действия',
      key: 'title'
    }
  ]

  const getOrder = async () => {
    const queryParamsOrder = {
      ...queryParams,
      from: queryParams.from ? format(queryParams.from, 'yyyy-MM-dd') : null,
      before: queryParams.before ? format(queryParams.before, 'yyyy-MM-dd') : null
    }
    try {
      const { data } = await getAllOrdersRequest(queryParamsOrder)
      setOrder(data.elements)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getOrder()
  }, [queryParams])

  return (
    <div>
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
      <AppTable columns={columns} rows={order} setHover={setHover} />
    </div>
  )
}

export default InProcessingOrders
