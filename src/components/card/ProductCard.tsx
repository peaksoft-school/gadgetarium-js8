import { styled } from '@mui/material'
import { ReactComponent as ScaleIcon } from '../../assets/icons/Scales.svg'
import { ReactComponent as HeartIcon } from '../../assets/icons/Shape (Stroke).svg'
import { ReactComponent as StarIconEmpty } from '../../assets/icons/StarEmpty.svg'
import { ReactComponent as StarIconFill } from '../../assets/icons/StarFill.svg'
import { ReactComponent as BasketIcon } from '../../assets/icons/Basket.svg'
import ImageProduct from '../../assets/images/image53.png'
import Button from '../UI/buttons/Button'
import IconButtons from '../UI/IconButtons'
const CardContainer = styled('div')(() => ({
  width: '300px',
  height: '495px',
  borderRadius: '4px',
  boxSizing: 'border-box',
  background: '#fff',
  padding: '10px 15.05px 21px 10px'
}))
const ContainerIcon = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}))
const StyledEllipseIcon = styled('div')(() => ({
  width: '36px',
  height: '36px',
  backgroundColor: '#F10000',
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
  textTransform: 'uppercase'
}))

const StyledScaleIcon = styled(ScaleIcon)(() => ({
  width: '26.66px',
  height: '19px'
}))
const ContainerTwoIcons = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center'
}))
const StyledArticle = styled('article')(() => ({
  marginTop: '12px',
  marginLeft: '45px'
}))
const StyledImage = styled('img')(() => ({
  width: '180px',
  height: '236px'
}))
const Title = styled('h4')(() => ({
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: ' 15px',
  color: '#2FC509',
  marginBottom: '8px'
}))
const StyledParapgraph = styled('p')(() => ({
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '22px',
  textTransform: 'capitalize',
  color: '#292929'
}))
const StyledSection = styled('section')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  marginTop: '28px'
}))
const StyledRating = styled('p')(() => ({
  fontWeight: 500,
  fontSize: '13px',
  lineHeight: '15px',
  color: '#909CB5',
  marginTop: '8px',
  display: 'flex',
  alignItems: 'center'
}))
const StyledStartIconsContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '6px',
  marginRight: '5px'
}))
const StyledIconButton = styled(IconButtons)(() => ({
  marginLeft: '2px',
  padding: 0,
  width: '12px',
  height: '12px'
}))
const StyledButton = styled(Button)(() => ({
  backgroundColor: '#CB11AB',
  ':hover': {
    backgroundColor: '#CB11AB'
  },
  padding: '10px 18px',
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

export const ProductCard = () => {
  return (
    <CardContainer>
      <ContainerIcon>
        <StyledEllipseIcon>-10%</StyledEllipseIcon>
        <ContainerTwoIcons>
          <IconButtons icon={<StyledScaleIcon />} />
          <IconButtons icon={<HeartIcon />} />
        </ContainerTwoIcons>
      </ContainerIcon>
      <StyledArticle>
        <StyledImage src={ImageProduct} alt="image" />
      </StyledArticle>
      <StyledSection>
        <Title>В наличии (14)</Title>
        <StyledParapgraph>Смартфон Apple iPhone 13 256gb синий 9(MLP3RU...</StyledParapgraph>
        <StyledRating>
          Рейтинг
          <StyledStartIconsContainer>
            <StyledIconButton icon={<StarIconFill />} />
            <StyledIconButton icon={<StarIconFill />} />
            <StyledIconButton icon={<StarIconFill />} />
            <StyledIconButton icon={<StarIconFill />} />
            <StyledIconButton icon={<StarIconEmpty />} />
          </StyledStartIconsContainer>
          (56)
        </StyledRating>
        <StyledContainerPricesAndButton>
          <StyledContainerPrices>
            <StyledNewPrice>98 910 с</StyledNewPrice>
            <StyledOldPrice>109 900 с</StyledOldPrice>
          </StyledContainerPrices>
          <ButtonContainer>
            <StyledButton variant="contained" onClick={() => {}}>
              <BasketIcon />
              <StyledBasketTitle>В корзину</StyledBasketTitle>
            </StyledButton>
          </ButtonContainer>
        </StyledContainerPricesAndButton>
      </StyledSection>
    </CardContainer>
  )
}
