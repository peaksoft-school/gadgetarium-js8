import { Grid, Typography, styled } from '@mui/material'
import { CustomizeCheckbox } from '../../../components/UI/buttons/Check'
import Input from '../../../components/UI/inputs/Input'
import Button from '../../../components/UI/buttons/Button'
import { ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

type Props = {
  chooseSecondCardHandler: () => void
  chooseFirstCardHandler: () => void
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void
  firstName: string
  lastName: string
  changeNameHandler: (event: ChangeEvent<HTMLInputElement>) => void
  changeFullNameHandler: (event: ChangeEvent<HTMLInputElement>) => void
  email: string
  phoneNumber: string
  changeEmailHandler: (event: ChangeEvent<HTMLInputElement>) => void
  changePhoneNumberHandler: (event: ChangeEvent<HTMLInputElement>) => void
  address: string
  changeAddressHandler: (event: ChangeEvent<HTMLInputElement>) => void
  formError: {
    errorFirstName: boolean
    errorLastName: boolean
    errorEmail: boolean
    errorPhoneNumber: boolean
    errorAddress: boolean
  }
}

const Container = styled('div')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  cursor: 'pointer'
}))
const Title = styled('h2')(() => ({
  fontWeight: 700,
  fontSize: ' 24px',
  lineHeight: ' 110%',
  color: '#292929',
  marginBottom: '30px'
}))
const CardContainer = styled('div')(() => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  paddingRight: '70px',
  paddingBottom: '40px',
  borderBottom: '2px solid #CDCDCD'
}))
const SecondCard = styled('div')(({ isCheckedTwo }: { isCheckedTwo: boolean }) => ({
  width: '290px',
  minHeight: '189px',
  backgroundColor: '#fff',
  borderRadius: '5px',
  padding: '26px 17px 26px 12px',
  border: isCheckedTwo ? '2px solid #2FC509' : '2px solid #fff',
  ':hover': {
    border: '2px solid #2FC509'
  }
}))
const FirstCard = styled('div')(({ isCheckedOne }: { isCheckedOne: boolean }) => ({
  width: '290px',
  minHeight: '189px',
  backgroundColor: '#fff',
  borderRadius: '5px',
  padding: '26px 17px 26px 12px',
  border: isCheckedOne ? '2px solid #2FC509' : '2px solid #fff',
  ':hover': {
    border: '2px solid #2FC509'
  }
}))
const FirstLine = styled('div')(() => ({
  display: 'flex',
  alignItems: 'flex-start'
}))
const LineText = styled('p')(() => ({
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: '130%',
  color: '#292929',
  marginTop: '7px'
}))
const Span = styled('span')(() => ({
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '130%',
  color: '#292929'
}))
const StyledTypography = styled(Typography)(() => ({
  marginTop: '10px'
}))
const CustomDataText = styled('h3')(() => ({
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '110%',
  color: '#292929',
  marginTop: '40px',
  marginBottom: '30px'
}))
const FirstLineData = styled('div')(() => ({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: '1fr 1fr',
  gap: '10px'
}))
const StyledInput = styled(Input)(() => ({
  width: '500px'
}))
const StyledInpuNumber = styled(Input)(() => ({
  width: '500px',
  '& input[type="number"]::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0
  },
  '& input[type="number"]::-webkit-outer-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0
  }
}))
const StyledButton = styled(Button)(() => ({
  width: '100%',
  textTransform: 'capitalize',
  marginTop: '20px'
}))
const Star = styled('span')(() => ({
  color: '#f00707'
}))
const PickupAndDelivered = ({
  changeAddressHandler,
  changeEmailHandler,
  changeFullNameHandler,
  changeNameHandler,
  changePhoneNumberHandler,
  chooseFirstCardHandler,
  chooseSecondCardHandler,
  firstName,
  lastName,
  email,
  phoneNumber,
  address,
  formError,
  submitHandler
}: Props) => {
  const order = useSelector((state: RootState) => state.userorder)

  return (
    <Container>
      <Title>{order.isCheckedTwo ? 'Доставка' : 'Варианты доставки'}</Title>
      <CardContainer>
        <FirstCard isCheckedOne={order.isCheckedOne} onClick={chooseFirstCardHandler}>
          <FirstLine>
            <CustomizeCheckbox checked={order.isCheckedOne} changecolor="#2FC509" />
            <Grid>
              <LineText>Самовывоз из магазина</LineText>
              <StyledTypography>
                Забрать 20 июля, <Span>Бесплатно</Span>
              </StyledTypography>
            </Grid>
          </FirstLine>
        </FirstCard>
        <SecondCard isCheckedTwo={order.isCheckedTwo}>
          <FirstLine onClick={chooseSecondCardHandler}>
            <CustomizeCheckbox checked={order.isCheckedTwo} changecolor="#2FC509" />
            <Grid>
              <LineText>Доставка курьером</LineText>
              <StyledTypography>
                Забрать 20 июля, <Span>Бесплатно свыше 10 000 с</Span> до 10 000 с — от 200 с
              </StyledTypography>
            </Grid>
          </FirstLine>
        </SecondCard>
      </CardContainer>
      <Grid>
        <CustomDataText>Личные данные</CustomDataText>
        <form onSubmit={submitHandler}>
          <FirstLineData>
            <Grid>
              <label htmlFor="">
                Имя <Star>*</Star>
              </label>
              <StyledInput
                value={firstName}
                type="text"
                placeholder="Напишите ваше имя"
                onChange={changeNameHandler}
                error={formError.errorFirstName}
              />
            </Grid>
            <Grid>
              <label htmlFor="">
                Фамилия <Star>*</Star>
              </label>
              <StyledInput
                value={lastName}
                type="text"
                placeholder="Напишите вашу фамилию"
                onChange={changeFullNameHandler}
                error={formError.errorLastName}
              />
            </Grid>
            <Grid>
              <label htmlFor="">
                E-mail <Star>*</Star>
              </label>
              <StyledInput
                value={email}
                type="email"
                placeholder="Напишите ваш email"
                onChange={changeEmailHandler}
                error={formError.errorEmail}
                required
              />
            </Grid>
            <Grid>
              <label htmlFor="">
                Телефон <Star>*</Star>
              </label>
              <StyledInpuNumber
                value={phoneNumber}
                onChange={changePhoneNumberHandler}
                type="number"
                placeholder="+996 (_ _ _) _ _  _ _  _ _"
                error={formError.errorPhoneNumber}
                required
              />
            </Grid>
          </FirstLineData>
          {order.isCheckedTwo ? (
            <Grid>
              <label htmlFor="">
                Адрес доставки <Star>*</Star>
              </label>
              <Input
                value={address}
                onChange={changeAddressHandler}
                type="text"
                placeholder="ул.Московская 120, кв 4, дом 9"
                error={formError.errorAddress}
              />
            </Grid>
          ) : null}
          <StyledButton type="submit">продолжить</StyledButton>
        </form>
      </Grid>
    </Container>
  )
}

export default PickupAndDelivered
