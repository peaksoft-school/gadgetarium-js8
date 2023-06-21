import { styled } from '@mui/material'
import Tippy from '@tippyjs/react'
import { ReactComponent as HeartIcon } from '../../../assets/icons/header-icons/hoveredLikeIcon.svg'
import { ReactComponent as ScaleIcon } from '../../../assets/icons/product-icons/scales.svg'
import { ReactComponent as BasketIcon } from '../../../assets/icons/header-icons/basketIcon.svg'

import ImageProduct from '../../../assets/images/image53.png'
import Button from '../../UI/buttons/Button'
import IconButtons from '../../UI/buttons/IconButtons'
import TextWithEllipsis from './CardText'
import ProductRating from './RatingProduct'
import { StyledIconButtonCart } from '../header/Header'

interface ProductType {
  id: number
  ellipseChildren?: string | React.ReactNode
  ellipseColor?: string
  amount?: number
  productText?: string
  rating?: number
  newPrice?: number | string
  oldPrice?: number | string
  basketOnClick?: () => void
  ellipsIconOnClick?: () => void
  scaleIconOnClick?: () => void
  heartIconOnClick?: () => void
  image?: string
  quantityOfPeople?: number
  inComparisons: boolean
  inFavorites: boolean
}
type EllipseType = {
  ellipseColor: string
}
const StyledIconButtons = styled(IconButtons)(({ activeColor }: { activeColor?: boolean }) => ({
  padding: '5px',

  path: {
    fill: activeColor ? '#CB11AB' : 'gray'
  }
}))
const StyledIconButtonHeart = styled(IconButtons)(({ activeColor }: { activeColor?: boolean }) => ({
  padding: '5px',

  path: {
    fill: activeColor ? '#ef1c11' : 'grey'
  }
}))

const CardContainer = styled('div')(() => ({
  width: '100%',
  borderRadius: '4px',
  boxSizing: 'border-box',
  background: '#fff',
  padding: '10px 14px 16px 10px'
}))
const ContainerIcon = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}))
const StyledEllipseIcon = styled('div')(({ ellipseColor }: EllipseType) => ({
  width: '36px',
  height: '36px',
  backgroundColor: `${ellipseColor}`,
  borderRadius: '100%',
  color: '#fff',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '12px',
  lineHeight: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textTransform: 'capitalize'
}))

const ContainerTwoIcons = styled('div')(() => ({
  width: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}))
const StyledArticle = styled('article')(() => ({
  textAlign: 'center'
}))
const StyledImage = styled('img')(() => ({
  width: '180px',
  height: '236px'
}))
const Title = styled('p')(() => ({
  display: 'block',
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: ' 15px',
  color: '#2FC509',
  marginBottom: '8px',
  textDecoration: 'none'
}))
const StyledParagraph = styled('p')(() => ({
  paddingRight: '22px',
  paddingBottom: '8px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '22px',
  textTransform: 'capitalize'
}))
const StyledSection = styled('section')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  marginTop: '28px',
  marginLeft: '7px'
}))

const StyledButton = styled(Button)(() => ({
  backgroundColor: '#CB11AB',
  ':hover': {
    backgroundColor: '#CB11AB'
  },
  padding: '12px 20px',
  margin: '0px',
  marginRight: '5px'
}))
const StyledBasketTitle = styled('span')(() => ({
  fontWeight: 500,
  fontSize: '14px',
  textTransform: 'uppercase',
  color: '#FFFFFF',
  marginLeft: '7.28px'
}))
const StyledContainerPricesAndButton = styled('div')(() => ({
  marginTop: '16px',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  justifyContent: 'space-between'
}))
const StyledContainerPrices = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column'
}))
const StyledNewPrice = styled('span')(() => ({
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: '130%',
  color: '#292929'
}))
const StyledOldPrice = styled('span')(() => ({
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '135.94%',
  textDecorationLine: 'line-through',
  color: '#909CB5'
}))
const ButtonContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center'
}))
const StyledTippyForCatalog = styled(Tippy)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',

  display: 'flex',
  alignItems: 'center',

  color: '#FFFFFF'
}))
export const ProductCard = ({
  ellipseChildren,
  ellipseColor = '#2C68F5',
  amount = 14,
  productText = 'Смартфон Apple iPhone 13 256gb синий 9(MLP3RULorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cupiditate voluptatem reiciendis deserunt ducimus rem animi accusamus harum temporibus ullam. Placeat eligendi eos delectus cum dolor sunt ea possimus mollitia.',
  rating = 4,
  newPrice = 98910,
  oldPrice = 109900,
  basketOnClick = () => {},
  ellipsIconOnClick = () => {},
  scaleIconOnClick = () => {},
  heartIconOnClick = () => {},
  inComparisons,
  inFavorites,
  image = ImageProduct,
  quantityOfPeople = 56
}: ProductType) => {
  return (
    <CardContainer>
      <ContainerIcon>
        <IconButtons
          onClick={ellipsIconOnClick}
          icon={
            <StyledEllipseIcon ellipseColor={ellipseColor}>{ellipseChildren}</StyledEllipseIcon>
          }
        />
        <ContainerTwoIcons>
          <StyledTippyForCatalog
            interactive={true}
            interactiveBorder={10}
            delay={20}
            trigger="mouseenter"
            content={
              inComparisons ? <h1>Удалить из сравнения </h1> : <h1>Добавить в сравнения </h1>
            }
          >
            <StyledIconButtonCart>
              <StyledIconButtons
                activeColor={inComparisons}
                onClick={scaleIconOnClick}
                icon={<ScaleIcon />}
              />
            </StyledIconButtonCart>
          </StyledTippyForCatalog>

          <StyledTippyForCatalog
            interactive={true}
            interactiveBorder={10}
            delay={20}
            trigger="mouseenter"
            content={inFavorites ? <h1>Добавить в избранное</h1> : <h1>Удалить из избранного</h1>}
          >
            <StyledIconButtonCart>
              <StyledIconButtonHeart
                activeColor={inFavorites}
                onClick={heartIconOnClick}
                icon={<HeartIcon />}
              />
            </StyledIconButtonCart>
          </StyledTippyForCatalog>
        </ContainerTwoIcons>
      </ContainerIcon>
      <StyledArticle>
        <StyledImage src={image} alt="image" />
      </StyledArticle>
      <StyledSection>
        <Title>В наличии ({amount})</Title>
        <StyledParagraph>
          <TextWithEllipsis text={productText} />
        </StyledParagraph>
        <ProductRating rating={rating} quantityOfPeople={quantityOfPeople} />
        <StyledContainerPricesAndButton>
          <StyledContainerPrices>
            <StyledNewPrice>{newPrice}c</StyledNewPrice>
            <StyledOldPrice> {oldPrice}</StyledOldPrice>
          </StyledContainerPrices>
          <ButtonContainer>
            <StyledButton variant="contained" onClick={basketOnClick}>
              <BasketIcon />
              <StyledBasketTitle>В корзину</StyledBasketTitle>
            </StyledButton>
          </ButtonContainer>
        </StyledContainerPricesAndButton>
      </StyledSection>
    </CardContainer>
  )
}
