import { useState } from 'react'
import { Checkbox, styled } from '@mui/material'
import { Column } from '../../../utils/constants/tableColumns'

type Props<T> = {
  columns: Column<T>[]
  // rows: Row[]
  getId: (id: string) => void
  setHover: (a: boolean) => void
}
const StyledTable = styled('table')`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 15px;
`
const Styledth = styled('th')`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 1px;
  text-transform: capitalize;
  padding: 10px;
  color: #ffffff;
`
const Styledtd = styled('td')`
  width: 150px;
  text-align: center;
  border-top: 1px solid #cdcdcd;
  border-bottom: 1px solid #cdcdcd;
  padding: 10px;
`
const StyledTr = styled('tr')`
  -webkit-box-shadow: 8px 9px 18px 0px rgba(34, 60, 80, 0.14);
  -moz-box-shadow: 8px 9px 18px 0px rgba(34, 60, 80, 0.14);
  box-shadow: 8px 9px 18px 0px rgba(34, 60, 80, 0.14);
  border-radius: 6px;
  &:hover {
    background-color: #cdcdcd;
  }
`
const StyledHeaderTr = styled('tr')`
  background-color: rgba(56, 66, 85, 0.9);
`

const AppTable = <T,>({ columns, rows, getId }: Props<T>) => {
  const [localRows, setLocalRows] = useState(rows)
  const hoverRowHandler = (obj: Row) => {
    const index = localRows.findIndex((item) => item.id === obj.id)
    if (index !== -1) {
      const newRows = [...localRows]
      newRows[index] = { ...newRows[index], check: !newRows[index].check }
      setLocalRows(newRows)
    }
  }

  const getIdHandler = (id: string) => {
    getId(id)
  }

  return (
    <StyledTable>
      <StyledHeaderTr>
        {columns?.map((column) => (
          <Styledth key={Math.random().toString()}>{column.header}</Styledth>
        ))}
      </StyledHeaderTr>
      <tbody>
        {localRows?.map((row) => {
          const test = row.check ? (
            <Checkbox
              onClick={() => getIdHandler(row.id)}
              checked={true}
              onChange={() => hoverRowHandler(row)}
            />
          ) : (
            <Styledtd>{row.id}</Styledtd>
          )
          return (
            <StyledTr
              key={Math.random().toString()}
              onMouseEnter={() => hoverRowHandler(row)}
              onMouseLeave={() => hoverRowHandler(row)}
            >
              {test}
              <Styledtd>{}</Styledtd>
              <Styledtd>{}</Styledtd>
              <Styledtd>{}</Styledtd>
              <Styledtd>{}</Styledtd>
              <Styledtd>{}</Styledtd>
              <Styledtd>{}</Styledtd>
              <Styledtd>{}</Styledtd>
              <Styledtd>{}</Styledtd>
            </StyledTr>
          )
        })}
      </tbody>
    </StyledTable>
  )
}
export default AppTable
