import { styled } from '@mui/material'
import Modal from '../../../components/UI/modals/Modal'
import Button from '../../../components/UI/buttons/Button'

interface Props {
  openModal: boolean
  closeModalHandler: () => void
  deleteHandler: () => void
  text?: string
}
const ModalContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '',
  paddingLeft: '60px',
  paddingRight: '60px',
  p: {
    color: '#292929',
    fontFamily: 'Inter, sans-serif',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '140%',
    textAlign: 'center'
  }
}))

const DeleteModalButton = styled(Button)(() => ({
  backgroundColor: '#CB11AB',
  padding: '0.5rem 1.5rem',
  borderRadius: '4px',
  color: '#fff',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '19px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#991984',
    color: '#ffff'
  }
}))

const CancelModalButton = styled(Button)(() => ({
  backgroundColor: '#fff',
  padding: '0.45rem 1rem',
  borderRadius: '4px',
  border: '1px solid #CB11AB',
  color: '#CB11AB',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '1rem',
  lineHeight: '19px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#991984',
    color: '#ffff'
  }
}))

const ModalButtonContainers = styled('div')(() => ({
  marginTop: '1rem',
  display: 'flex',
  justifyContent: 'space-around'
}))
const Title = styled('p')(() => ({
  width: '25rem'
}))
export const DeleteModalOrder = ({ openModal, closeModalHandler, deleteHandler, text }: Props) => {
  return (
    <Modal open={openModal} onClose={closeModalHandler}>
      <ModalContainer>
        <Title>{text}</Title>
        <ModalButtonContainers>
          <CancelModalButton onClick={closeModalHandler}>Отменить</CancelModalButton>
          <DeleteModalButton onClick={deleteHandler}>Удалить</DeleteModalButton>
        </ModalButtonContainers>
      </ModalContainer>
    </Modal>
  )
}
