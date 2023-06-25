import ComparisonPageContent from '../../../components/user/comparison-page/ComparisonPageContent'
import { Button, Divider, styled } from '@mui/material'
import ProductTab from './ProductTab'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../hooks/redux/redux'
import { getAllCompareProducts } from '../../../redux/store/compare-products/compareProducts.thunk'
import EmptyComparison from '../../../assets/images/comparison/emptyComparison.png'
import { useNavigate } from 'react-router-dom'
import { getCountCompare } from '../../../redux/store/compare-products/count-compare/countCompare.thunk'
import ComparisonPageContentLaptop from '../../../components/user/comparison-page/ComparisonPageContentLaptop'
import ComparisonPageContentTablet from '../../../components/user/comparison-page/ComparisonPageContentTablet'
import ComparisonPageContentWatches from '../../../components/user/comparison-page/ComparisonPageContentWatches'

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

const InfoContainer2 = styled('div')(() => ({
  backgroundColor: '#E8E8E8',
  width: '100%',
  height: '627px',
  padding: '40px 195px 40px 195px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))

const StyledImg = styled('img')(() => ({
  width: '300px',
  height: '300px'
}))

const StyledDivider = styled(Divider)(() => ({
  marginTop: '1.25rem',
  background: '#CDCDCD',
  width: '77%',
  marginLeft: '11.8rem'
}))

const StyledSecondButton = styled(Button)(() => ({
  padding: '10px 24px',
  gap: '10px',
  width: '150px',
  height: '43px',
  background: '#CB11AB',
  borderRadius: '4px',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '19px',
  textTransform: 'none',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#f200ca'
  }
}))

const StyledText = styled('h2')(() => ({
  color: '#292929',
  fontSize: '24px',
  fontFamily: 'Inter',
  fontWeight: '500',
  lineHeight: '110%'
}))

const StyledText2 = styled('p')(() => ({
  color: '#292929',
  textAlign: 'center',
  fontSize: '18px',
  fontFamily: 'Inter',
  lineHeight: '130%'
}))

const StyledEmptyContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem'
}))

const ComparisonPage = () => {
  const { products } = useSelector((state: RootState) => state.compareProducts)
  const { count } = useSelector((state: RootState) => state.countCompare)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
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
      label: `Смартфоны (${count.countCompare.Смартфон})`,
      value: 'Смартфоны',
      Component: <ComparisonPageContent type="SMARTPHONE" data={products} />
    },
    {
      id: 2,
      label: `Ноутбуки (${count.countCompare.Ноутбук})`,
      value: 'Ноутбуки',
      Component: <ComparisonPageContentLaptop type="LAPTOP" data={products} />
    },
    {
      id: 3,
      label: `Планшеты (${count.countCompare.Планшет})`,
      value: 'Планшеты ',
      Component: <ComparisonPageContentTablet type="TABLET" data={products} />
    },
    {
      id: 4,
      label: `Смарт-часы (${count.countCompare['Смарт Часы']})`,
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
      {products ? (
        <InfoContainer>
          <ProductTab tabs={tabs} defaultValue="Смартфоны" />
        </InfoContainer>
      ) : (
        <>
          <StyledDivider orientation="horizontal" />
          <InfoContainer2>
            <StyledEmptyContainer>
              <StyledImg src={EmptyComparison} />
              <StyledText>Сравнивать пока нечего</StyledText>
              <StyledText2>
                Добавляйте сюда товары, чтобы сравнить их характеристики.
                <br /> Так выбрать станет проще!
              </StyledText2>
              <StyledSecondButton onClick={() => navigate('/')}>К покупкам</StyledSecondButton>
            </StyledEmptyContainer>
          </InfoContainer2>
        </>
      )}
    </MainContaner>
  )
}

export default ComparisonPage
