import Snackbar from '@mui/material/Snackbar'
import { ReactComponent as SnackbarIcon } from '../../../assets/icons/SnackbarIcon.svg'
import styled from '@emotion/styled'
import { Fragment } from 'react'

type SnackbarOriginType = {
  vertical: 'top' | 'bottom'
  horizontal: 'left' | 'center' | 'right'
}

interface SnackbarType {
  isOpen?: boolean
  autoHideDuration?: number
  onClose?: () => void
  message?: string
  text?: string
  anchorOrigin?: SnackbarOriginType
}

const SimpleSnackbar = ({
  isOpen = true,
  autoHideDuration,
  onClose,
  message = 'Товар успешно добавлен в корзину!',
  text = 'Перейти в корзину',
  anchorOrigin = { vertical: 'top', horizontal: 'right' }
}: SnackbarType) => {
  const Container = styled('div')(() => ({
    marginLeft: '0.8rem',
    display: 'flex',
    alignItems: 'center'
  }))
  const StyledLink = styled('a')(() => ({
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '1.125rem',
    lineHeight: '130%',
    color: '#3CDE14',
    textDecoration: 'none'
  }))
  const StyledSnackbarIcon = styled(SnackbarIcon)(() => ({
    marginLeft: '30.95px'
  }))

  const action = (
    <Container>
      <StyledLink href="#">{text}</StyledLink>
      <StyledSnackbarIcon onClick={onClose} />
    </Container>
  )

  return (
    <Fragment>
      <Snackbar
        ContentProps={{
          sx: {
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '1.125rem',
            lineHeight: '140%',
            textAlign: 'center',
            color: '#FFFFFF',
            backgroundColor: '#202027',
            borderRadius: '4px',
            padding: '10px 28.85px 10px 18px'
          }
        }}
        open={isOpen}
        anchorOrigin={anchorOrigin}
        autoHideDuration={autoHideDuration}
        onClose={onClose}
        message={message}
        action={action}
      />
    </Fragment>
  )
}
export default SimpleSnackbar
