/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid, TextField, Typography, styled } from '@mui/material'
import { CustomizeCheckbox } from '../../../components/UI/buttons/Check'
import image from '../../../assets/images/payment/лого.png'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/store'
import { userOrderActions } from '../../../redux/store/user-order/user.order.slice'
import Button from '../../../components/UI/buttons/Button'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import Modal from '../../../components/UI/modals/Modal'
import { useState } from 'react'
import axios from 'axios'
import { isRejectedWithValue } from '@reduxjs/toolkit'
import Success from '../../../assets/images/basket/success.png'
const Container = styled('div')(() => ({
  marginTop: '3px',
  fontFamily: 'Inter',
  fontStyle: 'normal'
}))
const Title = styled('h2')(() => ({
  fontWeight: 700,
  fontSize: ' 24px',
  lineHeight: ' 110%',
  color: '#292929',
  marginBottom: '30px'
}))
const Text = styled('h1')(() => ({
  fontWeight: 400,
  fontSize: ' 24px',
  lineHeight: ' 110%',
  color: '#2d2f2d',
  marginBottom: '20px',
  textTransform: 'initial'
}))
const TagContainer = styled('div')(() => ({
  width: '446px',
  minHeight: '268px'
}))
const Card = styled('div')(() => ({
  backgroundColor: '#fff',
  borderRadius: '5px',
  padding: '15px',
  border: '2px solid #fff'
}))
const FirstCard = styled('div')(({ payCardChecked }: { payCardChecked: boolean }) => ({
  width: '290px',
  minHeight: '159px',
  backgroundColor: '#fff',
  borderRadius: '5px',
  padding: '26px 17px 26px 12px',
  border: payCardChecked ? '2px solid #2FC509' : '2px solid #fff',
  ':hover': {
    border: '2px solid #2FC509'
  },
  cursor: 'pointer'
}))
const SecondCard = styled('div')(({ payCardAfterChecked }: { payCardAfterChecked: boolean }) => ({
  width: '290px',
  minHeight: '159px',
  backgroundColor: '#fff',
  borderRadius: '5px',
  padding: '26px 17px 26px 12px',
  border: payCardAfterChecked ? '2px solid #2FC509' : '2px solid #fff',
  ':hover': {
    border: '2px solid #2FC509'
  },
  cursor: 'pointer'
}))
const ThirdCard = styled('div')(({ payCashChecked }: { payCashChecked: boolean }) => ({
  width: '290px',
  minHeight: '159px',
  backgroundColor: '#fff',
  borderRadius: '5px',
  padding: '26px 0px 26px 12px',
  border: payCashChecked ? '2px solid #2FC509' : '2px solid #fff',
  ':hover': {
    border: '2px solid #2FC509'
  },
  cursor: 'pointer'
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
  marginTop: '5px'
}))
const StyledImage = styled('img')(() => ({
  marginTop: '6px',
  marginLeft: '4px'
}))
const ContainerCard = styled('div')(() => ({
  display: 'flex',
  gap: '20px'
}))
const ContainerOnlineCard = styled('div')(() => ({
  marginTop: '40px',
  display: 'flex',
  alignContent: 'center',
  gap: '60px'
}))
const OnlineCardImage = styled('img')(() => ({
  width: '200px',
  height: '50px',
  float: 'right'
}))
const ImageContainer = styled('div')(() => ({
  width: '100%'
}))
const StyledButton = styled(Button)(() => ({
  width: '100%',
  textTransform: 'capitalize',
  marginTop: '20px'
}))

const ContainerCardElement = styled('div')(() => ({
  marginTop: '100px'
}))

const StyledTypography = styled(Typography)(() => ({
  width: '400px',
  marginTop: '80px',
  fontSize: '14px'
}))
const StyledTextField = styled(TextField)(() => ({
  width: '100%',
  marginTop: '20px',
  fontSize: '18px',
  '::placeholder': {
    paddingLeft: '10px'
  }
}))
const ContainerModal = styled('div')(() => ({
  padding: '60px 60px 30px 60px'
}))
const ImagesContainers = styled('div')(() => ({
  textAlign: 'center',
  marginBottom: '25px'
}))
const StyledSuccess = styled('img')(() => ({
  width: '100px',
  height: '100px'
}))
const PaymentMethod = ({ handleTabChange }: { handleTabChange: (newValue: string) => void }) => {
  const order = useSelector((state: RootState) => state.userorder)
  const { totalSum } = useSelector((state: RootState) => state.basket)
  const amount = totalSum ? +totalSum.toFixed(2) : +totalSum
  const elements = useElements()
  const stripe = useStripe()
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const dispatch = useDispatch<AppDispatch>()
  const payCardHandler = () => {
    const checkedData = {
      payCardChecked: !order.payCardChecked
    }
    dispatch(userOrderActions.checkedPaymentCard(checkedData))
  }
  const payCardAfterHandler = () => {
    const checkedData = {
      payCardAfterChecked: !order.payCardAfterChecked
    }
    dispatch(userOrderActions.checkedPaymentCard(checkedData))
  }
  const payCashHandler = () => {
    const checkedData = {
      payCashChecked: !order.payCashChecked
    }
    dispatch(userOrderActions.checkedPaymentCard(checkedData))
  }
  const contunieHandler = () => {
    if (order.payCardAfterChecked || order.payCardChecked || order.payCashChecked) {
      handleTabChange('Tab 3')
    }
    if (isOpenModal) {
      setIsOpenModal(false)
    } else {
      setIsOpenModal(false)
    }
  }

  const paymentHanlder = async () => {
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded, or elements not available.
      return
    }

    const cardElement = elements.getElement(CardElement)

    if (!cardElement) {
      // Card Element is not available.
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement
    })

    if (!error && paymentMethod) {
      try {
        const { id } = paymentMethod
        const response = await axios.post(
          'http://gadgetarium.peaksoftprojects.com/api/user/stripe/create-payment-intent',
          {
            amount: amount,
            id
          }
        )
        setIsOpenModal(true)
        if (response.status === 200) {
          isRejectedWithValue('Successfully payment')
        }
      } catch (e) {
        isRejectedWithValue(e)
      }
    }
  }
  return (
    <Container>
      <Title>Способ оплаты</Title>
      <ContainerCard>
        <FirstCard payCardChecked={order.payCardChecked} onClick={payCardHandler}>
          <FirstLine>
            <CustomizeCheckbox checked={order.payCardChecked} changecolor="#2FC509" />
            <Grid>
              <LineText>Оплата картой онлайн</LineText>
              <StyledImage src={image} />
            </Grid>
          </FirstLine>
        </FirstCard>
        <SecondCard payCardAfterChecked={order.payCardAfterChecked} onClick={payCardAfterHandler}>
          <FirstLine>
            <CustomizeCheckbox checked={order.payCardAfterChecked} changecolor="#2FC509" />
            <Grid>
              <LineText>Картой при получении</LineText>
              <Typography>Предоплата не требуется. </Typography>
              <StyledImage src={image} />
            </Grid>
          </FirstLine>
        </SecondCard>
        <ThirdCard payCashChecked={order.payCashChecked} onClick={payCashHandler}>
          <FirstLine>
            <CustomizeCheckbox checked={order.payCashChecked} changecolor="#2FC509" />
            <Grid>
              <LineText>Наличными при получении</LineText>
              <Typography>Предоплата не требуется</Typography>
            </Grid>
          </FirstLine>
        </ThirdCard>
      </ContainerCard>
      <ContainerOnlineCard>
        <TagContainer>
          <Card>
            <ImageContainer>
              <OnlineCardImage src={image} />
            </ImageContainer>
            <ContainerCardElement>
              <CardElement />
            </ContainerCardElement>
            <StyledTextField id="standard-basic" label="Имя владельца" variant="standard" />
          </Card>
          {order.payCardChecked ? (
            <StyledButton onClick={paymentHanlder}>оплатить</StyledButton>
          ) : (
            <StyledButton onClick={contunieHandler}>продолжить</StyledButton>
          )}
        </TagContainer>
        <StyledTypography>
          Платеж защищен. Данные карты передаются только в зашифрованном виде по протоколу SSL,
          защищаются и обрабатываются по стандарту безопасности PCI DSS.
        </StyledTypography>
      </ContainerOnlineCard>
      <Modal open={isOpenModal} onClose={() => {}}>
        <ContainerModal>
          <ImagesContainers>
            <StyledSuccess src={Success} />
          </ImagesContainers>
          <Text>Оплата успешно завершена</Text>
          <StyledButton onClick={contunieHandler}>продолжить</StyledButton>
        </ContainerModal>
      </Modal>
    </Container>
  )
}

export default PaymentMethod
