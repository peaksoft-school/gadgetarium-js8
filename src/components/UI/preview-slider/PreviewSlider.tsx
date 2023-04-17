import { useState, useRef } from 'react'
import { styled } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ReactComponent as ArrowLeft } from '../../../assets/icons/preview-slider-icons/arrowLeft.svg'
import { ReactComponent as ArrowRight } from '../../../assets/icons/preview-slider-icons/arrowRight.svg'
import IconButtons from '../IconButtons'

interface PreviewSliderProps {
  images: string[]
}

const ImageSlider = styled('div')(() => ({
  width: '100%',
  maxWidth: '580px',
  margin: '0 auto'
}))

const SliderImage = styled('div')(() => ({
  position: 'relative',
  height: '500px',
  overflow: 'hidden',
  img: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%'
  }
}))

const SliderButtons = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
  button: {
    marginTop: '0.4rem',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: '0.3s ease-in-out'
  }
}))

const SliderSmallImages = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  img: {
    width: '4.375rem',
    height: '70px',
    margin: '1.5rem 0.3rem 1rem 0.3rem',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
      border: '1px solid #CB11AB'
    },
    '&.active': {
      border: '1px solid #CB11AB'
    }
  }
}))

const PreviewSlider: React.FC<PreviewSliderProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef<Slider>(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    afterChange: (index: number) => setCurrentSlide(index)
  }

  const handleThumbnailClick = (index: number) => {
    setCurrentSlide(index)
    sliderRef?.current?.slickGoTo(index)
  }

  const handlePrevClick = () => {
    sliderRef?.current?.slickPrev()
  }

  const handleNextClick = () => {
    sliderRef?.current?.slickNext()
  }

  return (
    <ImageSlider>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image) => (
          <SliderImage key={image}>
            <img src={image} alt="image" />
          </SliderImage>
        ))}
      </Slider>
      <SliderButtons>
        <IconButtons icon={<ArrowLeft onClick={handlePrevClick} />} />
        <SliderSmallImages>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`thumbnail ${currentSlide === index ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </SliderSmallImages>
        <IconButtons icon={<ArrowRight onClick={handleNextClick} />} />
      </SliderButtons>
    </ImageSlider>
  )
}

export default PreviewSlider
