import { useState } from 'react'
import AppTable from '../../components/UI/table/Table'

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
  title: string
  id: string
  image: string
  callToname: string
  date: number
  check: boolean
}

const OrderPage = () => {
  const [onHover, setHover] = useState(false)

  const columns: Column<Row>[] = [
    {
      header: 'ID',
      key: 'id',
      index: true
    },
    {
      header: 'ФИО',
      key: 'title'
    },
    {
      header: 'Номер/дата',
      key: 'title'
    },
    {
      header: 'Кол-во',
      key: 'title',
      cell: '20'
    },
    {
      header: 'Общая сумма',
      key: 'title',
      cell: '20'
    },
    {
      header: 'Оформление заказа',
      key: 'title',
      cell: '20'
    },
    {
      header: 'Статус',
      key: 'title',
      cell: '20'
    },
    {
      header: 'Действия',
      key: 'title'
    }
  ]
  const rows: Row[] = [
    {
      id: '1',
      title: 'awda',
      image: 'photo',
      callToname: 'dvlfvmkd',
      date: 805,
      check: false
    },
    {
      id: '2',
      title: 'wad',
      image: 'photo',
      callToname: 'efh',
      date: 805,
      check: false
    },
    {
      id: '3',
      title: 'awda',
      image: 'photo',
      callToname: 'dvlfvmkd',
      date: 805,
      check: false
    },
    {
      id: '4',
      title: 'awda',
      image: 'photo',
      callToname: 'dvlfvmkd',
      date: 805,
      check: false
    }
  ]
  return (
    <div>
      <AppTable columns={columns} rows={rows} setHover={setHover} />
    </div>
  )
}

export default OrderPage
