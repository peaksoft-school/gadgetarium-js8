import { useEffect, useLayoutEffect, useState } from 'react'
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
  const [inputValue, setInputValue] = useState('')

  useLayoutEffect(() => {
    setInputValue(value)
  }, [value])

  const inputValueChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <Modal onClose={onClose} open={open}>
      <div style={{ width: '34rem' }}>
        {edit ? <h1>Редактировать комментарий</h1> : <h1>Ответ на комментарий</h1>}
        <textarea
          style={{ minHeight: '8rem', width: '100%' }}
          rows={4}
          value={inputValue}
          onChange={inputValueChangeHandler}
        />
        <Button onClick={onClose}>Отменить</Button>
        {edit ? <Button>Добавить</Button> : <Button>Сохранить</Button>}
      </div>
    </Modal>
  )
}

export default CommentModal
