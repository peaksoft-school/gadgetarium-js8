import React, { useState } from 'react'
import { ReviewType } from '../../../api/product-id/product_idService'
import { Rating } from '@mui/material'
import CommentModal from '../UI/modals/CommentModal'

type ReviewItemPropsType = {
  item: ReviewType
}

const ReviewItem = ({ item }: ReviewItemPropsType) => {
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
              onClick={commentModalHandler}
            >
              Ответить
            </button>
          )}
        </div>
      </div>
      {isModalOpen ? <CommentModal open={isModalOpen} onClose={commentModalHandler} /> : null}

      {isAnswerModalOpen ? (
        <CommentModal
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
