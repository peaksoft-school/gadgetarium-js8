import { useState } from 'react'
import Modal from '../../../UI/modals/Modal'
import Input from '../../../UI/inputs/Input'
import Button from '../../../UI/buttons/Button'
import { styled } from '@mui/material'
import {
  ProductReviewPostType,
  ProductReviewsResquestType,
  postProductReviewByIdRequest,
  updateProductReviewAnswerByIdRequest
} from '../../../../api/product-id/product_idService'
// import { Button, styled } from '@mui/material'

const StyledOutlinedButton = styled(Button)(({ theme }) => ({
  borderColor: theme.customPalette.primary.main,
  color: theme.customPalette.primary.main,
  background: 'none',
  width: '48%',
  '&:hover': {
    borderColor: theme.customPalette.primary.main,
    color: theme.customPalette.primary.mainHover,
    background: 'none'
  }
}))

const StyledContainedButton = styled(Button)(({ theme }) => ({
  width: '48%',
  '&:hover': {
    border: `1 px solid ${theme.customPalette.primary.main}`,
    background: theme.customPalette.primary.mainHover
  }
}))

type CommentModalPropsType = {
  onClose: () => void
  getProductReviews: (reviewRequestObject: ProductReviewsResquestType) => Promise<void>
  reviewId: number
  open: boolean
  edit?: boolean
  value?: string
  reviewsRequestObject: {
    productId: number
    page: number
  }
}

const CommentModal = ({
  reviewId,
  open,
  onClose,
  edit = false,
  value = '',
  getProductReviews,
  reviewsRequestObject
}: CommentModalPropsType) => {
  const [inputValue, setInputValue] = useState(value)

  const inputValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const addCommentAnswer = async (req: ProductReviewPostType) => {
    try {
      const { data } = await postProductReviewByIdRequest(req)
      console.log(data)

      getProductReviews(reviewsRequestObject)
    } catch (error) {
      console.log(error)
    }
  }

  const updateCommentAnswer = async (req: ProductReviewPostType) => {
    try {
      const { data } = await updateProductReviewAnswerByIdRequest(req)
      console.log(data)

      getProductReviews(reviewsRequestObject)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Modal onClose={onClose} open={open}>
      <div style={{ width: '34rem', padding: '2.5rem 2rem', textAlign: 'center' }}>
        {edit ? (
          <h4
            style={{
              marginBottom: '2.25rem',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: ' 24px',
              lineHeight: '32px',
              color: '#292929'
            }}
          >
            Редактировать комментарий
          </h4>
        ) : (
          <h4
            style={{
              marginBottom: '2.25rem',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: ' 24px',
              lineHeight: '32px',
              color: '#292929'
            }}
          >
            Ответ на комментарий
          </h4>
        )}
        <Input
          style={{ minHeight: '8rem', width: '100%' }}
          rows={5}
          value={inputValue}
          onChange={inputValueChangeHandler}
          multiline
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          <StyledOutlinedButton variant="outlined" onClick={onClose}>
            ОТМЕНИТЬ
          </StyledOutlinedButton>
          {edit ? (
            <StyledContainedButton
              onClick={() => {
                const answerObject = {
                  reviewId,
                  answer: inputValue
                }
                updateCommentAnswer(answerObject)
                onClose()
              }}
            >
              ДОБАВИТЬ
            </StyledContainedButton>
          ) : (
            <StyledContainedButton
              onClick={() => {
                const answerObject = {
                  reviewId,
                  answer: inputValue
                }
                addCommentAnswer(answerObject)
                onClose()
              }}
            >
              СОХРАНИТЬ
            </StyledContainedButton>
          )}
        </div>
      </div>
    </Modal>
  )
}

export default CommentModal
