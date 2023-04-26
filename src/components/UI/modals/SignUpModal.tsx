import { Modal as MuiModal } from '@mui/material'
import { ReactComponent as CrossIcon } from '../../../assets/icons/cross_icon.svg'
import { ReactComponent as SlashedEyeIcon } from '../../../assets/icons/icons_eye-slashed.svg'
import { ReactComponent as EyeIcon } from '../../../assets/icons/eyeIcon.svg'
import { styled } from '@mui/material'
import Input from '../inputs/Input'
import Button from '../buttons/Button'
import IconButtons from '../IconButtons'
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

const StyledModalForm = styled('form')(() => ({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  marginBottom: '1rem',
  position: 'relative'
}))

const StyledCrossIconContainer = styled('div')(() => ({
  position: 'absolute',
  right: 15,
  top: 15
}))

const StyledModalContent = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  padding: '0.5rem',
  borderRadius: '4px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
  zIndex: '30',
  animation: 'slide-down 300ms ease-out forwards',
  width: '35rem',
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)'
}))
const StyledIconButtonContainer = styled('div')(() => ({
  position: 'absolute',
  right: 7,
  top: 310,
  zIndex: 10
}))

const StyledSecondEyeIconButtonContainer = styled('div')(() => ({
  position: 'absolute',
  right: 7,
  top: 385,
  zIndex: 10
}))

type PropsType = {
  open: boolean
  onClose: () => void
  hideBackdrop: boolean
}

const SignUpModal = ({ open, onClose, hideBackdrop = false }: PropsType) => {
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
    <MuiModal open={open} onClose={onClose} hideBackdrop={hideBackdrop}>
      <StyledModalContent>
        <div style={{ padding: '3.25rem 2.65rem' }}>
          <StyledCrossIconContainer>
            <IconButtons onClick={onClose} icon={<CrossIcon />} />
          </StyledCrossIconContainer>
          <StyledBlockName>Регистрация</StyledBlockName>

          <StyledModalForm onSubmit={() => {}} action="">
            <Input
              value={name}
              onChange={nameChangeHandler}
              placeholder="Напишите имя"
              type="text"
            />
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
            <StyledIconButtonContainer>
              <IconButtons
                onClick={togglePasswordVisibility}
                icon={showPassword ? <EyeIcon /> : <SlashedEyeIcon />}
              />
            </StyledIconButtonContainer>
            <Input
              value={confirmPassword}
              onChange={confirmPasswordChangeHandler}
              placeholder="Напишите пароль"
              type={showConfirmPassword ? 'text' : 'password'}
            />
            <StyledSecondEyeIconButtonContainer>
              <IconButtons
                onClick={toggleConfirmPasswordVisibility}
                icon={showConfirmPassword ? <EyeIcon /> : <SlashedEyeIcon />}
              />
            </StyledSecondEyeIconButtonContainer>
            <Button variant="contained" onClick={() => {}}>
              Создать Аккаунт
            </Button>
          </StyledModalForm>

          <StyledBottomText>
            Уже есть аккаунт? <a href="">Войти</a>
          </StyledBottomText>
        </div>
      </StyledModalContent>
    </MuiModal>
  )
}

export default SignUpModal
