import { CustomizeCheckbox } from '../../UI/buttons/Check'
import ImageUrl from '../../../assets/images/image fsdaf53.png'
import { ReactComponent as PlusIcon } from '../../../assets/icons/basket-icons/+ (1).svg'
import { ReactComponent as MinusIcon } from '../../../assets/icons/basket-icons/–.svg'
import { ReactComponent as LikeIcon } from '../../../assets/icons/basket-icons/like_icon.svg'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/basket-icons/x.svg'
import { Grid, Rating, styled } from '@mui/material'
import IconButtons from '../../UI/buttons/IconButtons'
import { useState } from 'react'

const ContainerCard = styled('div')(() => ({
  width: '900px',
  marginLeft: '14px',
  display: 'flex',
  padding: '20px 20px 20px 27px',
  backgroundColor: '#ffff',
  borderRadius: '4px'
}))
const StyledGrid = styled(Grid)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: '30px'
}))
const ContainerList = styled('ul')(() => ({
  paddingLeft: '20px',
  width: '370px',
  listStyle: 'none'
}))
const StyledCheckbox = styled(CustomizeCheckbox)(() => ({
  padding: '5px 8px'
}))
const StyledImage = styled('img')(() => ({
  width: '106px',
  height: '131px'
}))
const ContainerImage = styled('div')(() => ({
  marginRight: '27px'
}))
const TitleStyled = styled('li')(() => ({
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: ' 150%'
}))
const RatingStyled = styled('li')(() => ({
  marginTop: '12px',
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: ' 15px',
  color: '#909CB5',
  display: 'flex',
  alignItems: 'center'
}))

const CountStyled = styled('li')(() => ({
  marginTop: '12px',
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: ' 15px',
  color: '#3CDE14'
}))

const PriceStyled = styled('li')(() => ({
  marginTop: '12px',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: ' 140%',
  color: '#384255'
}))
const ContainerInfo = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between'
}))
const Circle = styled('div')(() => ({
  width: '25px',
  height: '25px',
  border: '1px solid #909CB5',
  borderRadius: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))
const ContainerAndPrice = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  padding: '39px 0px 43px 40px'
}))
const StyledTotalPrice = styled('p')(() => ({
  marginLeft: '25px',
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: '22px',
  color: '#292929',
  width: '200px'
}))
const Number = styled('span')(() => ({
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '135.94%',
  color: '#909CB5',
  marginLeft: '4px',
  marginRight: '4px'
}))
const Amount = styled('p')(() => ({
  display: 'flex',
  alignItems: 'center'
}))
const StyledIconButton = styled(IconButtons)(() => ({
  padding: '6px'
}))
const TextStyled = styled('span')(() => ({
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: ' 140%',
  color: '#909CB5'
}))
const FavoritesContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '12px'
}))
const StyledLikeIcon = styled(LikeIcon)(() => ({
  width: '16px',
  height: '13px'
}))
const MiniContainer = styled('label')(() => ({
  display: 'flex',
  alignItems: 'center'
}))

const BasketItem = () => {
  const [isChecked, setIsChecked] = useState(false)
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }
  return (
    <StyledGrid>
      <StyledCheckbox checked={isChecked} onChange={handleCheckboxChange} />
      <ContainerCard>
        <ContainerImage>
          <StyledImage src={ImageUrl} alt="" />
        </ContainerImage>
        <ContainerInfo>
          <ContainerList>
            <TitleStyled>Samsung Galaxy S21 128gb синий 9(MLP3RU)</TitleStyled>
            <RatingStyled>
              Рейтинг
              <Rating
                name="size-small"
                value={5}
                size="small"
                readOnly
                sx={{ fontSize: '15px', marginLeft: '4px', marginRight: '4px' }}
              />
              (138)
            </RatingStyled>
            <CountStyled>В наличии (42шт)</CountStyled>
            <PriceStyled>Код товара: 393478 </PriceStyled>
          </ContainerList>
          <Grid>
            <ContainerAndPrice>
              <Amount>
                <StyledIconButton
                  icon={
                    <Circle>
                      <MinusIcon />
                    </Circle>
                  }
                />
                <Number>1</Number>
                <StyledIconButton
                  icon={
                    <Circle>
                      <PlusIcon />
                    </Circle>
                  }
                />
              </Amount>
              <StyledTotalPrice>1 04 9099675588 с</StyledTotalPrice>
            </ContainerAndPrice>
            <FavoritesContainer>
              <MiniContainer>
                <IconButtons icon={<StyledLikeIcon />} />
                <TextStyled>В избранное</TextStyled>
              </MiniContainer>
              <MiniContainer>
                <IconButtons icon={<DeleteIcon />} />
                <TextStyled>Удалить</TextStyled>
              </MiniContainer>
            </FavoritesContainer>
          </Grid>
        </ContainerInfo>
      </ContainerCard>
    </StyledGrid>
  )
}
export default BasketItem
