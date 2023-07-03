import ComparisonPageContent from '../../../components/user/comparison-page/ComparisonPageContent'
import { styled } from '@mui/material'
import ProductTab from './ProductTab'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../hooks/redux/redux'
import { getAllCompareProducts } from '../../../redux/store/compare-products/compareProducts.thunk'
import { getCountCompare } from '../../../redux/store/compare-products/count-compare/countCompare.thunk'
import ComparisonPageContentLaptop from '../../../components/user/comparison-page/ComparisonPageContentLaptop'
import ComparisonPageContentTablet from '../../../components/user/comparison-page/ComparisonPageContentTablet'
import ComparisonPageContentWatches from '../../../components/user/comparison-page/ComparisonPageContentWatches'
import EmptyComparisonPage from './EmtyComparison'

const MainContaner = styled('div')(() => ({
  width: '100%',
  height: '100%',
  paddingTop: '3.9375rem',
  paddingBottom: '10.6875rem',
  backgroundColor: '#E8E8E8'
}))

const StyledNavLink = styled('a')(() => ({
  textDecoration: 'none',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '140%',
  color: '#292929',
  '&:not(:last-of-type)': {
    color: '#91969E'
  },
  '&:not(:last-of-type)::after': {
    margin: '0.25rem',
    content: "'»'",
    color: '#91969E'
  }
}))

const StyledNav = styled('nav')(() => ({
  display: 'flex'
}))

const Title = styled('h3')(() => ({
  fontFamily: 'Ubuntu, sans-serif',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '30px',
  lineHeight: '110%',
  marginTop: '33px'
}))

const InfoContainer = styled('div')(() => ({
  backgroundColor: '#FFFFFF',
  marginTop: '20px',
  width: '100%',
  height: '927px',
  padding: '40px 195px 40px 195px'
}))

const ComparisonPage = () => {
  const { products } = useSelector((state: RootState) => state.compareProducts)
  const { count } = useSelector((state: RootState) => state.countCompare)
  const dispatch = useAppDispatch()
  const [queryParams] = useState({ categoryName: 'Смартфон' })

  useEffect(() => {
    dispatch(getAllCompareProducts(queryParams))
  }, [])

  useEffect(() => {
    dispatch(getCountCompare())
  }, [])

  const tabs = [
    {
      id: 1,
      label: `Смартфоны (${
        count.countCompare.Смартфон === undefined ? 0 : count.countCompare.Смартфон
      })`,
      value: 'Смартфоны',
      Component: <ComparisonPageContent type="SMARTPHONE" data={products} />
    },
    {
      id: 2,
      label: `Ноутбуки (${
        count.countCompare.Ноутбук === undefined ? 0 : count.countCompare.Ноутбук
      })`,
      value: 'Ноутбуки',
      Component: <ComparisonPageContentLaptop type="LAPTOP" data={products} />
    },
    {
      id: 3,
      label: `Планшеты (${
        count.countCompare.Планшет === undefined ? 0 : count.countCompare.Планшет
      })`,
      value: 'Планшеты ',
      Component: <ComparisonPageContentTablet type="TABLET" data={products} />
    },
    {
      id: 4,
      label: `Смарт-часы (${
        count.countCompare['Смарт-часы'] === undefined ? 0 : count.countCompare['Смарт-часы']
      })`,
      value: 'Смарт-часы',
      Component: <ComparisonPageContentWatches type="SMARTWATCHES" data={products} />
    }
  ]
  return (
    <MainContaner>
      <div style={{ marginLeft: '195px' }}>
        <StyledNav>
          <StyledNavLink href="/">Главная</StyledNavLink>
          <StyledNavLink>Сравнение</StyledNavLink>
        </StyledNav>
        <div>
          <Title>Сравнение товаров</Title>
        </div>
      </div>
      {products.length === 0 ? (
        <EmptyComparisonPage />
      ) : (
        <InfoContainer>
          <ProductTab tabs={tabs} defaultValue="Смартфоны" />
        </InfoContainer>
      )}
    </MainContaner>
  )
}

export default ComparisonPage
