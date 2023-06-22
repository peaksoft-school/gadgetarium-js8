/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from '@mui/material'
import React, { ChangeEvent, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDebounce } from '../useDebounced/useDebounce'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { OrderPaginationType } from '../../utils/common/types'
import { RootState } from '../../redux/store'
import InProcessingOrders, {
  Column,
  Row
} from '../../containers/admin/order/tab-order-components/InProgressingOrders'
import IconButtons from '../../components/UI/buttons/IconButtons'
import { useSnackbar } from '../snackbar/useSnackbar'
import { format } from 'date-fns'
import {
  deleteOrderByIdRequest,
  getAllOrdersRequest,
  postOrderStatusRequest
} from '../../api/order/orderService'
import { ReactComponent as ArrowUp } from '../../assets/icons/order-icons/arrow-up.svg'
import { ReactComponent as ArrowDown } from '../../assets/icons/order-icons/arrow-down.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/feedback-icons/admin_delete_icon.svg'
import { isRejectedWithValue } from '@reduxjs/toolkit'
import { AxiosError, isAxiosError } from 'axios'
const RenderContainer = styled('div')(() => ({
  textAlign: 'center'
}))
const StyledTitle = styled('p')(() => ({
  marginLeft: '15px'
}))
const StyledTime = styled('p')(() => ({
  marginLeft: '15px',
  fontSize: '10px',
  color: '#909CB5'
}))
const StyledOrderNumber = styled('p')(() => ({
  marginLeft: '15px',
  color: '#2C68F5'
}))
const StyledStatus = styled('p')(() => ({
  marginLeft: '15px',
  cursor: 'pointer',
  color: '#F99808',
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
}))
export const useOrderAdmin = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const { snackbarHanler } = useSnackbar({ autoClose: 2500, position: 'bottom-right' })
  const [searchTerm, setSearchTerm] = useState('')
  const infographics = useSelector((state: RootState) => state.infographics.items)
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  const [searchParams, setSearchParams] = useSearchParams()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [order, setOrder] = useState<any[]>([])
  const [delivered, setDelivered] = useState<boolean | null>(null)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [getIdProduct, setGetIdProduct] = useState<number | null>(null)
  const [getNameProduct, setGetNameProduct] = useState<string>('')
  const [getStatusId, setGetStatusId] = useState<number | null>(null)
  const [upToArrow, setUpToArrow] = useState<boolean>(false)
  const [pagePagination, setPagePagination] = useState<OrderPaginationType>({
    currentPage: 1,
    totalPages: 1,
    countOfElements: 0
  })
  const [queryParams, setQueryParams] = useState({
    status: 'READY_FOR_DELIVERY',
    page: 1,
    keyWord: null,
    pageSize: 7,
    from: null,
    before: null
  })

  const goToInnerPageHandler = (product: Row) => {
    navigate(`${product.id}`)
  }
  const closeModalHandler = () => {
    setOpenModal(false)
  }
  const openModalHandler = (productId: number, nameProduct: string) => {
    setOpenModal(true)
    setGetIdProduct(productId)
    setGetNameProduct(nameProduct)
  }
  const openList = Boolean(anchorEl)
  const handleClick = (
    event: React.MouseEvent<HTMLParagraphElement>,
    isDelivered: boolean,
    statusId: number
  ) => {
    setAnchorEl(event.currentTarget)
    setUpToArrow(true)

    setDelivered(isDelivered)
    setGetStatusId(statusId)
  }
  const handleClose = () => {
    setAnchorEl(null)
    setUpToArrow(false)
  }

  const getOrder = async () => {
    const queryParamsOrder = {
      ...queryParams,
      from: queryParams.from ? format(queryParams.from, 'yyyy-MM-dd') : null,
      before: queryParams.before ? format(queryParams.before, 'yyyy-MM-dd') : null
    }
    try {
      setIsLoading(true)
      const { data } = await getAllOrdersRequest(queryParamsOrder)
      if (data !== null || undefined) {
        const pageData = {
          currentPage: data.currentPage,
          totalPages: data.totalPages,
          countOfElements: data.countOfElements
        }
        const updatedData = data.elements.map((item) => ({
          ...item,
          quantity: item.quantity + ' ' + 'шт',
          totalPrice: item.totalPrice + 'с'
        }))
        setOrder(updatedData)
        setPagePagination(pageData)
      }
    } catch (error) {
      isRejectedWithValue(error)
    } finally {
      setIsLoading(false)
    }
  }
  const deleteProductHandler = async (id: number | null) => {
    try {
      await deleteOrderByIdRequest(id)
      getOrder()
      setOpenModal(false)
      snackbarHanler({ message: 'Заказ успешно удален', linkText: '', type: 'success' })
    } catch (e) {
      setOpenModal(false)
      if (isAxiosError(e)) {
        const error = e as AxiosError<{ status: number; message: string }>
        snackbarHanler({ message: error.response?.data.message, linkText: '', type: 'error' })
      }
    }
  }

  const searchTermHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const searchCharacters = (word: string) => {
    setQueryParams((prev: any) => {
      return {
        ...prev,
        keyWord: word
      }
    })
  }

  const onChangeHandler = (keyWord: string, value: string | number | boolean) => {
    setQueryParams((prev) => ({
      ...prev,
      [keyWord]: value
    }))
  }

  const handlerChangePage = (newPage: number) => {
    searchParams.set('page', `${newPage}`)
    setSearchParams(searchParams)
    setQueryParams((prev) => {
      return {
        ...prev,
        page: newPage
      }
    })
    setPagePagination((prev) => ({
      ...prev,
      currentPage: newPage
    }))
  }

  const handleStartDateChange = (start: Date) => {
    const startDate = new Date(start)

    setQueryParams((prev: any) => {
      return {
        ...prev,
        from: startDate
      }
    })
  }

  const handleEndDateChange = (end: Date) => {
    const endDate = new Date(end)

    setQueryParams((prev: any) => {
      return {
        ...prev,
        before: endDate
      }
    })
  }

  const onFirstChange = (newValue: Date) => {
    handleStartDateChange(newValue)
  }

  const onSecondChange = (newValue: Date) => {
    handleEndDateChange(newValue)
  }
  const statusChangeHandler = (statusName: string) => {
    if (statusName === 'PENDING') {
      return 'В ожидании'
    } else if (statusName === 'READY_FOR_DELIVERY') {
      return 'В обработке'
    } else if (statusName === 'COURIER_ON_THE_WAY') {
      return 'Курьер в пути'
    } else if (statusName === 'DELIVERED') {
      return 'Доставлены'
    } else if (statusName === 'RECEIVED') {
      return 'Полученный'
    } else if (statusName === 'CANCEL') {
      return 'Отменены'
    } else {
      return statusName
    }
  }
  const chooseDeliveryTypeHandler = async (menuId: number) => {
    let typeProduct: string | undefined
    if (delivered) {
      if (menuId === 1) {
        typeProduct = 'В ожидании'
      } else if (menuId === 2) {
        typeProduct = 'Готов к выдаче'
      } else if (menuId === 3) {
        typeProduct = 'Получен'
      } else if (menuId === 4) {
        typeProduct = 'Отменить'
      } else {
        return typeProduct
      }
    } else {
      if (menuId === 1) {
        typeProduct = 'В ожидании'
      } else if (menuId === 2) {
        typeProduct = 'Готов к выдаче'
      } else if (menuId === 3) {
        typeProduct = 'Курьер в пути'
      } else if (menuId === 4) {
        typeProduct = 'Доставлен'
      } else if (menuId === 5) {
        typeProduct = 'Отменить'
      } else {
        return typeProduct
      }
    }
    try {
      const statusData = {
        id: getStatusId,
        status: typeProduct
      }
      await postOrderStatusRequest(statusData)
      setAnchorEl(null)
      getOrder()
      snackbarHanler({ message: 'Статус успешно изменен', type: 'success', link: '' })
    } catch (e) {
      if (isAxiosError(e)) {
        const error = e as AxiosError<{ status: number; message: string }>
        snackbarHanler({ message: error.response?.data.message, linkText: '', type: 'error' })
      }
    }
  }
  const columns: Column<Row>[] = useMemo(
    () => [
      {
        header: 'ID',
        key: 'id',
        index: true
      },
      {
        header: 'ФИО',
        key: 'fullName'
      },
      {
        header: 'Номер/дата',
        key: 'orderNumber',
        render: (row: Row) => {
          return (
            <div onClick={() => goToInnerPageHandler(row)}>
              <StyledOrderNumber>{row.orderNumber}</StyledOrderNumber>
              <StyledTime>{row.date}</StyledTime>
            </div>
          )
        }
      },
      {
        header: 'Кол-во',
        key: 'quantity',
        cell: '20'
      },
      {
        header: 'Общая сумма',
        key: 'totalPrice',
        cell: '20'
      },
      {
        header: 'Оформление заказа',
        key: 'deliveryType',
        cell: '20',
        render: (row: Row) => {
          return (
            <StyledTitle onClick={() => goToInnerPageHandler(row)}>
              {row.deliveryType ? 'Доставка' : 'Самовывоз'}
            </StyledTitle>
          )
        }
      },
      {
        header: 'Статус',
        key: 'status',
        cell: '20',
        render: (row: Row) => {
          return (
            <StyledStatus onClick={(event) => handleClick(event, row.deliveryType, row.id)}>
              {statusChangeHandler(row.status)}
              {upToArrow ? <ArrowUp /> : <ArrowDown />}
            </StyledStatus>
          )
        }
      },
      {
        header: 'Действия',
        key: 'title',
        render: (row: Row) => {
          return (
            <RenderContainer>
              {
                <IconButtons
                  icon={<DeleteIcon />}
                  onClick={() => openModalHandler(row.id, row.fullName)}
                />
              }
            </RenderContainer>
          )
        }
      }
    ],
    []
  )
  const tabs = useMemo(
    () => [
      {
        id: 1,
        label: 'В ожидании',
        value: 'В ожидании'
      },
      {
        id: 2,
        label: 'В обработке',
        value: 'В обработке'
      },
      {
        id: 3,
        label: 'Курьер в пути',
        value: 'Курьер в пути'
      },
      {
        id: 4,
        label: 'Доставлены',
        value: 'Доставлены'
      },
      {
        id: 5,
        label: 'Полученный',
        value: 'Полученный'
      },
      {
        id: 6,
        label: 'Отменены',
        value: 'Отменены'
      }
    ],
    []
  )
  const updatedTab = tabs.map((tab) => ({
    ...tab,
    Component: (
      <InProcessingOrders
        queryParams={queryParams}
        onChangeHandler={onChangeHandler}
        handlerChangePage={handlerChangePage}
        onFirstChange={onFirstChange}
        onSecondChange={onSecondChange}
        pagePagination={pagePagination}
        order={order}
        columns={columns}
        goToInnerPageHandler={goToInnerPageHandler}
      />
    )
  }))

  return {
    updatedTab,
    columns,
    chooseDeliveryTypeHandler,
    searchTermHandler,
    searchCharacters,
    deleteProductHandler,
    handleClose,
    openList,
    closeModalHandler,
    infographics,
    debouncedSearchTerm,
    openModal,
    getIdProduct,
    getNameProduct,
    getOrder,
    queryParams,
    searchTerm,
    delivered,
    anchorEl,
    setQueryParams,
    isLoading,
    setSearchTerm
  }
}
