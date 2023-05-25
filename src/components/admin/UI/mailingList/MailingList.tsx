import React from 'react'
import Modal from '../../../UI/Modal'
import Input from '../../../UI/inputs/Input'
import Button from '../../../UI/buttons/Button'
import { FormLabel, styled } from '@mui/material'
import { useState } from 'react'
import ImagePicker from './ImagePicker'

import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../redux/store'
import { postMailingList } from '../../../../redux/store/mailingList/mailingList.thunk'

type Props = {
  modalHandler: () => void
  modal: boolean
  data: (newData: {
    name: string
    description: string
    image: string | null
    dateOfStart: string

    dateOfFinish: string
  }) => void
}
export const StyledForm = styled('form')`
  align-items: center;
  padding-bottom: 10px;
`
export const StyledInput = styled(Input)(() => ({
  width: '30rem',
  '&.input': {
    marginTop: '6px'
  },
  require: {
    border: '3px solid red'
  }
}))
const StyledHeader = styled('div')`
  text-align: center;
  margin-bottom: 30px;
`
export const StyledTitle = styled('h1')`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  margin-top: 20px;
  margin-bottom: 25px;
  text-align: center;

  color: #292929;
`
const InputConataienr = styled('div')`
  display: flex;
  justify-content: space-between;
`
const StyledDateInput = styled(Input)(() => ({
  width: '14rem',
  '&.input': {
    marginTop: '6px'
  }
}))
export const StyledFormLable = styled(FormLabel)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;

  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  color: #384255;
`
export const StyledInputContainer = styled('div')`
  margin-bottom: 15px;
`
export const StyledButtonContainer = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`

export const StyledButton = styled(Button)(() => ({
  background: '#fff',
  border: '1px solid #CB11AB',
  borderRadius: '4px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '17px',
  padding: '10px',
  textTransform: 'uppercase',
  '&:active': {
    border: 'none',
    color: '#fff'
  },
  '&:hover': {
    color: '#fff'
  },
  color: '#CB11AB',
  width: '14rem'
}))
const CreateMailingList = ({ modalHandler, modal }: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const [image, setImage] = useState<string>('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState<string>('')
  const [dateOfStart, setDateOfStart] = useState('')
  const [dateOfFinish, setDateOfEnd] = useState('')

  const handleImageSelect = (imageUrl: string) => {
    setImage(imageUrl)
    console.log('Selected image:', imageUrl)
  }

  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const descriptionChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }

  const dateOfEndChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setDateOfEnd(e.target.value)
  }

  const dateOfStartChangeHandler = (e: any) => {
    setDateOfStart(e.target.value)
  }
  const addNewData = (event: any) => {
    event.preventDefault()
    if (
      name.length >= 3 &&
      description.length >= 3 &&
      dateOfStart.length >= 3 &&
      dateOfFinish.length >= 3
    ) {
      const newData = {
        name: name,
        description: description,
        image: image,
        dateOfStart: dateOfStart,
        dateOfFinish: dateOfFinish
      }
      dispatch(postMailingList(newData))
    } else {
      return require
    }
    setName('')
    setImage('')
    setDescription('')
    setDateOfEnd('')
    setDateOfStart('')
  }

  return (
    <Modal onClose={modalHandler} open={modal}>
      <StyledForm onSubmit={addNewData}>
        <StyledHeader>
          <StyledTitle>Создать рассылку</StyledTitle>
          <ImagePicker onSelectImage={handleImageSelect} />
        </StyledHeader>
        <div>
          <StyledInputContainer>
            <StyledFormLable required htmlFor="названиеРассылки">
              Название рассылки
            </StyledFormLable>
            <StyledInput
              type="text"
              value={name}
              required
              id="названиеРассылки"
              placeholder="Введите название зассылки"
              onChange={nameChangeHandler}
            />
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledFormLable required htmlFor="описаниеРассылки">
              Описание рассылки
            </StyledFormLable>
            <StyledInput
              type="text"
              required
              id="описаниеРассылки"
              value={description}
              onChange={descriptionChangeHandler}
              placeholder="Введите описание рассылки"
            />
          </StyledInputContainer>

          <InputConataienr>
            <div>
              <StyledFormLable htmlFor="dateStarts " required>
                Дата начала акции
              </StyledFormLable>
              <StyledDateInput
                id="dateStarts"
                value={dateOfStart}
                type="date"
                required
                onChange={dateOfStartChangeHandler}
              />
            </div>
            <div>
              <StyledFormLable htmlFor="dateEnd" required>
                Дата окончания акции
              </StyledFormLable>
              <StyledDateInput
                placeholder="Выберите дату"
                id="dateEnd"
                value={dateOfFinish}
                required
                type="date"
                onChange={dateOfEndChangeHandler}
              />
            </div>
          </InputConataienr>

          <StyledButtonContainer>
            <StyledButton onClick={modalHandler}>Отмена</StyledButton>
            <StyledButton type="submit">Отправить</StyledButton>
          </StyledButtonContainer>
        </div>
      </StyledForm>
    </Modal>
  )
}

export default CreateMailingList
