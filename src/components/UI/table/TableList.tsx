import { useState } from 'react'
import { Checkbox, styled } from '@mui/material'
import { Column } from '../../../utils/constants/tableColumns'
import { Row } from '../../../App'

type Props<T> = {
  columns: Column<T>[]
  rows: Row[]
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
  border-spacing: 0;
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

const AppTable = <T,>({ columns, rows, setHover }: Props<T>) => {
  const [localRows, setLocalRows] = useState(rows)
  const hoverRowHandler = (obj: Row) => {
    const changedRows = localRows.map((item) => {
      if (item.id === obj.id) {
        item.check = !item.check
      }
      return item
    })
    setLocalRows(changedRows)
  }

  // const unHoverElement = (obj: Row) => {
  //   const changedRows = localRows.map((item) => {
  //     if (item.id === obj.id) {
  //       item.check = false
  //     }
  //     return item
  //   })
  //   setLocalRows(changedRows)
  // }

  return (
    <StyledTable>
      <StyledHeaderTr>
        {columns?.map((column) => (
          <Styledth key={Math.random().toString()}>{column.header}</Styledth>
        ))}
      </StyledHeaderTr>
      <tbody>
        {localRows?.map((row) => {
          // const test = row.check ? <Checkbox /> : row[column.key]
          const test = row.check ? <Checkbox /> : <Styledtd>{row.id}</Styledtd>
          return (
            <StyledTr
              key={Math.random().toString()}
              onMouseEnter={() => hoverRowHandler(row)}
              onMouseLeave={() => hoverRowHandler(row)}
            >
              {test}
              <Styledtd>{row.title}</Styledtd>
              <Styledtd>{row.image}</Styledtd>
              {/* {columns?.map((column) => {
                // if (column.render) {
                //   return column.render(row)
                // }

                // const value = column.index
                //   ? rowIndex + 1
                //   : // eslint-disable-next-line @type'script-eslint/ban-ts-comment
                //     //@ts-ignore'
                //     row[column.key]

                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore

              })} */}
            </StyledTr>
          )
        })}
      </tbody>
    </StyledTable>
  )
}

export default AppTable
