import React from 'react'
import Modal from '../../../UI/modals/Modal'
import Input from '../../../UI/inputs/Input'
import Button from '../../../UI/buttons/Button'
import { FormLabel, styled } from '@mui/material'
import { useState } from 'react'
import ImagePicker from './ImagePicker'
import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../redux/store'
import {
  postMailingList,
  postS3fileImage
} from '../../../../redux/store/mailingList/mailingList.thunk'
type Props = {
  modalHandler: () => void
  modal: boolean
  data?: (newData: {
    name: string
    description: string
    image: string | null
    dateOfStart: string
    dateOfFinish: string
  }) => void
}
export const StyledForm = styled('form')`
  width: 34rem;
  align-items: center;
  padding: 0.625rem 0.625rem 30px 0.625rem;
`
export const StyledInput = styled(Input)(() => ({
  width: '100%',
  '&.input': {
    marginTop: '.375rem'
  },
  require: {
    border: '.1875rem solid red'
  }
}))
const StyledHeader = styled('div')`
  text-align: center;
  margin-bottom: 1.875rem;
`
export const StyledTitle = styled('h1')`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-top: 1.25rem;
  margin-bottom: 1.5625rem;
  text-align: center;
  color: #292929;
`
const InputConataienr = styled('div')`
  display: flex;
  justify-content: space-between;
`
const StyledDateInput = styled(Input)(() => ({
  width: '16rem',
  '&.input': {
    marginTop: '.375rem'
  }
}))
export const StyledFormLable = styled(FormLabel)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  color: #384255;
`
export const StyledInputContainer = styled('div')`
  margin-bottom: 0.9375rem;
`
export const StyledButtonContainer = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 0.3125rem;
  margin-top: 20px;
`
export const StyledButton = styled(Button)(() => ({
  background: '#fff',
  border: '.0625rem solid #CB11AB',
  borderRadius: '.25rem',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '.875rem',
  lineHeight: '1.0625rem',
  padding: '.625rem',
  textTransform: 'uppercase',
  '&:active': {
    border: 'none',
    color: '#fff'
  },
  '&:hover': {
    color: '#fff'
  },
  color: '#CB11AB',
  width: '16rem'
}))
const CreateMailingList = ({ modalHandler, modal }: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const [image, setImage] = useState<string | File>('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState<string>('')
  const [dateOfStart, setDateOfStart] = useState('')
  const [dateOfFinish, setDateOfEnd] = useState('')

  const handleImageSelect = (imageUrl: File) => {
    setImage(imageUrl)
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
  const addNewData = async (event: any) => {
    event.preventDefault()
    if (
      name.length >= 3 &&
      description.length >= 3 &&
      dateOfStart.length >= 3 &&
      dateOfFinish.length >= 3
    ) {
      const formData = new FormData()
      formData.append('file', image)
      dispatch(postS3fileImage(formData))
        .unwrap()
        .then((data) => {
          const newData = {
            name: name,
            description: description,
            image: data.link,
            dateOfStart: dateOfStart,
            dateOfFinish: dateOfFinish
          }

          dispatch(postMailingList(newData))
        })
    } else {
      return require
    }
    setName('')
    setImage('')
    setDescription('')
    setDateOfEnd('')
    setDateOfStart('')
    modalHandler()
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
              placeholder="Введите название рассылки"
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
                id="dateStarts"
                value={dateOfFinish}
                type="date"
                required
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
