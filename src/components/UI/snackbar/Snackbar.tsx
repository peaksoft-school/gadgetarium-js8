import { styled } from '@mui/material'
import { ReactComponent as SnackbarIcon } from '../../../assets/icons/SnackbarIcon.svg'
import { SnackbarType } from '../../../hooks/useSnackbar'
const Container = styled('div')(() => ({
  width: 'auto',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 22
}))
const Title = styled('p')(() => ({
  width: 'auto',
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: ' 140%',
  color: '#FFFFFF'
}))
const StyledLink = styled('a')(() => ({
  textDecoration: 'none',
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: '130%',
  color: '#3CDE14;'
}))
const StyledSnackbarIcon = styled(SnackbarIcon)(() => ({
  marginRight: 12
}))
const SimpleSnackbar = ({ message, linkText }: SnackbarType) => {
  return (
    <Container>
      <Title>{message}</Title>
      <StyledLink href="#">{linkText}</StyledLink>
      <StyledSnackbarIcon />
    </Container>
  )
}
export default SimpleSnackbar
