import { styled } from '@mui/material'
import { ReactComponent as EllipseIcon } from '../../assets/icons/EllipseIcon.svg'
import { ReactComponent as ScaleIcon } from '../../assets/icons/Scales.svg'
import { ReactComponent as HeartIcon } from '../../assets/icons/Shape (Stroke).svg'
import { ReactComponent as StarIconEmpty } from '../../assets/icons/StarEmpty.svg'
import { ReactComponent as StarIconFill } from '../../assets/icons/StarFill.svg'
import ImageProduct from '../../assets/images/image53.png'
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
const StyledEllipseIcon = styled(EllipseIcon)(() => ({
  width: '36px',
  height: '36px'
}))

const StyledScaleIcon = styled(ScaleIcon)(() => ({
  width: '26.66px',
  height: '19px',
  marginRight: '16.72px'
}))
const ContainerTwoIcons = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center'
}))
const StyledArticle = styled('article')(() => ({
  marginTop: '12px',
  marginLeft: '50px'
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
  fontSize: '12px',
  lineHeight: '15px',
  color: '#909CB5',
  marginTop: '8px',
  display: 'flex',
  alignItems: 'center'
}))
const StyledStartIconsContainer = styled('span')(() => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '6px',
  marginRight: '5px',
  marginBottom: '16px'
}))
export const ProductCard = () => {
  return (
    <CardContainer>
      <ContainerIcon>
        <StyledEllipseIcon>-10%</StyledEllipseIcon>
        <ContainerTwoIcons>
          <StyledScaleIcon />
          <HeartIcon />
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
            <StarIconFill />
            <StarIconFill />
            <StarIconFill />
            <StarIconFill />
            <StarIconEmpty />
          </StyledStartIconsContainer>
          (56)
        </StyledRating>
        <div>
          <div>
            <span>98 910 с</span>
            <span>109 900 с</span>
          </div>
          <div></div>
        </div>
      </StyledSection>
    </CardContainer>
  )
}
