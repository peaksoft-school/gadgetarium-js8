import { ReactComponent as Logo } from '../../assets/images/logo/logo.svg'
import { styled } from '@mui/material'
import SignUpModal from '../../components/UI/modals/SignUpModal'

const MainSignUpContainer = styled('div')(() => ({
  width: '100%',
  minHeight: '100vh',
  background: 'linear-gradient(107.03deg, #6B0FA9 13.93%, #4D0EB8 94.5%)',
  padding: '2.5rem 3.125rem',
  position: 'relative'
}))

const SignUp = () => {
  return (
    <MainSignUpContainer>
      <div style={{ position: 'absolute' }}>
        <Logo />
      </div>
      <SignUpModal open={true} onClose={() => {}} hideBackdrop={true} />
    </MainSignUpContainer>
  )
}

export default SignUp
