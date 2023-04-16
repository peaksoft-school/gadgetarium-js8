import Modal from '../Modal'
import Button from '../buttons/Button'
import { ReactComponent as Tickicon } from '../../../assets/icons/TickIcon.svg'
import { useState } from 'react'
import { styled } from '@mui/material'

const StyledText = styled('h2')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '22px',
  color: '#292929'
}))

const StyledModalContainer = styled('div')(() => ({
  borderRadius: '4px',
  width: '28.75rem',
  height: '100%',
  textAlign: 'center'
}))

const StyledModalIconContainer = styled('div')(() => ({
  marginTop: '10px',
  marginBottom: '20px'
}))

export const SuccessfulRequest = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const ModalHandler = () => {
    setOpenModal((prevState) => !prevState)
  }

  return (
    <>
      <Button onClick={ModalHandler}>Open Modal</Button>
      <Modal onClose={ModalHandler} open={openModal}>
        <StyledModalContainer>
          <StyledModalIconContainer>
            <Tickicon />
          </StyledModalIconContainer>

          <StyledText>Ваш отзыв был успешно отправлен!</StyledText>
        </StyledModalContainer>
      </Modal>
    </>
  )
}
