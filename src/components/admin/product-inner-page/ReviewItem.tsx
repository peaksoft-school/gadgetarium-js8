import { useState } from 'react'
import { ProductReviewsResquestType, ReviewType } from '../../../api/product-id/product_idService'
import { Rating, styled } from '@mui/material'
import CommentModal from '../UI/modals/CommentModal'

type ReviewItemPropsType = {
  item: ReviewType
  getProductReviews: (reviewRequestObject: ProductReviewsResquestType) => Promise<void>
  reviewsRequestObject: {
    productId: number
    page: number
  }
}

const StyledReviewItemBlock = styled('div')(() => ({
  marginTop: '3.75rem',
  borderBottom: '1px solid #CDCDCD',
  padding: '0.5rem 0'
}))

const StyledUserProfileBlock = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center'
}))

const StyledRatingBlock = styled('div')(() => ({
  fontWeight: 'bold',
  margin: '0.75rem 0',
  display: 'flex',
  alignItems: 'center'
}))

const StyledProfileImage = styled('img')(() => ({
  width: '2.5rem',
  borderRadius: '50%',
  height: '2.5rem'
}))

const StyledDateParagraph = styled('p')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '140%',
  color: 'rgba(0, 0, 0, 0.5)'
}))

const StyledAnswerBlock = styled('div')(() => ({
  background: '#E8E8E8',
  borderRadius: '6px',
  margin: '10px 0',
  padding: '1.25rem',
  width: '95%'
}))

const StyledCommentaryParagraph = styled('p')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '140%',
  color: '#384255',
  margin: '0.3rem 0'
}))

const StyledAnswerText = styled('p')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '140%',
  color: '#384255',
  margin: '0.3rem 0'
}))

const StyledButtonsBlock = styled('div')(() => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end'
}))

const StyledButton = styled('button')(() => ({
  border: 'none',
  color: '#CB11AB',
  fontWeight: '600',
  fontSize: '16px',
  background: 'none',
  marginRight: '1rem',
  padding: '0.5rem',
  '&:hover': {
    color: '#eb17c8'
  },
  '&:active': {
    color: '#d8d3d3'
  }
}))

const ReviewItem = ({ item, getProductReviews, reviewsRequestObject }: ReviewItemPropsType) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [currentAnswer, setCurrentAnswer] = useState('')

  const commentModalHandler = () => {
    setModalOpen((prevState) => !prevState)
  }

  const [isAnswerModalOpen, setAnswerModalOpen] = useState(false)

  const commentAnswerModalHandler = (answer: string) => {
    setAnswerModalOpen((prevState) => !prevState)
    setCurrentAnswer(answer)
  }
  return (
    <>
      <StyledReviewItemBlock>
        <StyledUserProfileBlock>
          <StyledProfileImage src={item.userAvatar} alt="profile-photo" />
          <div style={{ marginLeft: '0.75rem' }}>
            <p style={{ fontWeight: 'bold' }}>{item.fullName}</p>
            <StyledDateParagraph>{item.createdAt}</StyledDateParagraph>
          </div>
        </StyledUserProfileBlock>
        <div style={{ marginLeft: '3rem' }}>
          <StyledRatingBlock>
            Oценка :
            <Rating readOnly value={item.grade} />
          </StyledRatingBlock>
          <StyledCommentaryParagraph>{item.commentary}</StyledCommentaryParagraph>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {item.images !== null
              ? item.images.map((photo, index) => (
                  <div key={index} style={{ width: '100px', height: '100px', margin: '5px' }}>
                    <img
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      src={photo}
                      alt={`Photo ${index + 1}`}
                    />
                  </div>
                ))
              : null}
          </div>
          {item.answer !== null ? (
            <StyledAnswerBlock>
              <p style={{ fontWeight: 700 }}>Ответ от представителя</p>
              <StyledAnswerText>{item.answer}</StyledAnswerText>
            </StyledAnswerBlock>
          ) : null}
        </div>
        <StyledButtonsBlock>
          {item.answer !== null ? (
            <StyledButton onClick={() => commentAnswerModalHandler(item.answer)}>
              Редактировать
            </StyledButton>
          ) : (
            <StyledButton onClick={commentModalHandler}>Ответить</StyledButton>
          )}
        </StyledButtonsBlock>
      </StyledReviewItemBlock>
      {isModalOpen ? (
        <CommentModal
          reviewsRequestObject={reviewsRequestObject}
          reviewId={item.reviewsId}
          getProductReviews={getProductReviews}
          open={isModalOpen}
          onClose={commentModalHandler}
        />
      ) : null}

      {isAnswerModalOpen ? (
        <CommentModal
          reviewsRequestObject={reviewsRequestObject}
          reviewId={item.reviewsId}
          getProductReviews={getProductReviews}
          open={isAnswerModalOpen}
          onClose={() => setAnswerModalOpen(false)}
          edit={true}
          value={currentAnswer}
        />
      ) : null}
    </>
  )
}

export default ReviewItem
