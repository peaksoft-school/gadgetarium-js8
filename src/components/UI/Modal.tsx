import { styled } from '@mui/system'
import { Modal as MuiModal } from '@mui/material'
import { Box } from '@mui/material'

const StyledModalContent = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  padding: '1rem',
  borderRadius: '14px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
  zIndex: '30',
  animation: 'slide-down 300ms ease-out forwards',
  width: '40rem',
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)'
}))

type PropsModal = {
  onClose: () => void
  open: boolean
  children?: JSX.Element | JSX.Element[] | string
}

const Modal = ({ children, onClose, open }: PropsModal) => {
  return (
    <MuiModal open={open} onClose={onClose}>
      <Box>
        <StyledModalContent>{children}</StyledModalContent>
      </Box>
    </MuiModal>
  )
}

export default Modal
