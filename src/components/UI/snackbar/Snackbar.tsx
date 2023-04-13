import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ElementSnackbar } from './ElementSnackbar'
import { Fragment, useEffect } from 'react'
import { styled } from '@mui/material'

export interface SnackbarType {
  message?: string
  linkText?: string
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
  type?: 'success' | 'error'
  autoClose?: number
}

export const Snackbar = ({
  message = 'Товар успешно добавлен в корзину!',
  linkText = 'Перейти в корзину',
  position = 'top-right',
  type = 'success',
  autoClose = 4000
}: SnackbarType) => {
  const snackbarHanler = () => {
    toast[type](<ElementSnackbar message={message} linkText={linkText} />, {
      style: {
        backgroundColor: '#202027'
      }
    })
  }

  useEffect(() => {
    snackbarHanler()
  }, [type])

  const Toastify = styled(ToastContainer)(() => ({
    '&': {
      width: 'auto',
      '& .Toastify__close-button': {
        display: 'none'
      }
    }
  }))
  return (
    <Fragment>
      <Toastify position={position} autoClose={autoClose} icon={false} />
    </Fragment>
  )
}
