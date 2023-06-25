import { Typography, styled } from '@mui/material'
import Modal from '../../../components/UI/modals/Modal'
import Button from '../../../components/UI/buttons/Button'
import { ReactComponent as Cancel } from '../../../assets/icons/basket-icons/system.svg'
import { useNavigate } from 'react-router-dom'
interface Props {
  onClose: () => void
  open: boolean
  orderNumber: string
}
const Container = styled('div')(() => ({
  padding: '0px 0px 35px 3px',
  width: '563px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  textAlign: 'center'
}))
const Title = styled('h5')(() => ({
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '24px',
  width: '230px',
  margin: '0 auto',
  paddingBottom: '20px',
  paddingTop: '30px'
}))
const Number = styled('h3')(() => ({
  fontWeight: 600,
  fontSize: '20px',
  lineHeight: '24px',
  textAlign: 'center'
}))
const Span = styled('span')(() => ({
  color: '#CB11AB',
  marginLeft: '4px',
  fontSize: '20px'
}))
const StyledTypogaphy = styled(Typography)(() => ({
  padding: '20px 60px',
  textAlign: 'center',
  fontSize: '16px'
}))
const StyledCancel = styled(Cancel)(() => ({
  cursor: 'pointer',
  float: 'right'
}))
export const SuccessModal = ({ onClose, open, orderNumber }: Props) => {
  const navigate = useNavigate()
  const day = new Date().getDate()
  const month = new Date().getMonth()
  const year = new Date().getFullYear()
  return (
    <Modal onClose={onClose} open={open}>
      <Container>
        <StyledCancel onClick={onClose} />
        <Title>Спасибо! Заявка успешна оформлена!</Title>
        <Number>
          Номер заявки <Span>{orderNumber}</Span>
        </Number>
        <StyledTypogaphy>
          Ваш заявка №{orderNumber} от {`${day}.${month + 1}.${year}`} оформлена Вся актуальная
          информация о статусе исполнения заказа придет на указанный email: aza@gmail.com
        </StyledTypogaphy>
        <Button
          onClick={() => {
            navigate('/')
            onClose()
          }}
        >
          Продолжить покупки
        </Button>
      </Container>
    </Modal>
  )
}
