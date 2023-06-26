import { Button, Divider, styled } from '@mui/material'
import EmptyComparison from '../../../assets/images/comparison/emptyComparison.png'
import { useNavigate } from 'react-router-dom'

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

const EmptyComparisonPage = () => {
  const navigate = useNavigate()

  return (
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
  )
}

export default EmptyComparisonPage
