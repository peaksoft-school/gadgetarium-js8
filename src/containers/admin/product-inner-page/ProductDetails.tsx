import { useState } from 'react'
import { ProductDetailsResponse } from '../../../api/product-id/product_idService'
import DetailsTable from '../../../components/admin/product-inner-page/DetailsTable'
import { Column } from '../../../utils/constants/tableColumns'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/product-inner-page-icons/delete-icon-without-border.svg'
import { Button, styled } from '@mui/material'
import Modal from '../../../components/UI/modals/Modal'

type ProductDetailsType = {
  details: ProductDetailsResponse[]
  deleteSubProductById: (ids: number[]) => Promise<void>
  getProductDetails: (id: number) => Promise<void>
  productId: number
}

const StyledButton = styled('button')(() => ({
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: ' 150%',
  color: '#384255',
  border: 'none',
  background: 'none',
  padding: '0.5rem',
  '&:hover': {
    background: '#e4e6eb',
    transition: '0.1s',
    borderRadius: '10px'
  },

  '&:active': {
    backgroundСolor: '#333',
    borderСolor: '#333',
    color: '#eee'
  }
}))
const ModalContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  padding: '20px 60px',
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

const ConfirmModalButton = styled(Button)(() => ({
  width: '45%',
  backgroundColor: '#CB11AB',
  padding: '0.7rem 1.5rem',
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
  width: '45%',
  backgroundColor: '#fff',
  padding: '0.7rem 1rem',
  borderRadius: '4px',
  border: '1px solid #CB11AB',
  color: '#CB11AB',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '1rem',
  lineHeight: '19px',
  textTransform: 'none',
  '&:hover': {
    color: '#fff'
    // backgroundColor: '#fff'
  }
}))

const ModalButtonContainers = styled('div')(() => ({
  marginTop: '1rem',
  display: 'flex',
  justifyContent: 'space-between'
}))

const ProductDetails = ({
  details,
  deleteSubProductById,
  getProductDetails,
  productId
}: ProductDetailsType) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([])
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)
  const tableCharacteristicHeaders = Object.keys(details[0].characteristics)

  const columns: Column<ProductDetailsResponse>[] = [
    {
      header: 'ID',
      key: 'id',
      index: true
    },
    {
      header: 'Фото',
      key: 'image'
    },
    {
      header: 'Наименование товара',
      key: 'name',
      cell: '20'
    },
    {
      header: 'Цвет',
      key: 'colour',
      cell: '20'
    },
    {
      header: tableCharacteristicHeaders,
      key: 'characteristics'
    },
    {
      header: 'Кол-во',
      key: 'quantity',
      cell: '20'
    },
    {
      header: 'Цена товара',
      key: 'price'
    }
  ]

  const openDeleteModalHandler = () => {
    setDeleteModalOpen((prevState) => !prevState)
  }

  const getSelectedIds = (Ids: number[]) => {
    setSelectedIds(Ids)
    // console.log(tableCharacteristicHeaders)
  }

  return (
    <>
      <div>
        {selectedIds.length > 0 ? (
          <StyledButton
            onClick={() => {
              openDeleteModalHandler()
            }}
          >
            <DeleteIcon /> Удалить
          </StyledButton>
        ) : null}
        <DetailsTable
          getSelectedIds={getSelectedIds}
          onChange={() => {}}
          page={0}
          pageSize={0}
          columns={columns}
          rows={details}
          withPagination={true}
          tableCharacteristicHeaders={tableCharacteristicHeaders}
        />
      </div>
      <Modal open={isDeleteModalOpen} onClose={openDeleteModalHandler}>
        <ModalContainer>
          <p>Вы уверены, что хотите удалить этот продукт?</p>
          <ModalButtonContainers>
            <CancelModalButton variant="outlined" onClick={openDeleteModalHandler}>
              Отменить
            </CancelModalButton>
            <ConfirmModalButton
              onClick={async () => {
                openDeleteModalHandler()
                deleteSubProductById(selectedIds)
                await getProductDetails(productId)
              }}
            >
              Да
            </ConfirmModalButton>
          </ModalButtonContainers>
        </ModalContainer>
      </Modal>
    </>
  )
}

export default ProductDetails
