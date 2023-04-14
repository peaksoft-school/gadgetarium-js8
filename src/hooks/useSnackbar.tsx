import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { styled } from '@mui/material'
import SimpleSnackbar from '../components/UI/snackbar/Snackbar'
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

const Toastify = styled(ToastContainer)(() => ({
  '&': {
    width: 'auto',
    '& .Toastify__close-button': {
      display: 'none'
    }
  }
}))
export const useSnackbar = ({
  autoClose = 2000,
  position = 'top-right',
  message = 'Товар успешно добавлен в корзину!',
  linkText = 'Перейти в корзину',
  type = 'success'
}: SnackbarType) => {
  const snackbarHanler = () => {
    toast[type](<SimpleSnackbar message={message} linkText={linkText} />, {
      style: {
        backgroundColor: '#202027'
      }
    })
  }

  return {
    snackbarHanler,
    toast: <Toastify position={position} autoClose={autoClose} icon={false} />
  }
}
