import { ReactComponent as ComeraIcon } from '../../../assets/icons/feedback-icons/CameraIcon.svg'
import { Rating, TextField, styled } from '@mui/material'
import Button from '../buttons/Button'
import Modal from '../modals/Modal'

const Container = styled('form')(() => ({
  padding: '24px 30px '
}))

const StyledTitle = styled('h2')(() => ({
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '30px',
  lineHeight: ' 110%',
  color: '#292929'
}))

const ContainerStars = styled('span')(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  padding: '0px',
  gap: '2px',
  margin: '38px 0px'
}))

const StyledLabel = styled('label')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '150%',
  color: '#384255'
}))

const MultilineInput = styled(TextField)(() => ({
  width: '100%',
  border: '0.1px solid #e1d1d5',
  background: '#F7F7F7',
  borderRadius: '5px',
  '&:focus': {
    border: '4px solid #CB11AB',
    background: '#F4F4F4',
    color: '#292929'
  }
}))

const StyledCommentContainer = styled('div')(() => ({
  marginTop: '40px'
}))

const StyledLinkContainer = styled('div')(() => ({
  marginTop: '12px',
  border: '1px solid #CDCDCD',
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'center',

  '&:hover': {
    border: '1px solid #100d0d',
    background: '#F4F4F4',
    color: '#292929'
  }
}))

const StyledInnerContainer = styled('div')(() => ({
  margin: '40px 53px',
  display: 'flex',
  gap: '23px',
  width: '450px'
}))
const StyledTextLink = styled('p')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '120%',
  color: '#2C68F5',
  marginTop: '-5px'
}))
const StyledButton = styled(Button)(() => ({
  background: '#CB11AB',
  borderRadius: '4px',
  width: '100%',
  marginTop: '20px'
}))

type PropsModal = {
  onSubmit: () => void
  closeHandler: () => void
  open: boolean
}

export const Feedback = ({ onSubmit, open, closeHandler }: PropsModal) => {
  return (
    <Modal open={open} onClose={closeHandler}>
      <Container onSubmit={onSubmit}>
        <StyledTitle>Оставьте свой отзыв</StyledTitle>
        <div>
          <ContainerStars>
            <span>Оценка</span>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </ContainerStars>
          <StyledCommentContainer>
            <StyledLabel htmlFor="">Ваш комментарий</StyledLabel>

            <MultilineInput
              multiline
              rows={5}
              onChange={() => {}}
              placeholder="Напишите комментарий"
            />
          </StyledCommentContainer>
          <StyledLinkContainer>
            <StyledInnerContainer>
              <span>
                <ComeraIcon />
              </span>

              <StyledTextLink>
                Нажмите на ссылку, чтобы выбрать фотографии или просто перетащите их сюда
              </StyledTextLink>
            </StyledInnerContainer>
          </StyledLinkContainer>
        </div>
        <StyledButton disabled={false} type="submit" variant="contained">
          Отправить отзыв
        </StyledButton>
      </Container>
    </Modal>
  )
}
