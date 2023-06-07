import { useEffect, useState } from 'react'
import { useClientSidePagination } from '../../../hooks/pagination/usePagination'
import styled from '@emotion/styled'
import CustomizedSnackbars from '../UI/error-snackbar/ErrorSnackbar'
import { Box, Checkbox, Pagination } from '@mui/material'
import { Column } from '../../../utils/constants/tableColumns'
import { ProductDetailsResponse } from '../../../api/product-id/product_idService'

type Props<T> = {
  columns: Column<T>[]
  rows: ProductDetailsResponse[]
  withPagination: boolean
  page: number
  pageSize: number
  onChange: (newPage: number) => void
  getSelectedIds: (Ids: number[]) => void
  tableCharacteristicHeaders: string[]
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
const StyledCheckbox = styled(Checkbox)(() => ({
  paddingTop: '2rem'
}))

const StyledImage = styled('img')(() => ({
  width: '4rem',
  height: '4rem'
}))

const StyledIdtd = styled('td')`
  text-align: center;
  border-top: 1px solid #cdcdcd;
  border-bottom: 1px solid #cdcdcd;
  padding: 10px 23px 10px 10px;
`

const DetailsTable = <T,>({
  getSelectedIds,
  onChange,
  page,
  pageSize,
  columns,
  rows,
  withPagination = true,
  tableCharacteristicHeaders
}: Props<T>) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([])
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [isOpen, setOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState('Error')
  const { paginate } = useClientSidePagination()

  const handleSelect = (id: number) => {
    const index = selectedIds.indexOf(id)
    if (index === -1) {
      setSelectedIds([...selectedIds, id])
    } else {
      setSelectedIds(selectedIds.filter((itemId) => itemId !== id))
    }
  }

  const handleRowHover = (id: number | null) => {
    setHoveredId(id)
  }

  useEffect(() => {
    getSelectedIds(selectedIds)
  }, [selectedIds])

  const renderCharacteristics = (charsObj: any): React.ReactNode => {
    if (!tableCharacteristicHeaders.length) {
      return null
    }
    return tableCharacteristicHeaders.map((key) => <Styledtd>{charsObj[key]}</Styledtd>)
  }

  return (
    <>
      <CustomizedSnackbars message={errorMessage} open={isOpen} onClose={() => setOpen(false)} />
      <StyledTable>
        <StyledHeaderTr>
          {columns?.map((column) => {
            if (Array.isArray(column.header)) {
              return column.header.map((head) => (
                <Styledth key={Math.random().toString()}>{head}</Styledth>
              ))
            }
            return <Styledth key={Math.random().toString()}>{column.header}</Styledth>
          })}
        </StyledHeaderTr>
        <tbody>
          {paginate(rows).map((row, index) => {
            return (
              <StyledTr
                key={Math.random().toString()}
                onMouseEnter={() => handleRowHover(row.id)}
                onMouseLeave={() => handleRowHover(null)}
              >
                {hoveredId === row.id ? (
                  <StyledCheckbox
                    checked={selectedIds.indexOf(row.id) !== -1}
                    onChange={() => handleSelect(row.id)}
                  />
                ) : (
                  <>
                    <StyledIdtd>{index + 1}</StyledIdtd>
                  </>
                )}
                <Styledtd>
                  <StyledImage src={row.image} alt="phoneImage" />
                </Styledtd>
                <Styledtd>{row.name.slice(0, 18)}...</Styledtd>
                <Styledtd>{row.colour}</Styledtd>
                {renderCharacteristics(row.characteristics)}
                <Styledtd>{row.quantity}</Styledtd>
                <Styledtd>{row.price}</Styledtd>
              </StyledTr>
            )
          })}
        </tbody>
      </StyledTable>

      {withPagination &&
        (rows.length > 7 ? (
          <Box justifyContent="center" alignItems="center" display="flex" marginTop="2rem">
            <Pagination
              count={pageSize}
              onChange={(event: React.ChangeEvent<unknown>, newPage) => onChange(newPage)}
              color="secondary"
              page={page}
            />
          </Box>
        ) : null)}
    </>
  )
}
export default DetailsTable
