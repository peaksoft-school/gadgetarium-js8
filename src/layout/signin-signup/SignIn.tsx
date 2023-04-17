import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import { ReactComponent as CrossIcon } from '../../assets/icons/cross_icon.svg'
import Input from '../../components/UI/inputs/Input'
import { styled } from '@mui/material'
import IconButtons from '../../components/UI/IconButtons'
import Button from '../../components/UI/buttons/Button'

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

const SignIn = () => {
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
          marginTop: '8rem',
          position: 'relative'
        }}
      >
        <div style={{ position: 'absolute', right: 15, top: 15 }}>
          <IconButtons icon={<CrossIcon />} />
        </div>
        <StyledBlockName>Войти</StyledBlockName>

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
          <Input value="" placeholder="Напишите email" type="email" />
          <Input value="" placeholder="Напишите пароль" type="password" />
          <Button variant="contained" onClick={() => {}}>
            Войти
          </Button>
        </form>
        <StyledBottomText>
          Нет аккаунта? <a href="">Зарегистрироваться</a>
        </StyledBottomText>
      </div>
    </div>
  )
}

export default SignIn
