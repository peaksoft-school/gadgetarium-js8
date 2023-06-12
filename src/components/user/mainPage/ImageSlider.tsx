import React, { useEffect, useState } from 'react'

import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import { getBannerImagesService } from '../../../api/mainPage/getBannerService'
import { styled } from '@mui/material'

interface Image {
  banner: string
  id: number
}

const divStyle = {}

const StyledText = styled('div')(() => ({
  fontSize: '20px',
  background: 'none',
  padding: '90px 130px',
  p: {
    width: ' 185px',
    height: '70px',

    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: '24px',
    lineHeight: ' 110%',

    textTransform: 'uppercase',

    color: '#CB11AB',

    flex: 'none',
    order: '0',
    flexGrow: '0'
  },
  h1: {
    width: ' 32rem',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: '3.125rem',
    lineHeight: ' 120%',

    textTransform: 'uppercase',

    color: '#323236'
  },
  h2: {
    width: ' 34rem',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '3.125rem',
    lineHeight: ' 120%',

    textTransform: 'uppercase',

    color: '#58585b'
  }
}))

const StyledSlider = styled(Slide)(() => ({
  width: '100%',
  height: '31.25rem'
}))
const StyledContainer = styled('div')(() => ({
  padding: '1.875rem 0 3.75rem'
}))
const ImageSlider = () => {
  const [images, setImages] = useState<Image[]>([])

  const getImages = async () => {
    try {
      const { data } = await getBannerImagesService()
      setImages(data)
    } catch (error) {}
  }

  useEffect(() => {
    getImages()
  }, [])

  return (
    <StyledContainer>
      <StyledSlider>
        {images.map((image) => (
          <div key={image.id}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${image.banner})`,
                height: '75vh',
                backgroundSize: '100% 100%'
              }}
            >
              <StyledText>
                <p>GADGETARIUM</p>
                <h1>УСПЕЙТЕ КУПИТЬ iPHONE 13 PRO </h1>
                <h2>CО СКИДКОЙ ДО 20%</h2>
              </StyledText>
            </div>
          </div>
        ))}
      </StyledSlider>
    </StyledContainer>
  )
}

export default ImageSlider
