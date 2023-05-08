import { ReactComponent as Logo } from '../../assets/images/logo/logo.svg'
import { styled } from '@mui/material'
import SignInModal from '../../components/UI/modals/SignInModal'

const MainSignInContainer = styled('div')(() => ({
  width: '100%',
  minHeight: '100vh',
  background: 'linear-gradient(107.03deg, #6B0FA9 13.93%, #4D0EB8 94.5%)',
  padding: '2.5rem 3.125rem',
  position: 'relative'
}))

const SignIn = () => {
  return (
    <MainSignInContainer>
      <div style={{ position: 'absolute' }}>
        <Logo />
      </div>
      <SignInModal open={true} onClose={() => {}} hideBackdrop={true} />
    </MainSignInContainer>
  )
}

export default SignIn
