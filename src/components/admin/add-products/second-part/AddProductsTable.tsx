import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Column } from '../../../../utils/constants/tableColumns'
import { styled } from '@mui/material'

type Props<T> = {
  columns: Column<T>[]
  rows: T[]
  getUniqueId: (val: T) => number
}

const StyledHeaderTr = styled(TableCell)`
  background-color: rgba(56, 66, 85, 0.9);
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 1px;
  text-transform: 'none';
  padding: 16px 12px 16px 14px;
  color: #ffffff;
  border-radius: 0px;
  margin-bottom: 1rem;
`

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

const AddProductsTable = <T,>({ columns, rows, getUniqueId }: Props<T>) => {
  return (
    <div style={{ width: '100%', overflow: 'hidden', marginTop: '40px' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table" sx={{ borderSpacing: '0 15px' }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledHeaderTr
                  key={column.key}
                  align={column.align || 'left'}
                  style={
                    column.minWidth
                      ? {
                          minWidth: column.minWidth
                        }
                      : {}
                  }
                >
                  {column.header}
                </StyledHeaderTr>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, rowIndex) => {
              return (
                <TableRow hover tabIndex={-1} key={getUniqueId(row)}>
                  {columns.map((column) => {
                    if (column.render) {
                      return (
                        <StyledTableCell padding="none" key={column.key}>
                          {column.render(row)}
                        </StyledTableCell>
                      )
                    }

                    const value = column.index
                      ? rowIndex + 1
                      : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        //@ts-ignore
                        row[column.key]

                    return (
                      <StyledTableCell key={column.key} align={column.align}>
                        {value}
                      </StyledTableCell>
                    )
                  })}
                  <span>test</span>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default AddProductsTable
