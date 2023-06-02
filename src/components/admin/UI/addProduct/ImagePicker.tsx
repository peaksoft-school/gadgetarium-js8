import { BannerItem } from '../../UI/banners/BannerItem'
import { ReactComponent as UploadPicture } from '../../../../assets/images/add_picture.svg'
import { Box, Grid, IconButton, Stack, styled } from '@mui/material'
type Props = {
  imagesClassname: any
  bannerImages: string[]
  handleImageUpload: any
  deleteImage: (id: number) => void
}
const TextBanner = styled('p')(() => ({
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '120%',
  color: '#91969E'
}))

const StyledStack = styled(Stack)(() => ({
  '&.default-image': {
    padding: '15px 15px'
  },
  '&.first-image': {
    padding: '40px 50px'
  },
  '&.second-image': {
    padding: '30px'
  },
  '&.third-image': {
    padding: '30px'
  },
  '&.fourth-image': {
    padding: '30px'
  },
  '&.fifth-image': {
    padding: '30px 20px'
  }
}))

const ContainerImages = styled(Box)(() => ({
  '&.image': {
    background: 'rgba(210, 212, 216, 0.5)',
    width: '380px',
    height: '168px',
    border: '1px dashed #292929',
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
    alignItems: 'center',
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
    alignItems: 'center',
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
  padding: '10px 12px',
  textAlign: 'center'
}))
const StyledDescription = styled('div')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '23px',

  color: '#292929'
}))
const StyledIcon = styled(UploadPicture)(() => ({
  width: '36.67px',
  height: '33.33px',
  marginBottom: '20px'
}))
const ImagePickerAddProduct = ({
  imagesClassname,
  bannerImages,
  handleImageUpload,
  deleteImage
}: Props) => {
  return (
    <>
      <Container>
        <ContainerImages className={`image ${imagesClassname()}`}>
          {bannerImages.length >= 0 && bannerImages.length <= 5 && (
            <div>
              <IconButton color="primary" aria-label="upload picture" component="label">
                <StyledStack className={`default-image ${imagesClassname()}`}>
                  <div>
                    <StyledIcon />
                  </div>
                  <TextBanner>
                    {bannerImages.length > 0 ? (
                      'Добавить фото'
                    ) : (
                      <StyledDescription>
                        <p>Нажмите или перетащите сюда файл </p>
                        <li>Минимальное разрешение - 450x600</li>
                        <li>максимальное количество - 10 фото</li>
                      </StyledDescription>
                    )}
                  </TextBanner>
                </StyledStack>
                <input hidden type="file" onChange={handleImageUpload} multiple accept="image/*" />
              </IconButton>
            </div>
          )}

          {bannerImages.length >= 0 &&
            bannerImages?.map((url, index) => {
              return (
                <Grid key={index} style={{ width: '100%', height: '150px' }}>
                  <BannerItem url={url} id={index} deleteImage={deleteImage} />
                </Grid>
              )
            })}
        </ContainerImages>
      </Container>
    </>
  )
}
export default ImagePickerAddProduct
