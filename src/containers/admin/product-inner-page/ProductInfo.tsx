/* eslint-disable @typescript-eslint/no-shadow */
import { Box, Rating, Tab, Tabs, Typography, styled } from '@mui/material'
import {
  ProductIdRequestType,
  ProductReviewsResquestType,
  ReviewType,
  getProductDocumentPDFByIdRequest,
  getProductReviewsByIdRequest
} from '../../../api/product-id/product_idService'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/product-inner-page-icons/delete-icon.svg'
import { ReactComponent as DocumentPDF } from '../../../assets/icons/product-inner-page-icons/document-list-icon.svg'
import IconButtons from '../../../components/UI/buttons/IconButtons'
import Button from '../../../components/UI/buttons/Button'
import { useState } from 'react'
import PreviewSlider from '../../../components/UI/preview-slider/PreviewSlider'
import {
  ProductReviewsRatingResponseType,
  getProductReviewsRatingByIdRequest
} from '../../../api/product-id/product_idService'
import ReviewItem from '../../../components/admin/product-inner-page/ReviewItem'
import Modal from '../../../components/UI/modals/Modal'
import { useSnackbar } from '../../../hooks/snackbar/useSnackbar'
import { isAxiosError } from 'axios'
type ProductPropType = {
  product: {
    productId: number
    subProductId: number
    logo: string
    images: string[]
    colours: string[]
    name: string
    quantity: number
    itemNumber: string
    rating: number
    countOfReviews: number
    color: string
    percentOfDiscount: number
    price: number
    oldPrice: number
    dateOfIssue: Date | null | string
    characteristics: {
      [key: string]: string
    }
    description: string
    video: string
  }
  getOneProduct: (req: ProductIdRequestType) => Promise<void>
  deleteSubProductById: (ids: number[]) => Promise<void>
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const StyledColorSpan = styled('div')(({ color }) => ({
  background: color,
  width: '30px',
  height: '30px',
  borderRadius: '100%'
}))

const StyledPrice = styled('p')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: '135.94%',
  textDecorationLine: 'line-through',
  color: '#858FA4',
  marginTop: '0.5rem'
}))

const StyledPriceHeadingWithDiscount = styled('h2')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '30px',
  lineHeight: '36px'
}))

const StyledProductNameHeading = styled('h1')(() => ({
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '30px',
  lineHeight: '110%',
  margin: '0 0 3rem'
}))

const StyledAvailableAmount = styled('p')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '19px',
  color: '#2FC509'
}))

const StyledColorButton = styled(IconButtons)(() => ({
  padding: '2px',
  margin: '0.3rem',
  '&.current': {
    border: '3px solid #CB11AB'
  }
}))

const StyledTabs = styled(Tabs)(() => ({
  width: '80%',
  '& .MuiTabs-indicator': {
    display: 'none'
  }
}))

const StyledFirstSection = styled('section')(() => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between'
}))

const StyledSliderArticle = styled('article')(() => ({
  maxWidth: '38%',
  minWidth: '38%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))

const StyledProductCardArticle = styled('article')(() => ({
  width: '55%'
}))

const StyledMainInfoBlock = styled('div')(() => ({
  width: '65%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0,875rem 0',
  marginBottom: '14px'
}))

const ProductArtikulInfo = styled('p')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '19px',
  color: '#292929'
}))

const ProductRatingInfo = styled('p')(() => ({
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '19px',
  color: '#909CB5'
}))

const StyledDetailsAndPriceBlock = styled('div')(() => ({
  display: 'flex',
  borderTop: '1px solid #CDCDCD'
}))

const ProductInfoInDetailsBlock = styled('div')(() => ({
  width: '60%',
  paddingTop: '2rem'
}))

const BrieflyAboutProduct = styled('p')(() => ({
  fontWeight: 700,
  padding: '0.5rem 0 0.3rem'
}))

const StyledCharacteristicsBlock = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between'
}))

const StyledCharacteristicKeys = styled('p')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontSize: '16px',
  lineHeight: '150%',
  color: '#969696',
  fontWeight: 400,
  borderBottom: '1px dashed #969696'
}))

const StyledPriceInfoBlock = styled('div')(() => ({
  width: '40%',
  paddingTop: '1rem'
}))

const StyledPriceInfoSubBlock = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-around',
  borderBottom: '2px solid rgba(133, 143, 164, 0.2)',
  padding: '0.75rem 0'
}))

const StyledDiscountSpan = styled('span')(() => ({
  textAlign: 'center',
  width: '50px',
  background: '#F53B49',
  borderRadius: '50%',
  padding: '1rem 0.5rem',
  color: '#fff',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '14px',
  lineHeight: '15px'
}))

const StyledSecondSection = styled('section')(() => ({
  marginTop: '7.75rem'
}))

const StyledTabsContainer = styled('div')(() => ({
  padding: '2.5rem 0 0rem',
  display: 'flex',
  borderBottom: '1px solid #CDCDCD'
}))

const StyledPdfButtonContainer = styled('section')(() => ({
  width: '20%'
}))

const StyledCharacteristicsTabBlock = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '85%',
  margin: '0 auto'
}))

const StyledTabCharacteristicKeys = styled('p')(() => ({
  borderBottom: '1px solid #CDCDCD',
  marginBottom: '1rem',
  fontWeight: 'bold'
}))

const StyledTabCharacteristicValues = styled('p')(() => ({
  borderBottom: '1px solid #CDCDCD',
  textAlign: 'end',
  marginBottom: '1rem'
}))

const StyledReviewsTabBlock = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between'
}))

const StyledShowMoreReviewsButtonBlock = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  margin: '4rem 0'
}))

const StyledReviewsRatingBlock = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-around',
  background: '#F4F4F4',
  padding: '2rem 2rem'
}))

const StyledRatingBlock = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '5px'
}))

const StyledButton = styled('button')(() => ({
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: ' 150%',
  color: '#384255',
  border: 'none',
  background: 'none',
  padding: '0.5rem',
  '&:hover': {
    background: '#e4e6eb',
    transition: '0.1s',
    borderRadius: '10px'
  },

  '&:active': {
    backgroundСolor: '#333',
    borderСolor: '#333',
    color: '#eee'
  }
}))

const StyledTab = styled(Tab)(() => ({
  '&.Mui-selected': {
    color: '#CB11AB',
    borderBottom: '2px solid #CB11AB',
    paddingBottom: 0
  },
  padding: 2,
  marginRight: '30px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  textTransform: 'initial',
  fontWeight: 500,
  fontSize: '16px',
  color: '#292929'
}))

const ModalContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  padding: '20px 60px',
  p: {
    color: '#292929',
    fontFamily: 'Inter, sans-serif',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '140%',
    textAlign: 'center'
  }
}))

const ConfirmModalButton = styled(Button)(() => ({
  width: '45%',
  backgroundColor: '#CB11AB',
  padding: '0.7rem 1.5rem',
  borderRadius: '4px',
  color: '#fff',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '19px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#991984'
  }
}))

const CancelModalButton = styled(Button)(() => ({
  width: '45%',
  backgroundColor: '#fff',
  padding: '0.7rem 1rem',
  borderRadius: '4px',
  border: '1px solid #CB11AB',
  color: '#CB11AB',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '1rem',
  lineHeight: '19px',
  textTransform: 'none',
  '&:hover': {
    color: '#fff'
    // backgroundColor: '#CB11AB'
  }
}))

const ModalButtonContainers = styled('div')(() => ({
  marginTop: '1rem',
  display: 'flex',
  justifyContent: 'space-between'
}))

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const ProductInfo = ({ product, getOneProduct, deleteSubProductById }: ProductPropType) => {
  const [value, setValue] = useState(0)
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)
  const [pdfLink, setPdfLink] = useState('')
  const [reviewRequestPage, setReviewRequestPage] = useState(3)

  const [reviewsRating, setReviewsRating] = useState<ProductReviewsRatingResponseType>({
    five: 0,
    four: 0,
    three: 0,
    two: 0,
    one: 0,
    rating: 0,
    totalReviews: 0
  })

  const [reviews, setReviews] = useState<ReviewType[]>([])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const openDeleteModalHandler = () => {
    setDeleteModalOpen((prevState) => !prevState)
  }
  const {
    price,
    percentOfDiscount,
    name,
    quantity,
    itemNumber,
    countOfReviews,
    colours,
    color,
    characteristics,
    description,
    images,
    productId,
    video,
    subProductId
  } = product

  // console.log(subProductId)
  let productWithDiscount = price
  if (percentOfDiscount > 0) {
    productWithDiscount = (price / 100) * (100 - percentOfDiscount)
  }

  function addThousandSeparators(num: number | string) {
    return num !== null ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : 0
  }

  const fixedPrice = price.toFixed(2)
  const formattedPrice = addThousandSeparators(fixedPrice)

  const fixedPriceWithDiscount = productWithDiscount.toFixed(2)
  const formattedPriceWithDiscount = addThousandSeparators(fixedPriceWithDiscount)

  const characteristicsKeys = Object.keys(characteristics)
  const characteristicsValues = Object.values(characteristics)

  const { snackbarHanler } = useSnackbar({
    autoClose: 2500,
    position: 'bottom-right'
  })

  const getProductReviewsRating = async (req: number) => {
    try {
      const { data } = await getProductReviewsRatingByIdRequest(req)
      setReviewsRating(data)
    } catch (e) {
      if (isAxiosError(e)) {
        return snackbarHanler({
          message: e.response?.data.message,
          linkText: '',
          type: 'error'
        })
      }
      return snackbarHanler({
        message: 'Что-то пошло не так',
        linkText: '',
        type: 'error'
      })
    }
  }

  // eslint-disable-next-line prefer-const
  // let reviewRequestPage = 3

  const reviewsRequestObject = {
    productId,
    page: reviewRequestPage
  }

  const getProductReviews = async (reviewRequestObject: ProductReviewsResquestType) => {
    try {
      const { data } = await getProductReviewsByIdRequest(reviewRequestObject)
      setReviews(data)
      setReviewRequestPage(reviewRequestPage + 3)
    } catch (e) {
      if (isAxiosError(e)) {
        return snackbarHanler({
          message: e.response?.data.message,
          linkText: '',
          type: 'error'
        })
      }
      return snackbarHanler({
        message: 'Что-то пошло не так',
        linkText: '',
        type: 'error'
      })
    }
  }

  const getProductDocumentPDF = async (id: number) => {
    try {
      const { data } = await getProductDocumentPDFByIdRequest(id)

      setPdfLink(data)
    } catch (e) {
      if (isAxiosError(e)) {
        return snackbarHanler({
          message: e.response?.data.message,
          linkText: '',
          type: 'error'
        })
      }
      return snackbarHanler({
        message: 'Что-то пошло не так',
        linkText: '',
        type: 'error'
      })
    }
  }

  // const handleDownload = () => {
  //   const link = document.createElement('a')
  //   link.href = pdfLink
  //   link.setAttribute('download', `${name}.pdf`)
  //   document.body.appendChild(link)
  //   link.click()
  //   document.body.removeChild(link)
  //   getProductDocumentPDF(product.subProductId)
  // }

  const saveFile = (pdflink: string, filename: string) => {
    fetch(pdflink)
      .then((response) => response.blob())
      .then((blob) => {
        const pdflink = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = pdflink
        link.setAttribute('download', `${filename}.pdf`)
        link.click()
        URL.revokeObjectURL(pdflink)
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <StyledFirstSection>
        <StyledSliderArticle>
          <PreviewSlider images={images} />
        </StyledSliderArticle>
        <StyledProductCardArticle>
          <StyledProductNameHeading>{name}</StyledProductNameHeading>
          <StyledMainInfoBlock>
            <StyledAvailableAmount>В наличии ({quantity})</StyledAvailableAmount>
            <ProductArtikulInfo>Артикул: {itemNumber}</ProductArtikulInfo>
            <ProductRatingInfo>
              <Rating readOnly value={4.5} /> ({countOfReviews})
            </ProductRatingInfo>
          </StyledMainInfoBlock>

          <StyledDetailsAndPriceBlock>
            <ProductInfoInDetailsBlock>
              <div>
                <p style={{ fontWeight: 700 }}>Цвет товара: </p>
                {colours?.map((item) => {
                  return (
                    <StyledColorButton
                      className={`${color === item ? 'current' : 'default'}`}
                      icon={<StyledColorSpan color={item} />}
                      onClick={() => {
                        const obj = {
                          productId: productId,
                          colour: item
                        }
                        getOneProduct(obj)
                      }}
                    />
                  )
                })}
              </div>

              <BrieflyAboutProduct>Коротко о товаре:</BrieflyAboutProduct>
              <StyledCharacteristicsBlock>
                <div style={{ width: '60%' }}>
                  {characteristicsKeys?.map((elem) => {
                    return <StyledCharacteristicKeys>{elem}</StyledCharacteristicKeys>
                  })}
                </div>
                <div style={{ width: '40%' }}>
                  {characteristicsValues.map((elem) => {
                    return <p>{elem}</p>
                  })}
                </div>
              </StyledCharacteristicsBlock>
            </ProductInfoInDetailsBlock>
            <StyledPriceInfoBlock>
              <StyledPriceInfoSubBlock>
                {percentOfDiscount > 0 ? (
                  <StyledDiscountSpan>{percentOfDiscount}%</StyledDiscountSpan>
                ) : null}
                <StyledPriceHeadingWithDiscount>
                  {formattedPriceWithDiscount}
                  <span style={{ borderBottom: '3px solid' }}>c</span>
                </StyledPriceHeadingWithDiscount>
                {percentOfDiscount > 0 ? <StyledPrice>{formattedPrice}с</StyledPrice> : null}
              </StyledPriceInfoSubBlock>
              <div style={{ padding: '1.25rem 0' }}>
                <IconButtons
                  icon={<DeleteIcon />}
                  onClick={() => {
                    openDeleteModalHandler()
                  }}
                />
                <Button onClick={() => {}}>РЕДАКТИРОВАТЬ</Button>
              </div>
            </StyledPriceInfoBlock>
          </StyledDetailsAndPriceBlock>
        </StyledProductCardArticle>
      </StyledFirstSection>

      <StyledSecondSection style={{ marginTop: '7.75rem' }}>
        <StyledTabsContainer>
          <StyledTabs value={value} onChange={handleChange}>
            <StyledTab label="Описание" {...a11yProps(0)} />
            <StyledTab label="Характеристики" {...a11yProps(1)} />
            <StyledTab
              onClick={() => {
                getProductReviewsRating(productId)
                getProductReviews(reviewsRequestObject)
              }}
              label="Отзывы"
              {...a11yProps(2)}
            />
          </StyledTabs>
          <StyledPdfButtonContainer>
            <StyledButton
              onClick={() => {
                saveFile(pdfLink, name)
              }}
            >
              <DocumentPDF /> Скачать документ .pdf
            </StyledButton>
          </StyledPdfButtonContainer>
        </StyledTabsContainer>
        <TabPanel value={value} index={0}>
          <iframe src={video} />
          <p>{description}</p>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <StyledCharacteristicsTabBlock>
            <div style={{ width: '50%' }}>
              {characteristicsKeys.map((elem) => {
                return <StyledTabCharacteristicKeys>{elem}</StyledTabCharacteristicKeys>
              })}
            </div>
            <div style={{ width: '50%' }}>
              {characteristicsValues.map((elem) => {
                return <StyledTabCharacteristicValues>{elem}</StyledTabCharacteristicValues>
              })}
            </div>
          </StyledCharacteristicsTabBlock>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <StyledReviewsTabBlock>
            <div style={{ width: '55%' }}>
              <h2>Отзывы</h2>
              {reviews.length > 0 ? (
                reviews.map((item, index) => {
                  return (
                    <ReviewItem
                      reviewsRequestObject={reviewsRequestObject}
                      getProductReviews={getProductReviews}
                      item={item}
                      key={index}
                    />
                  )
                })
              ) : (
                <h1 style={{ color: 'red' }}>Комментарии не найдены</h1>
              )}

              <StyledShowMoreReviewsButtonBlock>
                {reviewRequestPage >= reviews.length ? (
                  <Button
                    onClick={() => {
                      const reviewsPaginationObject = {
                        productId,
                        page: reviewRequestPage
                      }
                      getProductReviews(reviewsPaginationObject)
                    }}
                  >
                    Показать еще
                  </Button>
                ) : null}
              </StyledShowMoreReviewsButtonBlock>
            </div>
            <div style={{ width: '38%' }}>
              <StyledReviewsRatingBlock>
                <div>
                  <h2>
                    {reviewsRating.rating} <Rating readOnly value={reviewsRating.rating} />
                  </h2>
                  <p>{reviewsRating.totalReviews} отзывов</p>
                </div>
                <div>
                  <StyledRatingBlock>
                    <Rating readOnly value={5} /> {reviewsRating.five} отзывов
                  </StyledRatingBlock>
                  <StyledRatingBlock>
                    <Rating readOnly value={4} /> {reviewsRating.four} отзывов
                  </StyledRatingBlock>
                  <StyledRatingBlock>
                    <Rating readOnly value={3} /> {reviewsRating.three} отзывов
                  </StyledRatingBlock>
                  <StyledRatingBlock>
                    <Rating readOnly value={2} /> {reviewsRating.two} отзывов{' '}
                  </StyledRatingBlock>
                  <StyledRatingBlock>
                    <Rating readOnly value={1} /> {reviewsRating.one} отзывов
                  </StyledRatingBlock>
                </div>
              </StyledReviewsRatingBlock>
            </div>
          </StyledReviewsTabBlock>
        </TabPanel>
      </StyledSecondSection>

      <Modal open={isDeleteModalOpen} onClose={openDeleteModalHandler}>
        <ModalContainer>
          <p>Вы уверены, что хотите удалить этот продукт?</p>
          <ModalButtonContainers>
            <CancelModalButton variant="outlined" onClick={openDeleteModalHandler}>
              Отменить
            </CancelModalButton>
            <ConfirmModalButton
              onClick={() => {
                deleteSubProductById([subProductId])
                setDeleteModalOpen(false)
              }}
            >
              Да
            </ConfirmModalButton>
          </ModalButtonContainers>
        </ModalContainer>
      </Modal>
    </>
  )
}

export default ProductInfo
