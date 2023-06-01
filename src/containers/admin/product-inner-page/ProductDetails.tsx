import { useState } from 'react'
import { ProductDetailsResponse } from '../../../api/product-id/product_idService'
import DetailsTable from '../../../components/admin/product-inner-page/DetailsTable'
import { Column } from '../../../utils/constants/tableColumns'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/product-inner-page-icons/delete-icon-without-border.svg'
import { styled } from '@mui/material'

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

const ProductDetails = ({
  details,
  deleteSubProductById,
  getProductDetails,
  productId
}: ProductDetailsType) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([])
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

  const getSelectedIds = (Ids: number[]) => {
    setSelectedIds(Ids)
    // console.log(tableCharacteristicHeaders)
  }

  return (
    <div>
      {selectedIds.length > 0 ? (
        <StyledButton
          onClick={async () => {
            deleteSubProductById(selectedIds)
            await getProductDetails(productId)
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
  )
}

export default ProductDetails
