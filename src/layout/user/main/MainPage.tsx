import { Container, styled } from '@mui/material'
import ImageSlider from '../../../components/user/mainPage/ImageSlider'
import MenuProduct from '../../../components/user/mainPage/MenuProduct'
import ReusableServiceCart from '../../../components/user/UI/ReusableServiceCart'
const StyledFirstContainer = styled('div')(() => ({
  width: '100%',
  height: '700px'
}))

const MainPage = () => {
  return (
    <div style={{ background: '#E8E8E8' }}>
      <StyledFirstContainer>
        <ImageSlider />
      </StyledFirstContainer>
      <Container>
        <MenuProduct />

        <ReusableServiceCart />
      </Container>
    </div>
  )
}

export default MainPage
