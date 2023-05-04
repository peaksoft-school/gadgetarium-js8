import React, { useRef, useState } from 'react'
import { BannerItem } from './BannerItem'
import Button from '../UI/buttons/Button'
import Modal from '../UI/Modal'
import { ReactComponent as AddPicture } from '../../assets/images/add_picture.svg'
import { Box, Grid, IconButton, Stack, styled } from '@mui/material'

const data: BannerType[] = []
type BannerType = {
  imageUrl: string
  id: string
}

type PropsData = {
  product: BannerType[]
}

const TextBanner = styled('p')(() => ({
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '120%',
  color: '#91969E'
}))
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ffff',
  color: `${theme.customPalette.primary.main}`,
  '&:hover': {
    backgroundColor: `${theme.customPalette.primary.main}`,
    color: '#ffff'
  },
  border: `1px solid ${theme.customPalette.primary.main}`,
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '17px',
  textTransform: 'uppercase',
  padding: '12px 77px'
}))
const StyledStack = styled(Stack)(() => ({
  '&.default-image': {
    padding: '75px 23px'
  },
  '&.first-image': {
    padding: '30px 60px'
  },
  '&.second-image': {
    padding: '10px 30px'
  },
  '&.third-image': {
    padding: '30px 30px'
  },
  '&.fourth-image': {
    padding: '20px 20px',
    marginTop: '20px'
  },
  '&.fifth-image': {
    padding: '40px 20px'
  }
}))
const StyledTitle = styled('h2')(() => ({
  textAlign: 'center',
  fontWeight: 500,
  fontSize: '24px',
  lineHeight: '32px',
  color: '#292929',
  marginBottom: '26px'
}))
const ContainerDefaultImage = styled('div')(() => ({}))
const ContainerImages = styled(Box)(() => ({
  '&.image': {
    backgroundColor: 'rgba(144, 156, 181, 0.2)',
    margin: '0px 140px',
    borderRadius: '4px',
    display: 'flex'
  },
  '&.first-image': {
    padding: '20px',
    maxWidth: '505px',
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    gap: '20px'
  },
  '&.second-image': {
    margin: 0,
    width: '505px',
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    gap: '20px'
  },
  '&.third-image': {
    margin: 0,
    width: '505px',
    diplay: 'flex',
    padding: '20px',
    gap: '20px',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    'div:first-of-type': {
      gridColumn: 'span 3'
    }
  },
  '&.fourth-image': {
    margin: 0,
    width: '505px',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gap: '15px',
    padding: '20px',
    'div:nth-of-type(5)': {
      gridColumn: ' span 2'
    }
  },
  '&.fifth-image': {
    margin: 0,
    width: '505px',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gap: '15px',
    padding: '20px'
  },
  '&.sixth-image': {
    margin: 0,
    width: '505px',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gap: '15px',
    padding: '20px'
  }
}))
const Container = styled('div')(() => ({
  width: '530px',
  maxHeight: '600px',
  padding: '20px 12px',
  textAlign: 'center'
}))
const ContainerButton = styled('div')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  marginTop: '32px',
  display: 'flex',
  justifyContent: 'space-between'
}))

const StyledAddPicture = styled(AddPicture)(({ product }: PropsData) => ({
  width: product.length > 0 ? '44px' : '',
  height: product.length > 0 ? '40px' : ''
}))

function ImageGallery() {
  const [imageUrls, setImageUrls] = useState<BannerType[]>(data)
  const [banner, setBanner] = useState(false)
  const inputRef = useRef<any>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()

      reader.onload = () => {
        const imageUrl = reader.result as string
        setImageUrls((prevState) => [
          ...prevState,
          { imageUrl: imageUrl, id: Math.random().toString() }
        ])
        inputRef.current.value = ''
      }

      reader.readAsDataURL(file)
    }
  }
  const imagesClassname = () => {
    if (imageUrls.length === 1) {
      return 'first-image'
    } else if (imageUrls.length === 2) {
      return 'second-image'
    } else if (imageUrls.length === 3) {
      return 'third-image'
    } else if (imageUrls.length === 4) {
      return 'fourth-image'
    } else if (imageUrls.length === 5) {
      return 'fifth-image'
    } else if (imageUrls.length === 6) {
      return 'sixth-image'
    }
  }
  const deleteItem = (id: string) => {
    const updatedImageUrls = imageUrls.filter((item) => item.id !== id)
    setImageUrls(updatedImageUrls)
  }
  const showBannerModalHanler = () => {
    setBanner(true)
  }
  const closeBannerModalHandler = () => {
    setBanner(false)
    setImageUrls([])
  }

  return (
    <div>
      <>
        <Modal open={banner} onClose={showBannerModalHanler}>
          <Container>
            <StyledTitle>Загрузить баннер</StyledTitle>
            <ContainerImages className={`image ${imagesClassname()}`}>
              {imageUrls.length >= 0 && imageUrls.length <= 5 && (
                <ContainerDefaultImage>
                  <IconButton color="primary" aria-label="upload picture" component="label">
                    <StyledStack className={`default-image ${imagesClassname()}`}>
                      <div>
                        <StyledAddPicture product={imageUrls} />
                      </div>
                      <TextBanner>
                        {imageUrls.length > 0
                          ? 'Добавить фото'
                          : 'Нажмите для добавления фотографии'}
                      </TextBanner>
                    </StyledStack>
                    <input
                      hidden
                      type="file"
                      onChange={handleImageUpload}
                      multiple
                      accept="image/*"
                      ref={inputRef}
                    />
                  </IconButton>
                </ContainerDefaultImage>
              )}

              {imageUrls.length >= 0 &&
                imageUrls.map(({ imageUrl, id }) => {
                  return (
                    <Grid key={id} style={{ width: '100%', height: '150px' }}>
                      <BannerItem imageUrl={imageUrl} id={id} key={id} deleteItem={deleteItem} />
                    </Grid>
                  )
                })}
            </ContainerImages>
            <ContainerButton>
              <StyledButton onClick={closeBannerModalHandler}>Отменить</StyledButton>
              <StyledButton>Загрузить</StyledButton>
            </ContainerButton>
          </Container>
        </Modal>
        <button onClick={showBannerModalHanler}>addBanner</button>
      </>
    </div>
  )
}
export default ImageGallery
