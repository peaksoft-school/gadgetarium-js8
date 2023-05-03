import { Modal as MuiModal } from '@mui/material'
import { ReactComponent as CrossIcon } from '../../../assets/icons/cross_icon.svg'
import { ReactComponent as SlashedEyeIcon } from '../../../assets/icons/icons_eye-slashed.svg'
import { ReactComponent as EyeIcon } from '../../../assets/icons/eyeIcon.svg'
import { styled } from '@mui/material'
import Input from '../inputs/Input'
import Button from '../buttons/Button'
import IconButtons from '../IconButtons'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/store'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { signIn } from '../../../redux/store/auth/auth.thunk'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

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

const StyledModalHeading = styled('h3')(() => ({
  textAlign: 'center',
  marginBottom: '1rem'
}))

const StyledIconButtonContainer = styled('div')(() => ({
  position: 'absolute',
  right: 7,
  top: 90,
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
  transform: 'translate(-50%, -50%)',
  border: 'none'
}))

type PropsType = {
  open: boolean
  onClose: () => void
  feedback?: boolean
  hideBackdrop?: boolean
}

const SignInModal = ({ open, onClose, feedback = false, hideBackdrop = false }: PropsType) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { error, role } = useAppSelector((state) => state.auth)
  // console.log(error)

  const [loginError, setLoginError] = useState('')

  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
  })

  type FormSchema = (typeof schema)['_output']

  const { handleSubmit, register, formState } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onBlur',
    resolver: zodResolver(schema)
  })

  const submitHandler = (values: FormSchema) => {
    // console.log(values)

    dispatch(signIn(values))
      .unwrap()
      .then(() => navigate('/'))
      .catch((e: string) => setLoginError(e))
  }

  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }
  return (
    <MuiModal hideBackdrop={hideBackdrop} open={open} onClose={onClose}>
      <StyledModalContent>
        <div style={{ padding: '3.25rem 2.65rem' }}>
          {feedback && (
            <StyledModalHeading>
              Войдите или зарегистрируйтесь <br /> чтобы опубликовать отзыв
            </StyledModalHeading>
          )}
          <StyledCrossIconContainer>
            <IconButtons onClick={onClose} icon={<CrossIcon />} />
          </StyledCrossIconContainer>
          <StyledBlockName>Войти</StyledBlockName>

          <StyledModalForm action="" onSubmit={handleSubmit(submitHandler)}>
            <Input
              {...register('email', {
                required: 'Please enter your email address'
              })}
              placeholder="Напишите email"
              type="email"
              error={!!formState.errors.email}
            />
            <Input
              error={!!formState.errors.password}
              {...register('password', {
                required: 'Please enter your password'
              })}
              placeholder="Напишите пароль"
              type={showPassword ? 'text' : 'password'}
            />
            <StyledIconButtonContainer>
              <IconButtons
                onClick={togglePasswordVisibility}
                icon={showPassword ? <EyeIcon /> : <SlashedEyeIcon />}
              />
            </StyledIconButtonContainer>
            <Button variant="contained" type="submit" onClick={() => {}}>
              Войти
            </Button>
          </StyledModalForm>

          <StyledBottomText>
            Нет аккаунта? <a href="/signup">Зарегистрироваться</a>
          </StyledBottomText>
          <p style={{ color: 'red', textAlign: 'center', marginTop: '1rem' }}>{error}</p>
        </div>
      </StyledModalContent>
    </MuiModal>
  )
}

export default SignInModal
