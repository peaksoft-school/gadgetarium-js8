import { Divider, styled } from '@mui/material'
import InfographicsTab from './InfographicsTab'
import { InfographicsTypes } from '../../../api/infographics/infographicsService'

const MainContainer = styled('div')(() => ({
  // width: '20.625rem'
}))

const StyledTitle = styled('p')(() => ({
  fontFamily: 'Manrope, sans-serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '0.75rem',
  lineHeight: '1rem',
  letterSpacing: '0.0625rem',
  textTransform: 'uppercase',
  color: '#292929'
}))

const PricesInfoContainer = styled('div')(() => ({
  display: 'flex',
  marginTop: '1.25rem'
}))

const FirstPriceContainer = styled('div')(() => ({
  marginRight: '0.75rem'
}))

const FirstPrice = styled('p')(() => ({
  color: '#1556DE',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '1.625rem',
  lineHeight: '1.9375rem',
  letterSpacing: '0.0625rem',
  span: {
    fontFamily: 'Manrope, sans-serif',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '1.5625rem',
    lineHeight: '2.125rem',
    letterSpacing: '0.0625rem',
    textDecorationLine: 'underline',
    textTransform: 'lowercase',
    color: '#384255'
  }
}))

const FirstDescription = styled('p')(() => ({
  color: 'rgba(56, 66, 85, 0.7)',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '0.875rem',
  lineHeight: '1.0625rem',
  letterSpacing: '0.0625rem',
  marginTop: '0.25rem'
}))

const FirstAmount = styled('p')(() => ({
  color: '#2C68F5',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '22px',
  lineHeight: '27px',
  letterSpacing: '0.0625rem',
  marginTop: '10px'
}))

const SecondPriceContainer = styled('div')(() => ({
  marginLeft: '0.75rem'
}))

const SecondPrice = styled('p')(() => ({
  color: '#F99808',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '1.625rem',
  lineHeight: '1.9375rem',
  letterSpacing: '0.0625rem',
  span: {
    fontFamily: 'Manrope, sans-serif',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '1.5625rem',
    lineHeight: '2.125rem',
    letterSpacing: '0.0625rem',
    textDecorationLine: 'underline',
    textTransform: 'lowercase',
    color: '#384255'
  }
}))

const SecondDescription = styled('p')(() => ({
  color: 'rgba(56, 66, 85, 0.7)',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '0.875rem',
  lineHeight: '1.0625rem',
  letterSpacing: '0.0625rem',
  marginTop: '0.25rem'
}))

const SecondAmount = styled('p')(() => ({
  color: '#F99808',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '1.375rem',
  lineHeight: '1.6875rem',
  letterSpacing: '0.0625rem',
  marginTop: '0.625rem'
}))

const StyledDivider = styled(Divider)(() => ({
  height: '5.875rem',
  background: '#CDCDCD'
}))

type InfographicsProps = {
  infographicsData: InfographicsTypes
}

const Infographics = ({ infographicsData }: InfographicsProps) => {
  return (
    <MainContainer>
      <StyledTitle>ИНФОГРАФИКА</StyledTitle>
      <PricesInfoContainer>
        <FirstPriceContainer>
          <FirstPrice>
            {infographicsData.redeemedForTheAmount} <span>С</span>
          </FirstPrice>
          <FirstDescription>Выкупили на сумму</FirstDescription>
          <FirstAmount>{infographicsData.countRedeemed} шт</FirstAmount>
        </FirstPriceContainer>
        <StyledDivider orientation="vertical" />
        <SecondPriceContainer>
          <SecondPrice>
            {infographicsData.orderedForTheAmount} <span>С</span>
          </SecondPrice>
          <SecondDescription>Заказали на сумму</SecondDescription>
          <SecondAmount>{infographicsData.countOrdered} шт</SecondAmount>
        </SecondPriceContainer>
      </PricesInfoContainer>
      <InfographicsTab infographicsData={infographicsData} />
    </MainContainer>
  )
}

export default Infographics
