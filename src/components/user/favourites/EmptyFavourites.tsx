import { useNavigate } from 'react-router-dom'
import Image from '../../../assets/images/favourites/sammy-order-completed-by-a-delivery-girl 1.png'
import Button from '../../UI/buttons/Button'
import { styled } from '@mui/material'
const ImageContainer = styled('div')(() => ({
  textAlign: 'center'
}))
const Container = styled('div')(() => ({
  padding: '120px 0px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  textAlign: 'center'
}))
const StyledTitle = styled('p')(() => ({
  marginTop: '30px',
  fontWeight: '500px',
  fontSize: '24px',
  lineHeight: '110%',
  textAlign: 'center'
}))
const StyledText = styled('p')(() => ({
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: ' 140.02%',
  marginTop: '16px',
  textAlign: 'center'
}))
const ContainerButton = styled('div')(() => ({
  marginTop: '24px',
  textAlign: 'center'
}))
const StyledButton = styled(Button)(() => ({
  color: '#ffff',
  fontWeight: 700,
  fontSize: ' 14px',
  lineHeight: '17px',
  textAlign: 'center',
  textTransform: 'inherit',
  padding: '10px 24px'
}))
const EmptyFavourites = () => {
  const navigate = useNavigate()
  const toMainHandler = () => {
    navigate('/')
  }
  return (
    <Container>
      <ImageContainer>
        <img src={Image} alt="image" />
      </ImageContainer>
      <StyledTitle>В избранном пока пусто</StyledTitle>
      <StyledText>
        Воспользуйтесь поиском или каталогом, выберите нужные товары и добавьте их в избранное!{' '}
      </StyledText>
      <ContainerButton>
        <StyledButton onClick={toMainHandler}>К покупкам</StyledButton>
      </ContainerButton>
    </Container>
  )
}

export default EmptyFavourites
