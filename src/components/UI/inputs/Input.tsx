import { InputBase, styled } from '@mui/material'
import { ChangeEvent, forwardRef } from 'react'

type InputProps = {
  value: string
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  error: boolean
  placeholder?: string
}
const InputStyled = styled(InputBase)(() => ({
  '&.input': {
    border: '0.1px solid #909CB5',
    background: '#F7F7F7',
    borderRadius: '5px',
    padding: '0 10px'
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
  ({ value, onChange, error, placeholder = '', ...props }: InputProps, ref) => {
    return (
      <InputStyled
        {...props}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={Boolean(error)}
        classes={{ root: 'input', focused: 'focused', error: 'error' }}
        ref={ref}
      />
    )
  }
)

export default Input
