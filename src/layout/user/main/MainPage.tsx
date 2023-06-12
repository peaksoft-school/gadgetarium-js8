import { Container, styled } from '@mui/material'
import ImageSlider from '../../../components/user/mainPage/ImageSlider'
import MenuProduct from '../../../components/user/mainPage/MenuProduct'
import ReusableServiceCart from '../../../components/user/UI/ReusableServiceCart'
const StyledDiv = styled('div')(() => ({
  width: '100%',
  height: '700px'
}))

const MainPage = () => {
  return (
    <>
      <StyledDiv>
        <ImageSlider />
      </StyledDiv>
      <Container>
        <div>
          <MenuProduct />
        </div>
        <div>
          <ReusableServiceCart />
        </div>
      </Container>
    </>
  )
}

export default MainPage
