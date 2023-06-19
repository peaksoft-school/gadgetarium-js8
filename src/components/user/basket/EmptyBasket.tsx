import { useNavigate } from 'react-router-dom'
import Image from '../../../assets/images/basket/sammy-shopping-1 1.png'
import Button from '../../UI/buttons/Button'
import { styled } from '@mui/material'
const ImageContainer = styled('div')(() => ({
  textAlign: 'center'
}))
const Container = styled('div')(() => ({
  padding: '7.5rem 0rem',
  fontFamily: 'Inter',
  fontStyle: 'normal'
}))
const StyledTitle = styled('p')(() => ({
  marginTop: '1.875rem',
  fontWeight: '31.25rem',
  fontSize: '1.5rem',
  lineHeight: '110%',
  textAlign: 'center'
}))
const StyledText = styled('p')(() => ({
  fontWeight: 400,
  fontSize: '1.125rem',
  lineHeight: ' 140.02%',
  marginTop: '1rem',
  textAlign: 'center'
}))
const ContainerButton = styled('div')(() => ({
  marginTop: '1.5rem',
  textAlign: 'center'
}))
const StyledButton = styled(Button)(() => ({
  color: '#ffff',
  fontWeight: 700,
  fontSize: ' .875rem',
  lineHeight: '1.0625rem',
  textAlign: 'center',
  textTransform: 'uppercase',
  padding: '.625rem 1.5rem'
}))
const EmptyBasket = () => {
  const navigate = useNavigate()
  const toMainHandler = () => {
    navigate('/')
  }
  return (
    <Container>
      <ImageContainer>
        <img src={Image} alt="image" />
      </ImageContainer>
      <StyledTitle>Ваша корзина пуста</StyledTitle>
      <StyledText>Но вы всегда можете ее наполнить </StyledText>
      <ContainerButton>
        <StyledButton onClick={toMainHandler}>К покупкам</StyledButton>
      </ContainerButton>
    </Container>
  )
}

export default EmptyBasket
