import { useEffect, useState } from 'react'
import { Checkbox, Pagination, Box, styled, Button } from '@mui/material'
import { Column } from '../../../../utils/constants/tableColumns'
import { useClientSidePagination } from '../../../../hooks/pagination/usePagination'
import { ReactComponent as DeleteIcon } from '../../../../assets/icons/admin-products/deleteIcon.svg'
import { ReactComponent as EditIcon } from '../../../../assets/icons/admin-products/editIcon.svg'
import { useNavigate } from 'react-router-dom'
import IconButtons from '../../../UI/buttons/IconButtons'
import Modal from '../../../UI/modals/Modal'
import { isAxiosError } from 'axios'
import { useSnackbar } from '../../../../hooks/snackbar/useSnackbar'
import { deleteProductByIdRequest2 } from '../../../../api/product/productService'

type RowType = {
  createdAt: string
  image: string
  itemNumber: number
  name: string
  percentOfDiscount: number
  price: number
  quantity: number
  productId: number
  subProductId: number
  totalPrice: number
}

type Props<T> = {
  columns: Column<T>[]
  rows: RowType[]
  withPagination: boolean
  page: number
  pageSize: number
  onChange: (newPage: number) => void
  collectSelectedIds: (ids: number[]) => void
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

const StyledIdtd = styled('td')`
  text-align: center;
  border-top: 1px solid #cdcdcd;
  border-bottom: 1px solid #cdcdcd;
  padding: 10px 23px 10px 10px;
`

const ModalContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '1rem',
  paddingLeft: '30px',
  paddingRight: '30px',
  paddingBottom: '1rem',
  p: {
    color: '#292929',
    fontFamily: 'Inter, sans-serif',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '140%',
    textAlign: 'center'
  }
}))

const DeleteModalButton = styled(Button)(() => ({
  backgroundColor: '#CB11AB',
  padding: '0.5rem 1.5rem',
  borderRadius: '4px',
  color: '#fff',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '19px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#991984'
  }
}))

const CancelModalButton = styled(Button)(() => ({
  backgroundColor: '#fff',
  padding: '0.45rem 1rem',
  borderRadius: '4px',
  border: '1px solid #CB11AB',
  color: '#CB11AB',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '1rem',
  lineHeight: '19px',
  textTransform: 'none'
}))

const ModalButtonContainers = styled('div')(() => ({
  marginTop: '2rem',
  display: 'flex',
  justifyContent: 'space-around'
}))

const AppTable = <T,>({
  collectSelectedIds,
  onChange,
  page,
  pageSize,
  columns,
  rows,
  withPagination = true
}: Props<T>) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([])
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [openModal, setOpenModal] = useState(false)
  const navigate = useNavigate()
  const { paginate } = useClientSidePagination()
  const [subProductId, setSubProductId] = useState<number>(0)
  const { snackbarHanler, ToastContainer } = useSnackbar({
    autoClose: 2500,
    position: 'bottom-right'
  })

  const handleSelect = (id: number) => {
    const index = selectedIds.indexOf(id)

    if (index === -1) {
      setSelectedIds([...selectedIds, id])
    } else {
      setSelectedIds(selectedIds.filter((itemId) => itemId !== id))
    }
  }

  const openModalHandler = (id: number) => {
    setOpenModal(true)
    setSubProductId(id)
  }
  const closeModalHandler = () => {
    setOpenModal(false)
  }

  useEffect(() => {
    collectSelectedIds(selectedIds)
  }, [selectedIds, collectSelectedIds])

  const handleRowHover = (id: number | null) => {
    setHoveredId(id)
  }

  const deleteHandler = async () => {
    try {
      await deleteProductByIdRequest2(subProductId)
      snackbarHanler({
        message: 'Товар Успешно удален!',
        linkText: '',
        type: 'success'
      })
      setOpenModal(false)
    } catch (e) {
      if (isAxiosError(e)) {
        setOpenModal(false)
        return snackbarHanler({
          message: e.response?.data.message,
          linkText: '',
          type: 'error'
        })
      }
      return snackbarHanler({
        message: 'Что-то пошло не так',
        linkText: '',
        type: 'error'
      })
    }
  }

  const navigateToInnerPageHandler = (id: number) => {
    navigate(`${id}`)
  }

  return (
    <>
      {ToastContainer}
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
                <>
                  <StyledTr
                    key={Math.random().toString()}
                    onMouseEnter={() => handleRowHover(row.subProductId)}
                    onMouseLeave={() => handleRowHover(null)}
                  >
                    {hoveredId === row.subProductId ? (
                      <StyledCheckbox
                        checked={selectedIds.indexOf(row.subProductId) !== -1}
                        onChange={() => handleSelect(row.subProductId)}
                      />
                    ) : (
                      <>
                        <StyledIdtd>{row.subProductId}</StyledIdtd>
                      </>
                    )}
                    <Styledtd
                      sx={{ cursor: 'pointer' }}
                      onClick={() => navigateToInnerPageHandler(row.productId)}
                    >
                      <StyledImage src={row.image} alt="phoneImage" />
                    </Styledtd>
                    <Styledtd
                      sx={{ cursor: 'pointer' }}
                      onClick={() => navigateToInnerPageHandler(row.productId)}
                    >
                      {row.itemNumber}
                    </Styledtd>
                    <Styledtd
                      sx={{ cursor: 'pointer' }}
                      onClick={() => navigateToInnerPageHandler(row.productId)}
                    >
                      {row.name.length > 16 ? ` ${row.name.slice(0, 16)}...` : row.name}
                    </Styledtd>
                    <Styledtd
                      sx={{ cursor: 'pointer' }}
                      onClick={() => navigateToInnerPageHandler(row.productId)}
                    >
                      {row.createdAt}
                    </Styledtd>
                    <Styledtd
                      sx={{ cursor: 'pointer' }}
                      onClick={() => navigateToInnerPageHandler(row.productId)}
                    >
                      {row.quantity}
                    </Styledtd>
                    <Styledtd>
                      <CurrentPrice>{row.price}c</CurrentPrice>
                      <Discount>{row.percentOfDiscount}%</Discount>
                    </Styledtd>
                    <Styledtd>
                      <TotalPrice>{row.totalPrice}c</TotalPrice>
                    </Styledtd>
                    <Styledtd>
                      <IconButtons icon={<EditIcon />} onClick={() => {}} />
                      <IconButtons
                        icon={<DeleteIcon />}
                        onClick={() => openModalHandler(row.subProductId)}
                      />
                    </Styledtd>
                  </StyledTr>
                </>
              )
            }
          })}
        </tbody>
      </StyledTable>
      {withPagination && (
        <Box justifyContent="center" alignItems="center" display="flex" marginTop="2rem">
          {pageSize > 1 ? (
            <Pagination
              count={pageSize}
              onChange={(event: React.ChangeEvent<unknown>, newPage) => onChange(newPage)}
              color="secondary"
              page={page}
            />
          ) : null}
        </Box>
      )}
      <>
        <Modal open={openModal} onClose={closeModalHandler}>
          <ModalContainer>
            <p>Вы уверены, что хотите удалить данный товар?</p>
            <ModalButtonContainers>
              <CancelModalButton onClick={closeModalHandler}>Нет</CancelModalButton>
              <DeleteModalButton onClick={deleteHandler}>Да</DeleteModalButton>
            </ModalButtonContainers>
          </ModalContainer>
        </Modal>
      </>
    </>
  )
}
export default AppTable
