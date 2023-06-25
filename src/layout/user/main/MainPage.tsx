import { Container, styled } from '@mui/material'
import MenuProduct from '../../../components/user/mainPage/MenuProduct'
import ReusableServiceCart from '../../../components/user/UI/ReusableServiceCart'
import Banner from '../../../components/user/mainPage/ImageSlider'

const StyledFirstContainer = styled('div')(() => ({
  width: '100%',
  height: '600px',
  marginBottom: '100px'
}))

const MainPage = () => {
  return (
    <div style={{ background: '#E8E8E8' }}>
      <StyledFirstContainer>
        <Banner />
      </StyledFirstContainer>
      <Container>
        <MenuProduct />

        <ReusableServiceCart />
      </Container>
    </div>
  )
}

export default MainPage
