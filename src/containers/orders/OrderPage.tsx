/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, InputBase, Paper, styled } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import IconButtons from '../../components/UI/buttons/IconButtons'
import { ReactComponent as SearchIcon } from '../../assets/icons/header-icons/searchIcon.svg'
import Infographics from '../../components/admin/product-infographics/Infographics'
import { RootState } from '../../redux/store'
import OrderTab from './tabs/OrderTab'
import { useDebounce } from '../../hooks/useDebounced/useDebounce'
import { useSearchParams } from 'react-router-dom'
import PendingOrders from './tab-order-components/PendingOrders'
import InProcessingOrders from './tab-order-components/InProgressingOrders'
import { CouirerOnTheWay } from './tab-order-components/CouirerOnTheWay'
import DeliveredOrders from './tab-order-components/DeliveredOrders'
import { CanceledOrder } from './tab-order-components/CanceledOrder'

const FirstContainer = styled('div')(() => ({
  width: '81.5625rem',
  marginRight: '5.3125rem'
}))

const StyledPaper = styled(Paper)(() => ({
  p: '0.125rem 0.25rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '32rem',
  border: '1px solid #91969E',
  borderRadius: '8px',
  background: 'transparent'
}))

const StyledGrid = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'space-between'
}))

const Main = styled('main')(() => ({
  margin: '7rem 4.6875rem',
  display: 'flex',
  justifyContent: 'space-between'
}))

const ProductsTabContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '3.125rem'
}))

const StyledSearchIcon = styled(SearchIcon)(() => ({
  path: {
    fill: '#91969E'
  }
}))

const OrderPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const infographics = useSelector((state: RootState) => state.infographics.items)
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  const [searchParams, setSearchParams] = useSearchParams()
  const [queryParams, setQueryParams] = useState({
    status: 'PENDING',
    page: 1,
    keyWord: null,
    pageSize: 7,
    from: null,
    before: null
  })

  const searchTermHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const searchCharacters = (word: any) => {
    setQueryParams((prev) => {
      return {
        ...prev,
        keyWord: word
      }
    })
  }

  useEffect(() => {
    if (debouncedSearchTerm.length) {
      searchCharacters(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm])

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

  const tabs = [
    {
      id: 1,
      label: 'В ожидании',
      value: 'В ожидании',
      Component: <PendingOrders />
    },
    {
      id: 2,
      label: 'В обработке (5)',
      value: 'В обработке (5)',
      Component: (
        <InProcessingOrders
          queryParams={queryParams}
          setQueryParams={setQueryParams}
          onChangeHandler={onChangeHandler}
          handlerChangePage={handlerChangePage}
          onFirstChange={onFirstChange}
          onSecondChange={onSecondChange}
        />
      )
    },
    {
      id: 3,
      label: 'Курьер в пути (3)',
      value: 'Курьер в пути (3)',
      Component: <CouirerOnTheWay />
    },
    {
      id: 4,
      label: 'Доставлены (6)',
      value: 'Доставлены (6)',
      Component: <DeliveredOrders />
    },
    {
      id: 5,
      label: 'Отменены',
      value: 'Отменены',
      Component: <CanceledOrder />
    }
  ]

  return (
    <>
      <Main>
        <FirstContainer>
          <StyledGrid>
            <StyledPaper>
              <InputBase
                value={searchTerm}
                onChange={searchTermHandler}
                placeholder="Поиск по артикулу или ..."
              />
              <IconButtons icon={<StyledSearchIcon />} />
            </StyledPaper>
          </StyledGrid>
          <ProductsTabContainer>
            <OrderTab tabs={tabs} defaultValue="В обработке (5)" />
          </ProductsTabContainer>
        </FirstContainer>
        <Infographics infographicsData={infographics} />
      </Main>
    </>
  )
}

export default OrderPage
