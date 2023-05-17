import {
  Rating,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  styled
} from '@mui/material'
import Button from '../../UI/buttons/Button'
import CutTextFeedback from './CutTextFeedback'
import Picture from '../../../assets/images/feedback/rectangle 6269.png'
import Profile from '../../../assets/images/feedback/Vector.png'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/feedback-icons/admin_delete_icon.svg'
import { ReactComponent as ArrowIcon } from '../../../assets/icons/feedback-icons/arrow _to _down.svg'
import IconButtons from '../../UI/buttons/IconButtons'
const ConainerFeedback = styled('div')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  padding: '40px 100px 280px 100px',
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between'
}))
const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: 600,
  fontSize: ' 16px',
  lineHeight: '19px',
  color: '#FFFFFF',
  padding: '8px 20px',
  marginRight: '12px'
}))
const ContainerButtons = styled('div')(() => ({
  // width: '208px'
}))
const StyledTableBodyCell = styled(TableCell)(() => ({
  padding: '20px 0px',
  textAlign: 'left',
  verticalAlign: 'top'
}))
const StyledTableHeadCell = styled(TableCell)(() => ({
  padding: '0px 0px 12px 0px',
  textAlign: 'left',
  fontWeight: 600,
  fontSize: '14px',
  lineHeight: '17px',
  color: '#384255'
}))
const StyledTypographyOne = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: ' 14px'
}))
const StyledTypographyTwoAndThree = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: ' 20px',
  color: '#909CB5'
}))
const ImageContainer = styled('div')(() => ({
  width: '42px',
  height: '42px',
  borderRadius: '100%',
  backgroundColor: '#D9D9D9',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '16px'
}))
const NameOfUser = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: '14px',
  lineHeight: '17px',
  color: '#292929'
}))
const ContainerUserInfo = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}))
const EmailOfUser = styled(Typography)(() => ({
  marginTop: '4px',
  fontWeight: 500,
  fontSize: '15px',
  lineHeight: '17px',
  color: '#91969E'
}))
const ContainerImageAndTitle = styled('div')(() => ({
  display: 'flex'
}))
const ContainerIconButtons = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center'
}))
const StyledIconButton = styled(IconButtons)(() => ({
  marginBottom: '14px'
}))
const ProfilePhoto = styled('img')(() => ({}))
export const FeedbackPage: React.FC = () => {
  return (
    <ConainerFeedback>
      <section>
        <ContainerButtons>
          <StyledButton>Все отзывы</StyledButton>
          <StyledButton>Неотвеченные +6</StyledButton>
          <StyledButton>Отвеченные</StyledButton>
        </ContainerButtons>
        <Table sx={{ width: 1200, marginTop: '41px' }}>
          <TableHead>
            <TableRow>
              <StyledTableHeadCell>ID</StyledTableHeadCell>
              <StyledTableHeadCell>Фото</StyledTableHeadCell>
              <StyledTableHeadCell>Название товара</StyledTableHeadCell>
              <StyledTableHeadCell>Комментарий</StyledTableHeadCell>
              <StyledTableHeadCell>Все оценки (1775)</StyledTableHeadCell>
              <StyledTableHeadCell>Пользователь</StyledTableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ textAlign: 'left', padding: '0' }}>1</TableCell>
              <StyledTableBodyCell style={{ width: '80px' }}>
                <img src={Picture} />
              </StyledTableBodyCell>
              <StyledTableBodyCell style={{ width: '170px' }}>
                <StyledTypographyOne>Asus</StyledTypographyOne>
                <StyledTypographyTwoAndThree>Модель</StyledTypographyTwoAndThree>
                <StyledTypographyTwoAndThree>Арт. 1212121212</StyledTypographyTwoAndThree>
              </StyledTableBodyCell>
              <StyledTableBodyCell style={{ maxWidth: '240px' }}>
                <CutTextFeedback text="Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик!" />
              </StyledTableBodyCell>
              <StyledTableBodyCell>
                <Rating name="read-only" value={3} readOnly size="small" />
              </StyledTableBodyCell>
              <StyledTableBodyCell style={{ width: '270px' }}>
                <ContainerUserInfo>
                  <ContainerImageAndTitle>
                    <ImageContainer>
                      <ProfilePhoto src={Profile} alt="" />
                    </ImageContainer>
                    <div>
                      <NameOfUser>Адыл Бакытов</NameOfUser>
                      <EmailOfUser>Adyl@mail.com</EmailOfUser>
                    </div>
                  </ContainerImageAndTitle>
                  <ContainerIconButtons>
                    <StyledIconButton icon={<DeleteIcon />} />
                    <StyledIconButton icon={<ArrowIcon />} />
                  </ContainerIconButtons>
                </ContainerUserInfo>
              </StyledTableBodyCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
      <section>инфоГрафика</section>
    </ConainerFeedback>
  )
}
