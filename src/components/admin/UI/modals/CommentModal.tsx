import { useState } from 'react'
import Modal from '../../../UI/modals/Modal'
import Input from '../../../UI/inputs/Input'
import { Button } from '@mui/material'

type CommentModalPropsType = {
  onClose: () => void
  open: boolean
  edit?: boolean
  value?: string
}

const CommentModal = ({ open, onClose, edit = false, value = '' }: CommentModalPropsType) => {
  const [inputValue, setInputValue] = useState(value)

  const inputValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  console.log(value)
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
        <Button onClick={onClose}>Отменить</Button>
        {edit ? <Button>Добавить</Button> : <Button>Сохранить</Button>}
      </div>
    </Modal>
  )
}

export default CommentModal
