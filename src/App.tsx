import React, { useState } from 'react'
import AppTable from './components/UI/table/TableList'
import { Container, styled } from '@mui/material'
import { Column } from './utils/constants/tableColumns'

export type Row = {
  title: string
  id: string
  image: string
  check: boolean
}

const StyledDiv = styled('div')`
  /* width: 60%; */
  text-align: center;
`

const App = () => {
  const [onHover, setHover] = useState(false)

  console.log(onHover)

  const columns: Column<Row>[] = [
    {
      header: 'ID',
      key: 'id',
      index: true
    },
    {
      header: 'Фото',
      key: 'title'
    },
    {
      header: 'Артикул',
      key: 'title',
      cell: '20'
    },
    {
      header: 'Наименование тоdfhf',
      key: 'title',
      cell: '20'
    },
    {
      header: 'Дата создания',
      key: 'title',
      cell: '20'
    },
    {
      header: 'Кол-во',
      key: 'title',
      cell: '20'
    },
    {
      header: 'Цена товара',
      key: 'title'
    },
    {
      header: 'Текущая цена',
      key: 'title'
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
      check: false
    },
    {
      id: '2',
      title: 'wad',
      image: 'photo',
      check: false
    },
    {
      id: '3',
      title: 'awda',
      image: 'photo',
      check: false
    },
    {
      id: '4',
      title: 'awda',
      image: 'photo',
      check: false
    }
  ]
  return (
    <StyledDiv>
      <Container>
        <AppTable columns={columns} rows={rows} setHover={setHover} />
      </Container>
    </StyledDiv>
  )
}

export default App
