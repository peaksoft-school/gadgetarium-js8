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
  positiom: 'relative'
}))

const StyledCrossIconContainer = styled('div')(() => ({
  position: 'absolute',
  right: 15,
  top: 15
}))

const StyledModalHeading = styled('h3')(() => ({
  textAlign: 'center',
  marginBottom: '1rem'
}))

const StyledIconButtonContainer = styled('div')(() => ({
  position: 'absolute',
  right: 60,
  top: 270,
  zIndex: 10
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

type PropsType = {
  open: boolean
  onClose: () => void
}

const SignInModal = ({ open, onClose }: PropsType) => {
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
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
    <MuiModal open={open} onClose={onClose}>
      <StyledModalContent>
        <div style={{ padding: '3.25rem 2.65rem' }}>
          <StyledModalHeading>
            Войдите или зарегистрируйтесь <br /> чтобы опубликовать отзыв
          </StyledModalHeading>
          <StyledCrossIconContainer>
            <IconButtons onClick={onClose} icon={<CrossIcon />} />
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
            <StyledIconButtonContainer>
              <IconButtons
                onClick={togglePasswordVisibility}
                icon={showPassword ? <EyeIcon /> : <SlashedEyeIcon />}
              />
            </StyledIconButtonContainer>
            <Button variant="contained" onClick={() => {}}>
              Войти
            </Button>
          </StyledModalForm>

          <StyledBottomText>
            Нет аккаунта? <a href="">Зарегистрироваться</a>
          </StyledBottomText>
        </div>
      </StyledModalContent>
    </MuiModal>
  )
}

export default SignInModal
