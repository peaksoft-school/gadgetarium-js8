import Modal from '../modals/Modal'
import { ReactComponent as Tickicon } from '../../../assets/icons//feedback-icons/TickIcon.svg'
import { styled } from '@mui/material'

type PropsSuccessRequest = {
  onClose: () => void
  open: boolean
}

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

export const SuccessfulRequest = ({ open, onClose }: PropsSuccessRequest) => {
  return (
    <>
      <Modal open={open} onClose={onClose}>
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
