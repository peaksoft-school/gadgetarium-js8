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

const MainSignInContainer = styled('div')(() => ({
  width: '100%',
  minHeight: '710px',
  background: 'linear-gradient(107.03deg, #6B0FA9 13.93%, #4D0EB8 94.5%)',
  padding: '2.5rem 3.125rem',
  position: 'relative'
}))

const StyledModalContent = styled('div')(() => ({
  padding: '3.25rem',
  background: '#fff',
  width: '36.25rem',
  margin: '0 auto',
  marginTop: '8.5rem',
  position: 'relative'
}))

const StyledModalForm = styled('form')(() => ({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  marginBottom: '1rem',
  positiom: 'relative'
}))

const StyledIconButtonContainer = styled('div')(() => ({
  position: 'absolute',
  right: 60,
  top: 195,
  zIndex: 10
}))

const StyledCrossIconContainer = styled('div')(() => ({
  position: 'absolute',
  right: 15,
  top: 15
}))

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  //   const [emailError, setEmailError] = useState(false)
  //   const [passwordError, setPasswordError] = useState(false)

  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpassword(e.target.value)
  }
  return (
    <MainSignInContainer>
      <div style={{ position: 'absolute' }}>
        <Logo />
      </div>
      <StyledModalContent>
        <StyledCrossIconContainer>
          <IconButtons icon={<CrossIcon />} />
        </StyledCrossIconContainer>
        <StyledBlockName>Войти</StyledBlockName>

        <StyledModalForm action="">
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
          <Button variant="contained" onClick={() => {}}>
            Войти
          </Button>
        </StyledModalForm>
        <StyledIconButtonContainer>
          <IconButtons
            onClick={togglePasswordVisibility}
            icon={showPassword ? <EyeIcon /> : <SlashedEyeIcon />}
          />
        </StyledIconButtonContainer>
        <StyledBottomText>
          Нет аккаунта? <a href="">Зарегистрироваться</a>
        </StyledBottomText>
      </StyledModalContent>
    </MainSignInContainer>
  )
}

export default SignIn
