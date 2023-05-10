import { useState } from 'react'
import { Checkbox, Pagination, Box, styled } from '@mui/material'
import { Column } from '../../../../utils/constants/tableColumns'
import { useClientSidePagination } from './usePagination'
import IconButtons from '../../../UI/IconButtons'
import { ReactComponent as DeleteIcon } from '../../../../assets/icons/admin-products/deleteIcon.svg'
import { ReactComponent as EditIcon } from '../../../../assets/icons/admin-products/editIcon.svg'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch } from '../../../../redux/store'
import { deleteProductById } from '../../../../redux/store/products/products.thunk'

type RowType = {
  createdAt: string
  image: string
  itemNumber: number
  name: string
  percentOfDiscount: number
  price: number
  quantity: number
  subProductId: number
  totalPrice: number
}

type Props<T> = {
  columns: Column<T>[]
  rows: RowType[]
  withPagination: boolean
  page: number
  totalPages: number
  onChange: (newPage: number) => void
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
const StyledCheckbox = styled(Checkbox)(() => ({
  marginTop: '1.5rem',
  marginLeft: '1.5rem'
}))

const StyledImage = styled('img')(() => ({
  width: '4rem',
  height: '4rem'
}))

const Discount = styled('p')(() => ({
  color: '#F10000',
  marginRight: '1.5rem',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '1rem',
  lineHeight: '1.1875rem'
}))

const CurrentPrice = styled('p')(() => ({
  color: '#2C68F5',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '1rem',
  lineHeight: '1.1875rem'
}))

const TotalPrice = styled('p')(() => ({
  color: '#2C68F5',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '1rem',
  lineHeight: '1.1875rem'
}))

const AppTable = <T,>({
  onChange,
  page,
  totalPages,
  columns,
  rows,
  withPagination = true
}: Props<T>) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([])
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
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

  const deleteHandler = (id: number) => {
    dispatch(deleteProductById(id))
  }

  const navigateToInnerPageHandler = (id: number) => {
    navigate(`${id}`)
  }

  return (
    <>
      <StyledTable>
        <StyledHeaderTr>
          {columns?.map((column) => (
            <Styledth key={Math.random().toString()}>{column.header}</Styledth>
          ))}
        </StyledHeaderTr>
        <tbody>
          {paginate(rows).map((row) => {
            {
              return (
                <StyledTr
                  key={row.subProductId}
                  onMouseEnter={() => handleRowHover(row.subProductId)}
                  onMouseLeave={() => handleRowHover(null)}
                >
                  {hoveredId === row.subProductId ? (
                    <StyledCheckbox
                      checked={selectedIds.indexOf(row.subProductId) !== -1}
                      onChange={() => handleSelect(row.subProductId)}
                    />
                  ) : (
                    <Styledtd>{row.subProductId}</Styledtd>
                  )}
                  <Styledtd>
                    <StyledImage src={row.image} alt="phoneImage" />
                  </Styledtd>
                  <Styledtd>{row.itemNumber}</Styledtd>
                  <Styledtd>{row.name}</Styledtd>
                  <Styledtd>{row.createdAt}</Styledtd>
                  <Styledtd>{row.quantity}</Styledtd>
                  <Styledtd>
                    <CurrentPrice>{row.price}c</CurrentPrice>
                    <Discount>{row.percentOfDiscount}%</Discount>
                  </Styledtd>
                  <Styledtd>
                    <TotalPrice>{row.totalPrice}c</TotalPrice>
                  </Styledtd>
                  <Styledtd>
                    <IconButtons
                      icon={<EditIcon />}
                      onClick={() => navigateToInnerPageHandler(row.subProductId)}
                    />
                    <IconButtons
                      icon={<DeleteIcon />}
                      onClick={() => deleteHandler(row.subProductId)}
                    />
                  </Styledtd>
                </StyledTr>
              )
            }
          })}
        </tbody>
      </StyledTable>
      {withPagination && (
        <Box justifyContent="center" alignItems="center" display="flex" marginTop="2rem">
          <Pagination
            count={page}
            onChange={(event: React.ChangeEvent<unknown>, newPage) => onChange(newPage)}
            page={totalPages}
            color="secondary"
          />
        </Box>
      )}
    </>
  )
}
export default AppTable
