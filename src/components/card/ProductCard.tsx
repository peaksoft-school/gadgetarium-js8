import { styled } from '@mui/material'
import { ReactComponent as ScaleIcon } from '../../assets/icons/product-icons/scales.svg'
import { ReactComponent as HeartIcon } from '../../assets/icons/product-icons/shape.svg'
import { ReactComponent as BasketIcon } from '../../assets/icons/product-icons/basket.svg'
import { ReactComponent as LikeIcon } from '../../assets/icons/product-icons/like_icon.svg'
import ImageProduct from '../../assets/images/image53.png'
import Button from '../UI/buttons/Button'
import IconButtons from '../UI/IconButtons'
import TextWithEllipsis from './CardText'
import ProductRating from './RatingProduct'

interface ProductType {
  ellipseChildren?: string | React.ReactNode
  ellipseColor?: string
  amount?: number
  productText?: string
  rating?: number
  newPrice?: number
  oldPrice?: number
  basketOnClick?: () => void
  ellipsIconOnClick?: () => void
  scaleIconOnClick?: () => void
  heartIconOnClick?: () => void
  image?: string
  totalRating?: number
}
type EllipseType = {
  ellipseColor: string
}
const StyledIconButton = styled(IconButtons)(() => ({
  padding: 0
}))

const CardContainer = styled('div')(() => ({
  width: '300px',
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
  marginTop: '12px',
  marginLeft: '45px'
}))
const StyledImage = styled('img')(() => ({
  width: '180px',
  height: '236px'
}))
const Title = styled('a')(() => ({
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
  paddingBottom: '8px'
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
export const ProductCard = ({
  ellipseChildren = <LikeIcon />,
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
  image = ImageProduct,
  totalRating = 56
}: ProductType) => {
  return (
    <CardContainer>
      <ContainerIcon>
        <StyledIconButton
          onClick={ellipsIconOnClick}
          icon={
            <StyledEllipseIcon ellipseColor={ellipseColor}>{ellipseChildren}</StyledEllipseIcon>
          }
        />
        <ContainerTwoIcons>
          <StyledIconButton onClick={scaleIconOnClick} icon={<ScaleIcon />} />
          <StyledIconButton onClick={heartIconOnClick} icon={<HeartIcon />} />
        </ContainerTwoIcons>
      </ContainerIcon>
      <StyledArticle>
        <StyledImage src={image} alt="image" />
      </StyledArticle>
      <StyledSection>
        <Title href="#">В наличии ({amount})</Title>
        <StyledParagraph>
          <TextWithEllipsis text={productText} />
        </StyledParagraph>
        <ProductRating rating={rating} totalRating={totalRating} />
        <StyledContainerPricesAndButton>
          <StyledContainerPrices>
            <StyledNewPrice>{newPrice} с</StyledNewPrice>
            <StyledOldPrice> {oldPrice}с</StyledOldPrice>
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
