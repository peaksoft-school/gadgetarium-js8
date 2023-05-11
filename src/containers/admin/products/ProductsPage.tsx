import React, { useState, useEffect } from 'react'
import { Button, InputBase, Paper, Grid, styled } from '@mui/material'
import ProductsTab from '../../../components/admin/UI/tabs/ProductTab'
import Infographics from '../../../components/admin/product-infographics/Infographics'
import AllProducts from '../../../components/admin/tab-components/AllProducts'
import ProductsOnSale from '../../../components/admin/tab-components/ProductsOnSale'
import FavoriteProducts from '../../../components/admin/tab-components/FavoriteProducts'
import BasketProducts from '../../../components/admin/tab-components/BasketProducts'
import { ReactComponent as SearchIcon } from '../../../assets/icons/header-icons/searchIcon.svg'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/store'
import { getInfographics } from '../../../redux/store/infographics/infographicsThunk'
import { getAllProducts } from '../../../redux/store/products/products.thunk'
import { format } from 'date-fns'
import IconButtons from '../../../components/UI/buttons/IconButtons'
import { PATHS } from '../../../utils/constants/router/routerConsts'

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

const StyledButton = styled(Button)(() => ({
  backgroundColor: '#fff',
  padding: '0.6rem 1rem',
  borderRadius: '4px',
  border: '1px solid #CB11AB',
  color: '#CB11AB',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '1rem',
  lineHeight: '120%',
  textTransform: 'none',
  '&:first-of-type': {
    marginRight: '2rem'
  }
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

const StyledLink = styled(Link)(() => ({
  textDecoration: 'none'
}))

const ProductsPage = () => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch<AppDispatch>()
  const infographics = useSelector((state: RootState) => state.infographics.items)
  const [queryParams, setQueryParams] = useState({
    status: 'все продукты',
    page: 1,
    keyWord: 'keyWord',
    pageSize: 7,
    sortBy: null,
    from: null,
    before: null
  })

  useEffect(() => {
    dispatch(
      getAllProducts({
        ...queryParams,
        from: queryParams.from ? format(queryParams.from, 'yyyy-MM-dd') : null,
        before: queryParams.before ? format(queryParams.before, 'yyyy-MM-dd') : null
      })
    )
  }, [queryParams])

  useEffect(() => {
    dispatch(getInfographics())
  }, [])

  const onChangeHandler = (keyWord: string, value: string | number | boolean) => {
    setQueryParams((prev) => {
      return {
        ...prev,
        [keyWord]: value
      }
    })
  }

  const handleChangePage = (newPage: number) => {
    setQueryParams((prev) => {
      return {
        ...prev,
        page: newPage
      }
    })
  }

  const handleStartDateChange = (start: Date) => {
    const startDate = new Date(start)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setQueryParams((prev: any) => {
      return {
        ...prev,
        from: startDate
      }
    })
  }

  const handleEndDateChange = (end: Date) => {
    const endDate = new Date(end)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      label: 'Все товары',
      value: 'Все товары',
      Component: (
        <AllProducts
          queryParams={queryParams}
          setQueryParams={setQueryParams}
          onChangeHandler={onChangeHandler}
          handleChangePage={handleChangePage}
          onFirstChange={onFirstChange}
          onSecondChange={onSecondChange}
        />
      )
    },
    {
      id: 2,
      label: 'В продаже',
      value: 'В продаже',
      Component: <ProductsOnSale />
    },
    {
      id: 3,
      label: 'В избранном',
      value: 'В избранном',
      Component: <FavoriteProducts />
    },
    {
      id: 4,
      label: 'В корзине',
      value: 'В корзине',
      Component: <BasketProducts />
    }
  ]
  return (
    <Main>
      <FirstContainer>
        <StyledGrid>
          <StyledPaper>
            <InputBase
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Поиск по артикулу или ..."
            />
            <IconButtons icon={<StyledSearchIcon />} />
          </StyledPaper>
          <div>
            <StyledLink to={PATHS.ADMIN.addProducts}>
              <StyledButton>Добавить товар</StyledButton>
            </StyledLink>
            <StyledButton>Создать скидку</StyledButton>
          </div>
        </StyledGrid>
        <ProductsTabContainer>
          <ProductsTab tabs={tabs} defaultValue="Все товары" />
        </ProductsTabContainer>
      </FirstContainer>
      <div>
        <Infographics infographicsData={infographics} />
      </div>
    </Main>
  )
}

export default ProductsPage
