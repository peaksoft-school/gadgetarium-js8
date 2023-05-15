import { Box, Rating, Tab, Tabs, Typography, styled } from '@mui/material'
import { ProductIdRequestType, ReviewType } from '../../../api/product-id/product_idService'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/product-inner-page-icons/delete-icon.svg'
import { ReactComponent as DocumentPDF } from '../../../assets/icons/product-inner-page-icons/document-list-icon.svg'
import IconButtons from '../../../components/UI/buttons/IconButtons'
import Button from '../../../components/UI/buttons/Button'
import { useState } from 'react'
import PreviewSlider from '../../../components/UI/preview-slider/PreviewSlider'
import {
  ProductReviewsRatingResponseType,
  getProductReviewsRatingByIdRequest
} from '../../../api/product-id/product-rating'
import CommentModal from '../../../components/admin/UI/modals/CommentModal'
type ProductPropType = {
  product: {
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
    description: string | null
    video: string | null
    reviews: ReviewType[]
  }
  getOneProduct: (req: ProductIdRequestType) => Promise<void>
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
  //   padding: '1rem 0.5rem'
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
  //   alignSelf: 'flex-end'
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

const ProductInfo = ({ product, getOneProduct }: ProductPropType) => {
  const [value, setValue] = useState(0)
  const [reviewsRating, setReviewsRating] = useState<ProductReviewsRatingResponseType>({
    five: 0,
    four: 0,
    three: 0,
    two: 0,
    one: 0,
    rating: 0,
    totalReviews: 0
  })

  const [isModalOpen, setModalOpen] = useState(false)
  const [currentAnswer, setCurrentAnswer] = useState('')

  const commentModalHandler = (comment: string) => {
    setCurrentAnswer(comment)
    setModalOpen(true)
  }

  const [isAnswerModalOpen, setAnswerModalOpen] = useState(false)

  const commentAnswerModalHandler = (answer: string) => {
    setCurrentAnswer(answer)
    setAnswerModalOpen(true)
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
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
    reviews,
    images,
    subProductId
  } = product

  let productWithDiscount = price
  if (percentOfDiscount > 0) {
    productWithDiscount = (price / 100) * (100 - percentOfDiscount)
  }

  function addThousandSeparators(num: number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }
  const formattedPrice = addThousandSeparators(price)
  const formattedPriceWithDiscount = addThousandSeparators(productWithDiscount)

  const characteristicsKeys = Object.keys(characteristics)
  const characteristicsValues = Object.values(characteristics)

  const getProductReviewsRating = async (req: number) => {
    try {
      const { data } = await getProductReviewsRatingByIdRequest(req)
      console.log(data)
      setReviewsRating(data)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(currentAnswer)
  return (
    <div>
      <section
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between'
        }}
      >
        <article style={{ maxWidth: '38%', border: '1px solid' }}>
          <PreviewSlider images={images} />
        </article>
        <article style={{ width: '55%', border: '1px solid' }}>
          <StyledProductNameHeading>{name}</StyledProductNameHeading>
          <div
            style={{
              width: '62%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0,875rem 0',
              marginBottom: '14px'
            }}
          >
            <StyledAvailableAmount>В наличии ({quantity})</StyledAvailableAmount>
            <p>Артикул: {itemNumber}</p>
            <p style={{ display: 'flex', alignItems: 'center' }}>
              <Rating readOnly value={4.5} /> ({countOfReviews})
            </p>
          </div>

          <div style={{ display: 'flex' }}>
            <div style={{ width: '60%', border: '1px solid', paddingTop: '2rem' }}>
              <div>
                <p style={{ fontWeight: 700 }}>Цвет товара: </p>
                {colours.map((item) => {
                  return (
                    <StyledColorButton
                      className={`${color === item ? 'current' : 'default'}`}
                      icon={<StyledColorSpan color={item} />}
                      onClick={() => {
                        const obj = {
                          productId: 2,
                          color: item,
                          page: 1
                        }
                        getOneProduct(obj)
                      }}
                    />
                  )
                  //  <StyledColorSpan color={item} />
                })}
              </div>

              <p style={{ fontWeight: 700, paddingTop: '0.5rem' }}>Коротко о товаре:</p>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '60%' }}>
                  {characteristicsKeys.map((elem) => {
                    return (
                      <p
                        style={{
                          fontFamily: 'Inter',
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '150%',
                          color: '#969696',
                          fontWeight: 400,
                          borderBottom: '1px dashed #969696'
                        }}
                      >
                        {elem}
                      </p>
                    )
                  })}
                </div>
                <div style={{ width: '40%' }}>
                  {characteristicsValues.map((elem) => {
                    return <p>{elem}</p>
                  })}
                </div>
              </div>
            </div>
            <div style={{ width: '40%', border: '1px solid', paddingTop: '1rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  borderBottom: '2px solid rgba(133, 143, 164, 0.2)',
                  padding: '0.75rem 0'
                }}
              >
                {percentOfDiscount > 0 ? (
                  <span
                    style={{
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
                    }}
                  >
                    {percentOfDiscount}%
                  </span>
                ) : null}
                <StyledPriceHeadingWithDiscount>
                  {formattedPriceWithDiscount}
                  <span style={{ borderBottom: '3px solid' }}>c</span>
                </StyledPriceHeadingWithDiscount>
                {percentOfDiscount > 0 ? <StyledPrice>{formattedPrice}с</StyledPrice> : null}
              </div>
              <div style={{ padding: '1.25rem 0' }}>
                <IconButtons icon={<DeleteIcon />} onClick={() => {}} />
                <Button onClick={() => {}}>РЕДАКТИРОВАТЬ</Button>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section style={{ marginTop: '7.75rem' }}>
        <div
          style={{
            padding: '2.5rem 0 0rem',
            display: 'flex',
            borderBottom: '1px solid #CDCDCD'
          }}
        >
          <StyledTabs value={value} onChange={handleChange}>
            <StyledTab label="Описание" {...a11yProps(0)} />
            <StyledTab label="Характеристики" {...a11yProps(1)} />
            <StyledTab
              onClick={() => {
                getProductReviewsRating(subProductId)
              }}
              label="Отзывы"
              {...a11yProps(2)}
            />
          </StyledTabs>
          <div style={{ width: '20%' }}>
            <StyledButton>
              <DocumentPDF /> Скачать документ .pdf
            </StyledButton>
          </div>
        </div>
        <TabPanel value={value} index={0}>
          <p>{description}</p>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '85%',
              margin: '0 auto'
            }}
          >
            <div style={{ width: '50%' }}>
              {characteristicsKeys.map((elem) => {
                return (
                  <p
                    style={{
                      borderBottom: '1px solid #CDCDCD',
                      marginBottom: '1rem',
                      fontWeight: 'bold'
                    }}
                  >
                    {elem}
                  </p>
                )
              })}
            </div>
            <div style={{ width: '50%' }}>
              {characteristicsValues.map((elem) => {
                return (
                  <p
                    style={{
                      borderBottom: '1px solid #CDCDCD',
                      textAlign: 'end',
                      marginBottom: '1rem'
                    }}
                  >
                    {elem}
                  </p>
                )
              })}
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '55%', border: '1px solid' }}>
              <h2>Отзывы</h2>
              {reviews.map((item) => {
                return (
                  <div
                    style={{
                      marginTop: '3.75rem',
                      borderBottom: '1px solid #CDCDCD',
                      padding: '0.5rem 0'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img
                        style={{ width: '2.5rem', borderRadius: '50%', height: '2.5rem' }}
                        src={item.image}
                        alt="profile-photo"
                      />
                      <div style={{ marginLeft: '0.75rem' }}>
                        <p style={{ fontWeight: 'bold' }}>{item.fullName}</p>
                        <p
                          style={{
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '14px',
                            lineHeight: '140%',
                            color: 'rgba(0, 0, 0, 0.5)'
                          }}
                        >
                          {item.createdAt}
                        </p>
                      </div>
                    </div>
                    <div style={{ marginLeft: '3rem' }}>
                      <p
                        style={{
                          fontWeight: 'bold',
                          margin: '0.75rem 0',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        Oценка
                        <Rating readOnly value={item.grade} />
                      </p>
                      <p
                        style={{
                          fontFamily: 'Inter',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '140%',
                          color: '#384255',
                          margin: '0.3rem 0'
                        }}
                      >
                        {item.commentary}
                      </p>
                      {item.answer !== null ? (
                        <div
                          style={{
                            background: '#E8E8E8',
                            borderRadius: '6px',
                            margin: '10px 0',
                            padding: '1.25rem',
                            width: '95%'
                          }}
                        >
                          <p style={{ fontWeight: 700 }}>Ответ от представителя</p>
                          <p
                            style={{
                              fontFamily: 'Inter',
                              fontStyle: 'normal',
                              fontWeight: 400,
                              fontSize: '16px',
                              lineHeight: '140%',
                              color: '#384255',
                              margin: '0.3rem 0'
                            }}
                          >
                            {item.answer}
                          </p>
                        </div>
                      ) : null}
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end'
                      }}
                    >
                      {item.answer !== null ? (
                        <button
                          style={{
                            border: 'none',
                            color: '#CB11AB',
                            fontWeight: '600',
                            fontSize: '14px',
                            background: 'none',
                            marginRight: '1rem'
                          }}
                          onClick={() => commentAnswerModalHandler(item.answer)}
                        >
                          Редактировать
                        </button>
                      ) : (
                        <button
                          style={{
                            border: 'none',
                            color: '#CB11AB',
                            fontWeight: '600',
                            fontSize: '14px',
                            background: 'none',
                            marginRight: '1rem'
                          }}
                          onClick={() => commentModalHandler(item.commentary)}
                        >
                          Ответить
                        </button>
                      )}
                    </div>
                  </div>
                )
              })}
              <div style={{ display: 'flex', justifyContent: 'center', margin: '4rem 0' }}>
                <Button onClick={() => {}}>Показать еще</Button>
              </div>
            </div>
            <div style={{ width: '38%', border: '1px solid' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  background: '#F4F4F4',
                  padding: '2rem 2rem'
                }}
              >
                <div>
                  <h2>
                    {reviewsRating.rating} <Rating readOnly value={reviewsRating.rating} />
                  </h2>
                  <p>{reviewsRating.totalReviews} отзывов</p>
                </div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Rating readOnly value={5} /> {reviewsRating.five} отзывов
                  </p>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Rating readOnly value={4} /> {reviewsRating.four} отзывов
                  </p>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Rating readOnly value={3} /> {reviewsRating.three} отзывов
                  </p>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Rating readOnly value={2} /> {reviewsRating.two} отзывов{' '}
                  </p>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Rating readOnly value={1} /> {reviewsRating.one} отзывов
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* {isAnswerModalOpen ? ( */}
          <CommentModal
            open={isAnswerModalOpen}
            onClose={() => setAnswerModalOpen(false)}
            edit={true}
            value={currentAnswer}
          />
          {/* ) : null} */}
          <CommentModal
            open={isModalOpen}
            onClose={() => setModalOpen(false)}
            value={currentAnswer}
            edit={true}
          />
        </TabPanel>
      </section>
    </div>
  )
}

export default ProductInfo
