import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import { ReactComponent as CrossIcon } from '../../assets/icons/cross_icon.svg'
import { ReactComponent as SlashedEyeIcon } from '../../assets/icons/icons_eye-slashed.svg'
import { ReactComponent as EyeIcon } from '../../assets/icons/eyeIcon.svg'
import Input from '../../components/UI/inputs/Input'
import { styled } from '@mui/material'
import IconButtons from '../../components/UI/IconButtons'
import Button from '../../components/UI/buttons/Button'
import { useState } from 'react'

const StyledBlockName = styled('p')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '28px',
  lineHeight: '34px',
  textAlign: 'center',
  color: '#292929',
  marginBottom: '1.2rem'
}))

const StyledBottomText = styled('p')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '140%',
  textAlign: 'center',
  color: '#292929',
  a: {
    color: '#2C68F5',
    textDecoration: 'none',
    fontWeight: 600
  }
}))

const SignUp = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [password, setPassword] = useState('')
  //   const [emailError, setEmailError] = useState(false)
  //   const [passwordError, setPasswordError] = useState(false)

  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowPassword) => !prevShowPassword)
  }

  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const lastNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
  }

  const phoneNumberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value)
  }

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const confirmPasswordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)
  }

  return (
    <div
      style={{
        width: '100%',
        minHeight: '710px',
        background: 'linear-gradient(107.03deg, #6B0FA9 13.93%, #4D0EB8 94.5%)',
        padding: '2.5rem 3.125rem',
        position: 'relative'
      }}
    >
      <div style={{ position: 'absolute' }}>
        <Logo />
      </div>
      <div
        style={{
          padding: '3.25rem',
          background: '#fff',
          width: '36.25rem',
          margin: '0 auto',
          marginTop: '8.5rem',
          position: 'relative'
        }}
      >
        <div style={{ position: 'absolute', right: 15, top: 15 }}>
          <IconButtons icon={<CrossIcon />} />
        </div>
        <StyledBlockName>Регистрация</StyledBlockName>

        <form
          action=""
          style={{
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            marginBottom: '1rem'
          }}
        >
          <Input value={name} onChange={nameChangeHandler} placeholder="Напишите имя" type="text" />
          <Input
            value={lastName}
            onChange={lastNameChangeHandler}
            placeholder="Напишите фамилию"
            type="text"
          />
          <Input
            value={phoneNumber}
            onChange={phoneNumberChangeHandler}
            placeholder="+996 (_ _ _) _ _  _ _  _ _"
            type="text"
          />
          <Input
            value={email}
            onChange={emailChangeHandler}
            placeholder="Напишите email"
            type="email"
          />
          <Input
            value={password}
            onChange={passwordChangeHandler}
            placeholder="Напишите пароль"
            type={showPassword ? 'text' : 'password'}
          />
          <div style={{ position: 'absolute', right: 60, top: 415, zIndex: 10 }}>
            <IconButtons
              onClick={togglePasswordVisibility}
              icon={showPassword ? <EyeIcon /> : <SlashedEyeIcon />}
            />
          </div>
          <Input
            value={confirmPassword}
            onChange={confirmPasswordChangeHandler}
            placeholder="Напишите пароль"
            type={showConfirmPassword ? 'text' : 'password'}
          />
          <div style={{ position: 'absolute', right: 60, top: 490, zIndex: 10 }}>
            <IconButtons
              onClick={toggleConfirmPasswordVisibility}
              icon={showConfirmPassword ? <EyeIcon /> : <SlashedEyeIcon />}
            />
          </div>
          <Button variant="contained" onClick={() => {}}>
            Создать Аккаунт
          </Button>
        </form>

        <StyledBottomText>
          Нет аккаунта? <a href="">Зарегистрироваться</a>
        </StyledBottomText>
      </div>
    </div>
  )
}

export default SignUp
