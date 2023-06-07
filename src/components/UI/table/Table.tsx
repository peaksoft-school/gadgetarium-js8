import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material'
import { Column } from '../../../utils/common/types'
import { Row } from '../../../containers/orders/tab-order-components/InProcessingOrders'
import IconButtons from '../buttons/IconButtons'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/admin-products/deleteIcon.svg'
import { deleteOrderByIdRequest } from '../../../api/orders/orderService'

type Props<T> = {
  columns: Column<T>[]
  rows: Row[]
  getId?: (id: string) => void
  setHover: (a: boolean) => void
}

const StyledTable = styled('table')`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.9375rem;
`
const Styledth = styled('th')`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  letter-spacing: 0.0625rem;
  text-transform: capitalize;
  padding: 0.625rem;
  color: #ffffff;
`
const Styledtd = styled('td')`
  width: 9.375rem;
  text-align: center;
  border-top: 0.0625rem solid #cdcdcd;
  border-bottom: 0.0625rem solid #cdcdcd;
  padding: 0.625rem;
`
const StyledTr = styled('tr')`
  -webkit-box-shadow: 0.5rem 0.5625rem 1.125rem 0rem rgba(34, 60, 80, 0.14);
  -moz-box-shadow: 0.5rem 0.5625rem 1.125rem 0rem rgba(34, 60, 80, 0.14);
  box-shadow: 0.5rem 0.5625rem 1.125rem 0rem rgba(34, 60, 80, 0.14);
  border-radius: 0.375rem;
  &:hover {
    background-color: #cdcdcd;
  }
`
const StyledHeaderTr = styled('tr')`
  background-color: rgba(56, 66, 85, 0.9);
`

const StyledTdStatus = styled('td')(() => ({
  width: '9.375rem',
  textAlign: 'center',
  borderTop: '.0625rem solid #cdcdcd',
  borderBottom: '.0625rem solid #cdcdcd',
  padding: '.625rem',
  color: '#F99808'
}))

const AppTable = <T,>({ columns, rows }: Props<T>) => {
  const navigate = useNavigate()

  const navigateToInnerPageHandler = (id: number) => {
    navigate(id)
  }

  const deleteHandler = async (id: number) => {
    try {
      await deleteOrderByIdRequest(id)
    } catch (error) {
      console.log(error)
    }
  }

  const test = (status: string) => {
    switch (status) {
      case 'PENDING':
        return 'В обработке'
      case '':
        return ''
      default:
        break
    }
  }

  return (
    <StyledTable>
      <StyledHeaderTr>
        {columns?.map((column) => (
          <Styledth key={Math.random().toString()}>{column.header}</Styledth>
        ))}
      </StyledHeaderTr>
      <tbody>
        {rows?.map((row) => {
          return (
            <StyledTr onClick={() => navigateToInnerPageHandler(row.id)}>
              <Styledtd>{row.id}</Styledtd>
              <Styledtd>{row.fullName}</Styledtd>
              <Styledtd>{`${row.orderNumber}${row.date}`}</Styledtd>
              <Styledtd>{row.quantity}</Styledtd>
              <Styledtd>{row.totalPrice}</Styledtd>
              <Styledtd>{row.deliveryType ? 'Самовывоз' : 'Доставка'}</Styledtd>
              <StyledTdStatus>{test(row.status)}</StyledTdStatus>
              <Styledtd>
                <IconButtons icon={<DeleteIcon />} onClick={() => deleteHandler(row.id)} />
              </Styledtd>
            </StyledTr>
          )
        })}
      </tbody>
    </StyledTable>
  )
}
export default AppTable
