import { styled } from '@mui/system'
import { Modal as MuiModal } from '@mui/material'
import { Box } from '@mui/material'

type PropsModalContent = {
  children?: JSX.Element | JSX.Element[] | string
}

const StyledModalContent = styled('div')(() => ({
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  top: '20vh',
  backgroundColor: '#fff',
  padding: '1rem',
  borderRadius: '14px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
  zIndex: '30',
  animation: 'slide-down 300ms ease-out forwards',
  width: '40rem',
  left: 'calc(50% -  20rem)'
}))

const ModalContent = ({ children }: PropsModalContent) => {
  return <StyledModalContent>{children}</StyledModalContent>
}

type PropsModal = {
  onClose: () => void
  open: boolean
  children?: JSX.Element | JSX.Element[] | string
}

const Modal = ({ children, onClose, open }: PropsModal) => {
  return (
    <>
      <MuiModal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <ModalContent>{children}</ModalContent>
        </Box>
      </MuiModal>
    </>
  )
}

export default Modal
