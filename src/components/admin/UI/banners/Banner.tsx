import { BannerItem } from './BannerItem'
import Button from '../../../UI/buttons/Button'
import Modal from '../../../UI/modals/Modal'
import { ReactComponent as UploadPicture } from '../../../../assets/images/add_picture.svg'
import { Box, Grid, IconButton, Stack, styled } from '@mui/material'
import { useBanner } from '../../../../hooks/banner/useBanner'
interface PropsType {
  isOpen: boolean
  onClose: () => void
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
const StyledTitle = styled('h2')(() => ({
  textAlign: 'center',
  fontWeight: 500,
  fontSize: '24px',
  lineHeight: '32px',
  color: '#292929',
  marginBottom: '26px'
}))
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

const Banner = ({ isOpen, onClose }: PropsType) => {
  const {
    imagesClassname,
    bannerImages,
    setBannerImages,
    handleImageUpload,
    deleteImage,
    postRequestBanner,
    disableButtonHandler
  } = useBanner()
  const closeModalHandler = () => {
    setBannerImages([])
    onClose()
  }
  const uploadImagerUrlsHandler = () => {
    postRequestBanner()
    setBannerImages([])
    onClose()
  }
  return (
    <>
      <Modal open={isOpen} onClose={onClose}>
        <Container>
          <StyledTitle>Загрузить баннер</StyledTitle>
          <ContainerImages className={`image ${imagesClassname()}`}>
            {bannerImages.length >= 0 && bannerImages.length <= 5 && (
              <div>
                <IconButton color="primary" aria-label="upload picture" component="label">
                  <StyledStack className={`default-image ${imagesClassname()}`}>
                    <div>
                      <UploadPicture />
                    </div>
                    <TextBanner>
                      {bannerImages.length > 0
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
                  />
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
          <ContainerButton>
            <StyledButton onClick={closeModalHandler}>Отменить</StyledButton>
            <StyledButton onClick={uploadImagerUrlsHandler} disabled={disableButtonHandler()}>
              Загрузить
            </StyledButton>
          </ContainerButton>
        </Container>
      </Modal>
    </>
  )
}
export default Banner
