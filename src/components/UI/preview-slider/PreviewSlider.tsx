import { useState, useRef } from 'react'
import { styled } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ReactComponent as ArrowLeft } from '../../../assets/icons/preview-slider-icons/arrowLeft.svg'
import { ReactComponent as ArrowRight } from '../../../assets/icons/preview-slider-icons/arrowRight.svg'
import IconButtons from '../IconButtons'

const images = [
  'https://s3-alpha-sig.figma.com/img/622d/475f/b660f75948ea28245fbc0f630ba4dfd1?Expires=1682294400&Signature=UDZleFrxKO99C-PKPUqxT~przzwMAUKZz3c906rWmlCIwQIRy9wN6pZr2Yh8eRBlMTyrdZe0LfdbukDRMjaYlJYyWMmtLg-E~42CtzuDbvrhtRzTBplrKSWJiXDKdXOHh6t67jjQDvOlisVIqtGWgvu2oDuerl3EKTKhmSkUSswsmLUlIXBg8GruGtQd~toO4RH6jCoKNOhjoY8awOZmL0j687nhK-qfx9ijbRt-2IXposFJASXUcKq5ZWGV9djF9r231XQkmOVQvfoq-0RB2qVj9Fv8NePjwqS4Pg-Dt7tu7t16coh6N-M8YpLTFSmzDGX6uWz1h04OhNFzmHS8SQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/b0dc/91d0/108ddf77140b990bd1456a79b6d25c27?Expires=1682294400&Signature=m1iZPQUgbYTIQAG3dGSWXSwhGausjMs66shWgBTjEmLCy0VjUPji6cpPIG2lEQs4OD0nMAvLJB8IcBzIH4U8y7idIX7pSlqo7X0kl2WQlqh0Wq4Up36QB4lGCa4rV-AeorL6Eyri7lia0qR07-VmnywXMuN5CtuMrtXWq7blYpGaftxQtAhdyQsloCWwLcGmpP-pSc017fSIqwZHEBLeBYuJNgz6wqFnJTAFyrFdIxnqn0S~piNfMoZFvYnAnIsTkhPjrg22sXrVz9I4e5ollcI4INCiv3ThbqMkhfHv5V4meZrlL~p3WFiJlsiNd5hKqBTpTL0psAGoU4XKQ~ZKDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/c9f3/5f2c/cda6a5135bc2fb479b4410baae1b0f6e?Expires=1682294400&Signature=ICnv7axzjrHktUa2S4R~2uCPz5pMfpGJc-mKP-~~jqaBYOOAJQM5Q-dQA~CwxkuCRv6p9lyMhApZWBtCUzV5usbotH8RpwhYyWgqZW2fnyiS~1ICJk9KiCbXIJ~~1HIH6~GKuaQNCuaXd7-w3jTiRggh4K3ttdDEhNDWNES0IxBu~-yQDSLkTg9V045SNCO8169ccppfIqCLiimpQt4hb4AKHZbuq~C2n6JsuSsdAeOgotLf2dRGSmBvJPBsYD~aR14hnDekWYMzigZMaVEE~OWbjAUxu4wtHOUDNMLvyxmKGKHI074B0gr8pFSngIZjmQxYjDKg2IcJOIUQzu5-sw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/fbf1/58f0/1861f612fcec4fb9768a0fe82b3e5052?Expires=1682294400&Signature=ZWFg8YCeeNKEpK086NOmjq0J~FvMX1KPrj5RqsOU1l87ILNjjU1j7uxdiY8HkRz3TnAmNjg~rhe90SOHX2oef7mC1WZf8AUmzDwBFScWaBEW1fxIXFnYABM0143vFr9QAIqAYLNHHMTIDygSloLI~hvkvrVau0NvWXFlBaR5i-hsBaWBGLolhpCtPzzGp9WH6F5kkQBvL-A4l~VOxDY4uEQMBem0Kp1Gpy-9-6DUWT~0d2jYW5S8WwbSM5UZRdfwmmH9RHKZYj89kaHVvyjSq0d~xzqaFf98nDX8-3ir25Diy80~1Ey9hxjH65zNsRX~fNYfAJqMChEowFwa8-4vhw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/1c24/6dbb/08d23480039afded29dec66d3ebb79e6?Expires=1682294400&Signature=iv-L24ldwdkVM9YFvNCkDzn8u0wLY23J3gFCgNR~bsL~6RPK4FKZWzDfyHKQSIioz003vlKepYyKFTgcZor-pH1qXo5AICx-O4gHEQdX-KZnxZ7tQ4X5JEFtqlIFPoIbTebq53NHKPVps21OknSln~fY2vp8-C2dSKJG72lAM2uYtN0q8tvxA8QdIDdnD4N1l7dwRsgfIOrZCwspaFO8YJ3CwdvKnJfsYqOAATFiNnKSYfRGT5-ZiKTXl3geoy36IRJRaNg3AuCyhgQrSMWn2zZ7l8FiL2S8Y~aUjc7oWOfdV7SrNB2D2qJ9Y1mu28ABSJ-Yh6q-GVDrrcS-lfedmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/6411/20b9/6a6c842eeddaaa86b9f1ce3217a2f9c9?Expires=1682294400&Signature=qVsl0JRfC1JPItQw~O9L6yG5sLFxdVhx3ItdZHLhDRRKip4vK0UlRDmCUOEBjwsw-y6iI97nkbZudU9bEs5vExEk8CcAOq6assf-YHsdwJbFLKQg9ESfP-wAxkhNetMdoQ95DVCqKkg0dZa02QIEpC6Z4FICmh-LoSyVVL0KU6Rl8~p-99lZDC20pWMBqGdEfSdiYDrF4bunxhDRL37QF6PWoc3wUQAnWXaRZbR7QJvqunDLRdlJbWCWsTIoc-APhrYrdd5TiGNnqk9wgulgRKTew27icR1Y8Sf3auyWXgMWXEl0f7IcRHJalN0zwMOxsoRdQabCmPMez7huhqhFbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
]

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

const PreviewSlider = () => {
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
