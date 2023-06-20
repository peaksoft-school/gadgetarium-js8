import { CircularProgress, styled } from '@mui/material'

const Container = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '5px 0px'
}))

const StyledCircle = styled(CircularProgress)(() => ({
  '&': {
    svg: {
      color: '#CB11AB'
    }
  }
}))

const LoadingSpinner = () => {
  return (
    <Container>
      <StyledCircle color="success" />
    </Container>
  )
}
export default LoadingSpinner
