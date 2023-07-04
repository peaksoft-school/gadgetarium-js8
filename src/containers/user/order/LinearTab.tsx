import React, { ChangeEvent, useState } from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/material'
import { OrderedCardList } from './OrderedCardList'
import PickupAndDelivered from './PickupAndDelivered'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/store'
import Payment from './Payment'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import PaymentMethod from './PaymentMethod'
import { userOrderActions } from '../../../redux/store/user-order/user.order.slice'

interface TabData {
  label: string
  content: React.ReactNode
}
const CircleTabOne = styled('p')(({ activeTabOne }: { activeTabOne: string }) => ({
  height: '35px',
  width: '35px',
  backgroundColor: activeTabOne === 'firstTab' ? '#CB11AB' : '#C6C6C6',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  color: '#fff',
  borderRadius: '100%',
  paddingTop: '7px',
  cursor: 'pointer'
}))
const CircleTabTwo = styled('p')(({ activeTabTwo }: { activeTabTwo: string }) => ({
  height: '35px',
  width: '35px',
  backgroundColor: activeTabTwo === 'secondTab' ? '#CB11AB' : '#C6C6C6',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  color: '#fff',
  borderRadius: '100%',
  paddingTop: '7px',
  cursor: 'pointer'
}))
const CircleTabThree = styled('p')(({ activeTabThree }: { activeTabThree: string }) => ({
  height: '35px',
  width: '35px',
  backgroundColor: activeTabThree === 'thirdTab' ? '#CB11AB' : '#C6C6C6',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  color: '#fff',
  borderRadius: '100%',
  paddingTop: '7px',
  cursor: 'pointer'
}))
const Container = styled('div')(() => ({
  display: 'flex',
  ':last-child': {
    span: {
      display: 'none'
    }
  }
}))
const ContainerGeneral = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between'
}))
const stripePromise = loadStripe(
  'pk_test_51N2vXBBBnQ45vaxAEd6zLHoNdsuShoQnueiBDMW1QJ5ByfkbLFRxkGmf7RVH54R7SeEtjsmeRShag5cECJtO1oFi00laPRm1n8'
)
const LinearTabs: React.FC = () => {
  const [changeTab, setChangeTab] = useState<string>('Tab 1')
  const [showCardList, setShowCardList] = useState<boolean>(true)
  const [activeTabOne, setActiveTabOne] = useState<string>('firstTab')
  const [activeTabTwo, setActiveTabTwo] = useState<string>('')
  const [activeTabThree, setActiveTabThree] = useState<string>('')
  const basketData = useSelector((state: RootState) => state.basket)
  const order = useSelector((state: RootState) => state.userorder)

  const dataError = {
    errorFirstName: false,
    errorLastName: false,
    errorEmail: false,
    errorPhoneNumber: false,
    errorAddress: false
  }
  const dispatch = useDispatch<AppDispatch>()
  const [firstName, setFirstName] = useState<string>(order.firstName)
  const [lastName, setLastName] = useState<string>(order.lastName)
  const [email, setEmail] = useState<string>(order.email)
  const [phoneNumber, setPhoneNumber] = useState<string>(order.phoneNumber)
  const [address, setAddress] = useState<string>(order.address)
  const [formError, setFormError] = useState(dataError)
  const handleTabChange = (newValue: string) => {
    setChangeTab(newValue)
    if (newValue === 'Tab 1') {
      setActiveTabOne('firstTab')
      setActiveTabThree('')
      setShowCardList(true)
      setActiveTabTwo('')
    } else {
      setActiveTabOne('firstTab')
    }
    if (newValue === 'Tab 2') {
      setActiveTabTwo('secondTab')
      setShowCardList(false)
      setActiveTabThree('')
    } else {
      setActiveTabTwo('')
    }
    if (newValue === 'Tab 3') {
      setActiveTabThree('thirdTab')
      setActiveTabTwo('secondTab')
      setShowCardList(true)
    }
  }
  const chooseSecondCardHandler = () => {
    const checked = {
      isCheckedTwo: !order.isCheckedTwo
    }
    dispatch(userOrderActions.checkedCard(checked))
  }
  const chooseFirstCardHandler = () => {
    const checked = {
      isCheckedOne: !order.isCheckedOne
    }
    dispatch(userOrderActions.checkedCard(checked))
  }
  const changeNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value)
  }
  const changeFullNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value)
  }
  const changeEmailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
  const changePhoneNumberHandler = (value: string) => {
    setPhoneNumber(value)
  }
  const changeAddressHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value)
  }

  const formValidation = () => {
    if (firstName.trim() === '') {
      setFormError((prev) => ({ ...prev, errorFirstName: true }))
    } else {
      setFormError((prev) => ({ ...prev, errorFirstName: false }))
    }
    if (lastName.trim() === '') {
      setFormError((prev) => ({ ...prev, errorLastName: true }))
    } else {
      setFormError((prev) => ({ ...prev, errorLastName: false }))
    }
    if (email.trim() === '') {
      setFormError((prev) => ({ ...prev, errorEmail: true }))
    } else {
      setFormError((prev) => ({ ...prev, errorEmail: false }))
    }
    if (phoneNumber.trim() === '') {
      setFormError((prev) => ({ ...prev, errorPhoneNumber: true }))
    } else {
      setFormError((prev) => ({ ...prev, errorPhoneNumber: false }))
    }
    if (order.isCheckedTwo) {
      if (address.trim() === '') {
        setFormError((prev) => ({ ...prev, errorAddress: true }))
      } else {
        setFormError((prev) => ({ ...prev, errorAddress: false }))
      }
    } else {
      setFormError((prev) => ({ ...prev, errorAddress: false }))
    }
  }
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    formValidation()
    if (order.isCheckedTwo) {
      if (
        firstName.trim() !== '' &&
        lastName.trim() !== '' &&
        email.trim() !== '' &&
        phoneNumber.trim() !== '' &&
        address.trim() !== ''
      ) {
        const dataOrder = {
          firstName,
          lastName,
          email,
          phoneNumber,
          address
        }
        handleTabChange('Tab 2')
        dispatch(userOrderActions.saveOrderData(dataOrder))
      }
    }
    if (order.isCheckedOne) {
      if (
        firstName.trim() !== '' &&
        lastName.trim() !== '' &&
        email.trim() !== '' &&
        phoneNumber.trim() !== ''
      ) {
        const dataOrder = {
          firstName,
          lastName,
          email,
          phoneNumber,
          address
        }
        handleTabChange('Tab 2')
        dispatch(userOrderActions.saveOrderData(dataOrder))
      }
    }
  }
  const toChangeTabHandler = (tab: 'Tab 1' | 'Tab 2' | 'Tab 3') => {
    if (order.isCheckedTwo) {
      if (
        firstName.trim() !== '' &&
        lastName.trim() !== '' &&
        email.trim() !== '' &&
        phoneNumber.trim() !== '' &&
        address.trim() !== ''
      ) {
        handleTabChange(tab)
      }
    }
    if (order.isCheckedOne) {
      if (
        firstName.trim() !== '' &&
        lastName.trim() !== '' &&
        email.trim() !== '' &&
        phoneNumber.trim() !== ''
      ) {
        handleTabChange(tab)
      }
    }
  }

  const toChangeThirdTabHandler = () => {
    if (order.payCardAfterChecked || order.payCardChecked || order.payCashChecked) {
      handleTabChange('Tab 3')
    } else {
      return
    }
  }
  const tabs: TabData[] = [
    {
      label: 'Tab 1',
      content: (
        <PickupAndDelivered
          submitHandler={submitHandler}
          changeAddressHandler={changeAddressHandler}
          changeEmailHandler={changeEmailHandler}
          changeFullNameHandler={changeFullNameHandler}
          changeNameHandler={changeNameHandler}
          changePhoneNumberHandler={changePhoneNumberHandler}
          chooseFirstCardHandler={chooseFirstCardHandler}
          chooseSecondCardHandler={chooseSecondCardHandler}
          firstName={firstName}
          lastName={lastName}
          email={email}
          phoneNumber={phoneNumber}
          address={address}
          formError={formError}
        />
      )
    },
    {
      label: 'Tab 2',
      content: (
        <Elements stripe={stripePromise}>
          <PaymentMethod handleTabChange={handleTabChange} />
        </Elements>
      )
    },
    { label: 'Tab 3', content: <Payment handleTabChange={handleTabChange} /> }
  ]

  return (
    <>
      <ContainerGeneral>
        <div>
          <Box sx={{ display: 'flex', marginTop: '28px' }}>
            <Container>
              <div style={{ padding: 0 }} onClick={() => handleTabChange('Tab 1')}>
                {<CircleTabOne activeTabOne={activeTabOne}>{1}</CircleTabOne>}
              </div>
              <div
                style={{
                  width: 309,
                  borderBottom:
                    activeTabTwo === 'secondTab' ? '2px solid #CB11AB' : '2px solid #C6C6C6',
                  marginBottom: '15px'
                }}
              ></div>
            </Container>
            <Container>
              <div style={{ padding: 0 }} onClick={() => toChangeTabHandler('Tab 2')}>
                {<CircleTabTwo activeTabTwo={activeTabTwo}>{2}</CircleTabTwo>}
              </div>
              <div
                style={{
                  width: 309,
                  borderBottom:
                    activeTabThree === 'thirdTab' ? '2px solid #CB11AB' : '2px solid #C6C6C6',
                  marginBottom: '15px'
                }}
              ></div>
            </Container>
            <Container>
              <div style={{ padding: 0 }} onClick={toChangeThirdTabHandler}>
                {<CircleTabThree activeTabThree={activeTabThree}>{3}</CircleTabThree>}
              </div>
              <span
                style={{ width: 309, borderBottom: '2px solid black', marginBottom: '15px' }}
              ></span>
            </Container>
          </Box>
          <div
            style={{
              display: 'flex',
              width: '720px',
              justifyContent: 'space-between',
              marginTop: '16px',
              marginBottom: '38px'
            }}
          >
            <p style={{ color: activeTabOne ? '#CB11AB' : '#686868' }}>Варианты доставки</p>
            <p style={{ color: activeTabTwo ? '#CB11AB' : '#686868', marginRight: '45px' }}>
              Оплата
            </p>
            <p style={{ color: activeTabThree ? '#CB11AB' : '#686868' }}>Обзор заказа</p>
          </div>
          <Box>
            {tabs.map((tab) => {
              if (tab.label === changeTab) {
                return <div key={tab.label}>{tab.content}</div>
              } else {
                return null
              }
            })}
          </Box>
        </div>
        {showCardList ? (
          <OrderedCardList
            quantity={basketData.totalQuantity}
            sumPrice={basketData.sumPrice}
            totalPrice={basketData.totalSum}
            discountSum={basketData.totalDiscount}
          />
        ) : null}
      </ContainerGeneral>
    </>
  )
}

export default LinearTabs
