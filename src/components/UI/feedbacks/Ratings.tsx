import { Rating, styled } from '@mui/material'
import Button from '../buttons/Button'

const InnerContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '20px',
  padding: '40px 50px'
}))

const MainContainer = styled('div')(() => ({
  background: '#F4F4F4'
}))

const StyledButton = styled(Button)(() => ({
  background: '#CB11AB',
  borderRadius: '4px',
  width: '100%'
}))

const StyledRatingNumber = styled('h1')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '30px',
  lineHeight: '110%',
  color: '#292929',
  display: 'flex',
  gap: '9px'
}))

const StyledRating = styled(Rating)(() => ({
  marginTop: '5px'
}))

const FeedbackPart = styled('div')(() => ({
  marginTop: '20px',
  marginLeft: '30px'
}))

const StyledTitle = styled('div')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '140%',
  color: '#91969E',
  marginTop: '7px'
}))
const StyledStar = styled('p')(() => ({
  display: 'flex',
  gap: '12px'
}))

export const Ratings = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <div>
          <StyledRatingNumber>
            4,5
            <StyledRating name="half-rating" defaultValue={2.5} precision={0.5} readOnly />
          </StyledRatingNumber>
          <StyledTitle>789 отзывов</StyledTitle>
        </div>
        <FeedbackPart>
          <StyledStar>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            <span>5 отзывов</span>
          </StyledStar>
          <StyledStar>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            <span>17 отзывов</span>
          </StyledStar>
          <StyledStar>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> <span>4 отзывов</span>
          </StyledStar>
          <StyledStar>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> <span>2 отзывов</span>
          </StyledStar>
        </FeedbackPart>
      </InnerContainer>
      <StyledButton disabled={false} onClick={() => {}} variant="contained">
        Оставить отзыв
      </StyledButton>
    </MainContainer>
  )
}
