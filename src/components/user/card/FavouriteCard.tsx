import { ReactComponent as ScaleIcon } from '../../../assets/icons/product-icons/scales.svg'
import { ReactComponent as HeartIcon } from '../../../assets/icons/product-icons/shape.svg'
import { ReactComponent as BasketIcon } from '../../../assets/icons/product-icons/basket.svg'
import { ReactComponent as LikeIcon } from '../../../assets/icons/product-icons/like_icon.svg'
import { ReactComponent as HoveredLikeIcon } from '../../../assets/icons/header-icons/hoveredLikeIcon.svg'
import { ReactComponent as ComparIconFire } from '../../../assets/icons/favourites/fier-on-compare.svg'
import ImageProduct from '../../../assets/images/image53.png'
import Button from '../../UI/buttons/Button'
import IconButtons from '../../UI/buttons/IconButtons'
import TextWithEllipsis from './CardText'
import ProductRating from './RatingProduct'
import { Box, styled } from '@mui/material'
import { CustomTooltip } from '../../UI/tooltip/CustomTooltip'

interface ProductType {
  ellipseChildren?: string | React.ReactNode
  ellipseColor?: string
  amount?: number
  productText?: string
  rating?: number
  newPrice?: number
  oldPrice?: number
  basketOnClick?: () => void
  scaleIconOnClick?: () => void
  heartIconOnClick?: () => void
  postBasketHandle?: () => void
  image?: string
  quantityOfPeople: number | null
  isFavourite?: boolean
  inComparisons: boolean
}
type EllipseType = {
  ellipseColor: string
}
const StyledIconButton = styled(IconButtons)(() => ({
  padding: '5px'
}))

const CardContainer = styled('div')(() => ({
  width: '350px',
  borderRadius: '4px',
  boxSizing: 'border-box',
  background: '#fff',
  padding: '10px 14px 16px 10px'
}))
const ContainerIcon = styled('div')(({ newPrice }: { newPrice: number }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  float: newPrice === 0 ? 'right' : 'initial'
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
const StyledArticle = styled('article')(({ newPrice }: { newPrice: number }) => ({
  marginTop: newPrice === 0 ? '65px' : '30px',
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
  height: '50px',
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
const StyledOldPrice = styled('span')(({ newPrice }: { newPrice?: number }) => ({
  fontWeight: newPrice === 0 ? 700 : 400,
  fontSize: newPrice === 0 ? '18px' : '16px',
  lineHeight: '135.94%',
  textDecorationLine: newPrice === 0 ? 'none' : 'line-through',
  color: newPrice === 0 ? '#292929' : '#909CB5'
}))
const ButtonContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center'
}))

export const FavouriteCard = ({
  isFavourite,
  inComparisons,
  ellipseChildren = <LikeIcon />,
  ellipseColor = '#2C68F5',
  amount = 14,
  productText = 'Смартфон Apple iPhone 13 256gb синий 9(MLP3RULorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cupiditate voluptatem reiciendis deserunt ducimus rem animi accusamus harum temporibus ullam. Placeat eligendi eos delectus cum dolor sunt ea possimus mollitia.',
  rating = 4,
  newPrice = 98910,
  oldPrice = 109900,
  basketOnClick = () => {},
  scaleIconOnClick = () => {},
  heartIconOnClick = () => {},
  postBasketHandle = () => {},
  image = ImageProduct,
  quantityOfPeople = 56
}: ProductType) => {
  return (
    <CardContainer>
      <ContainerIcon newPrice={newPrice}>
        {newPrice > 0 ? (
          <StyledEllipseIcon ellipseColor={ellipseColor}>{ellipseChildren}</StyledEllipseIcon>
        ) : null}
        <ContainerTwoIcons>
          <CustomTooltip title={inComparisons ? 'Удалить из сравнений ' : 'Добавить к сравнению'}>
            <div>
              <StyledIconButton
                onClick={scaleIconOnClick}
                icon={inComparisons ? <ComparIconFire /> : <ScaleIcon />}
              />
            </div>
          </CustomTooltip>
          <CustomTooltip title="Удалить из избранного">
            <div>
              <StyledIconButton
                onClick={heartIconOnClick}
                icon={isFavourite ? <HoveredLikeIcon /> : <HeartIcon />}
              />
            </div>
          </CustomTooltip>
        </ContainerTwoIcons>
      </ContainerIcon>
      <StyledArticle newPrice={newPrice}>
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
            {newPrice > 0 ? <StyledNewPrice>{newPrice.toFixed(2)} с</StyledNewPrice> : null}
            <StyledOldPrice newPrice={newPrice}> {oldPrice.toFixed(2)}с</StyledOldPrice>
          </StyledContainerPrices>
          <ButtonContainer>
            <StyledButton variant="contained" onClick={basketOnClick}>
              <BasketIcon />
              <StyledBasketTitle onClick={postBasketHandle}>В корзину</StyledBasketTitle>
            </StyledButton>
          </ButtonContainer>
        </StyledContainerPricesAndButton>
      </StyledSection>
    </CardContainer>
  )
}
