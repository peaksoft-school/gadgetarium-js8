import React from 'react'
import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table
} from '@mui/material'
import { Column } from '../../../utils/constants/tableColumns'

type Props<T> = {
  columns: Column<T>[]
  rows: T[]
}

const AppTable = <T,>({ columns, rows }: Props<T>) => {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns?.map((column) => (
                <TableCell key={column.key}>{column.header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row, rowIndex) => {
              return (
                <TableRow>
                  {columns?.map((column) => {
                    if (column.render) {
                      return column.render(row)
                    }

                    const value = column.index
                      ? rowIndex + 1
                      : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        //@ts-ignore
                        row[column.key]
                    return <TableCell key={column.key}>{value}</TableCell>
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default AppTable
