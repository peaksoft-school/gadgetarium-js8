import { useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Tooltip, TooltipProps, styled, tooltipClasses } from '@mui/material'
import { ReactComponent as ArrowIcon } from '../../../assets/icons/feedback-icons/arrow_to_up.svg'
import TableRating from './TableRating'
import RowTable from './RowTable'
import { useReviewsTable } from '../../../hooks/reviews/useReviewsTable'

interface Props {
  page: string
}
const StyledTableHeadCell = styled(TableCell)(() => ({
  padding: '0rem .625rem .75rem 0rem',
  textAlign: 'left',
  verticalAlign: 'top',
  fontWeight: 600,
  fontSize: '.875rem',
  lineHeight: '1.0625rem',
  color: '#384255'
}))

const HeadCellOne = styled('div')(() => ({
  padding: 0,
  width: '40%'
}))
const HeadCellTwo = styled('div')(() => ({
  padding: 0,
  width: '60%'
}))
const StyledArrowIcon = styled(ArrowIcon)(() => ({
  width: '.6875rem',
  height: '.375rem',
  marginLeft: '.25rem'
}))
const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11
  }
}))
const ReviewsTable = ({ page }: Props) => {
  const {
    getFeedbackInfographic,
    handleTooltipClose,
    openTooltip,
    openTooltipHandler,
    sumOfRatings,
    reviewResponses,
    ratingData
  } = useReviewsTable()
  useEffect(() => {
    getFeedbackInfographic()
  }, [])
  return (
    <TableContainer sx={{ width: '100%', minWidth: '68.75rem' }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <StyledTableHeadCell>ID</StyledTableHeadCell>
            <StyledTableHeadCell>Фото</StyledTableHeadCell>
            <StyledTableHeadCell>Название товара</StyledTableHeadCell>
            <StyledTableHeadCell>Комментарий</StyledTableHeadCell>
            <StyledTableHeadCell
              sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
            >
              <StyledTooltip
                PopperProps={{
                  disablePortal: true
                }}
                onClose={handleTooltipClose}
                open={openTooltip}
                title={<TableRating data={ratingData} />}
              >
                <HeadCellOne onClick={openTooltipHandler}>
                  Все оценки ({sumOfRatings()}) <StyledArrowIcon />
                </HeadCellOne>
              </StyledTooltip>

              <HeadCellTwo>Пользователь</HeadCellTwo>
            </StyledTableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reviewResponses?.map((item, index) => (
            <RowTable key={index} item={item} index={index} page={page} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default ReviewsTable
