import { InputBase, styled } from '@mui/material'
import { forwardRef } from 'react'

type InputProps = {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: boolean
  placeholder?: string
  type?: string
}
const InputStyled = styled(InputBase)(() => ({
  '&.input': {
    border: '0.1px solid #909CB5',
    background: '#F7F7F7',
    borderRadius: '5px',
    padding: '7px 18px',
    fontFamily: 'Inter',
    fontSize: '16px',
    margin: '0.8rem 0'
  },
  '&.input.focused': {
    border: '0.1px solid #CB11AB',
    background: '#F4F4F4',
    color: '#292929'
  },
  '&.input.error': {
    border: '1px solid red'
  }
}))

const Input = forwardRef(
  ({ value, type = 'text', onChange, error, placeholder = '', ...props }: InputProps, ref) => {
    return (
      <InputStyled
        {...props}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
        error={Boolean(error)}
        classes={{ root: 'input', focused: 'focused', error: 'error' }}
        ref={ref}
      />
    )
  }
)

export default Input
