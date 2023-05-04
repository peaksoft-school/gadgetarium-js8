import { Modal as MuiModal, Typography } from '@mui/material'
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
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { signUp } from '../../../redux/store/auth/auth.thunk'
import { PATHS } from '../../../utils/constants/routerConsts'

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

const Error = styled(Typography)(() => ({
  color: '#980606'
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
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const error = useSelector((state: RootState) => state.auth.error)

  const [confirmPassword, setConfirmPassword] = useState('')

  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowPassword) => !prevShowPassword)
  }
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const schema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    phoneNumber: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6)
  })
  // .refine((data) => data.password === data.confirm, {
  //   message: "Passwords don't match",
  //   path: ['confirm']
  // })

  type FormSchema = (typeof schema)['_output']

  const { handleSubmit, formState, register } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: ''
    },
    mode: 'onBlur',
    resolver: zodResolver(schema)
  })

  const submitHandler = (values: FormSchema) => {
    dispatch(signUp(values))
      .unwrap()
      .then(() => navigate(PATHS.APP.logIn))
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

          <StyledModalForm onSubmit={handleSubmit(submitHandler)} action="">
            <Input
              error={!!formState.errors.firstName}
              {...register('firstName')}
              placeholder="Напишите имя"
              type="text"
            />
            {formState.errors.firstName && <Error>{formState.errors.firstName?.message}</Error>}
            <Input
              error={!!formState.errors.lastName}
              {...register('lastName')}
              placeholder="Напишите фамилию"
              type="text"
            />
            {formState.errors.lastName && <Error>{formState.errors.lastName?.message}</Error>}
            <Input
              error={!!formState.errors.phoneNumber}
              {...register('phoneNumber')}
              placeholder="+996 (_ _ _) _ _  _ _  _ _"
              type="text"
            />
            {formState.errors.phoneNumber && <Error>{formState.errors.phoneNumber?.message}</Error>}
            <Input
              error={!!formState.errors.email}
              {...register('email')}
              placeholder="Напишите email"
              type="email"
            />
            {formState.errors.email && <Error>{formState.errors.email?.message}</Error>}
            <Input
              error={!!formState.errors.password}
              {...register('password')}
              placeholder="Напишите пароль"
              type={showPassword ? 'text' : 'password'}
            />
            {formState.errors.password && <Error>{formState.errors.password?.message}</Error>}
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
            <Button variant="contained" type="submit">
              Создать Аккаунт
            </Button>
          </StyledModalForm>

          <StyledBottomText>
            Уже есть аккаунт? <Link to="/login">Войти</Link>
          </StyledBottomText>
          <p style={{ color: 'red', textAlign: 'center', marginTop: '1rem' }}>{error}</p>
        </div>
      </StyledModalContent>
    </MuiModal>
  )
}

export default SignUpModal
