import { ChangeEvent, FormEvent, useState } from 'react'
import ImagePicker from '../mailingList/ImagePicker'
import { styled } from '@mui/material'
import {
  StyledButton,
  StyledButtonContainer,
  StyledFormLable,
  StyledInput,
  StyledTitle
} from '../mailingList/MailingList'
import { postBrand } from '../../../../api/addProduct/addProductService'
import Modal from '../../../UI/modals/Modal'
type Props = {
  modalHandler: () => void
  modal: boolean
  getSubCategories: () => void
}
const StyledPickerContainer = styled('div')(() => ({
  width: '100%',
  textAlign: 'center'
}))
const StyledForm = styled('form')(() => ({
  width: '33.75rem'
}))
const AddbrandModal = ({ modal, modalHandler, getSubCategories }: Props) => {
  const [logo, setLogo] = useState<string>('')
  const [name, setName] = useState<string>('')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleImageSelect = (imageUrl: string | any) => {
    setLogo(imageUrl)
  }
  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const addnewBrand = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (name.length >= 3) {
      const newBrand = {
        name: name,
        logo: logo
      }
      try {
        await postBrand(newBrand)
        modalHandler()
        getSubCategories()
      } catch (error) {
        return error
      }
    } else {
      return require
    }
    setName('')
    setLogo('')
  }

  return (
    <Modal open={modal} onClose={modalHandler}>
      <StyledForm onSubmit={addnewBrand}>
        <StyledTitle>Добавление бренда</StyledTitle>{' '}
        <StyledPickerContainer>
          <ImagePicker onSelectImage={handleImageSelect} />
        </StyledPickerContainer>
        <StyledPickerContainer>
          <StyledFormLable required htmlFor="Введите название бренда">
            Название бренда
          </StyledFormLable>
          <StyledInput
            type="text"
            value={name}
            required
            id="Введите название бренда"
            placeholder="Введите название бренда"
            onChange={nameChangeHandler}
          />
        </StyledPickerContainer>
        <div>
          <StyledButtonContainer>
            <StyledButton onClick={modalHandler}>Отмена</StyledButton>
            <StyledButton type="submit">Отправить</StyledButton>
          </StyledButtonContainer>
        </div>
      </StyledForm>
    </Modal>
  )
}

export default AddbrandModal
