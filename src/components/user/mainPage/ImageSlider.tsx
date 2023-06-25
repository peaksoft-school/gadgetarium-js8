import { Typography, styled } from '@mui/material'
import Slider from 'react-slick'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/store'
import { getBunnerImg } from '../../../redux/store/userMainPage/getProduct.thunk'
import Loading from '../../UI/loading/Loading'

const StyledWrapper = styled('section')(() => ({
  paddingTop: '15px',
  width: '100%',
  height: '550px',
  background: '#E9EAEF',

  '.slick-dots li.slick-active button:before': {
    color: '#CB11AB',
    fontSize: '14px'
  },
  '.slick-dots li button:before': {
    color: '#CB11AB',
    fontSize: '8px'
  }
}))

const WrapperStyled = styled('div')(() => ({
  width: '100%',
  height: '550px',
  position: 'relative',
  '.container': {
    width: '500px',
    position: 'absolute',
    left: '100px'
  }
}))
const StyledImg = styled('img')(() => ({
  height: '100%',
  width: '100%',
  mixBlendMode: 'color-burn',
  backgroundPosition: 'center',
  objectFit: 'fill'
}))

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  }

  const { banners, isLoading, message } = useSelector((state: RootState) => state.bannerSlice)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getBunnerImg())
  }, [dispatch])

  return (
    <StyledWrapper>
      {isLoading && <Loading />}
      <Slider {...settings}>
        {message ? (
          <Typography variant="h5" component="h2">
            {message}
          </Typography>
        ) : (
          banners?.map((image) => (
            <WrapperStyled key={image.id} className="container">
              <StyledImg src={image.banner} alt="" />
            </WrapperStyled>
          ))
        )}
      </Slider>
    </StyledWrapper>
  )
}

export default Banner
