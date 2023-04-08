import { Button as MuiButton, styled } from '@mui/material'

export type ButtonProps = {
  variant?: 'text' | 'outlined' | 'contained' | undefined
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
}

const MuiButtonStyled = styled(MuiButton)<ButtonProps>(() => ({
  textTransform: 'inherit',
  whiteSpace: 'nowrap',
  fontSize: '16px',
  '&.MuiButton-contained': {
    border: 'none',
    color: '#ffffff'
  },
  '&:active': {
    border: 'none'
  },
  '&.Mui-disabled': {
    backgroundColor: 'rgb(81, 81, 81)',
    color: '#fff',
    cursor: 'not-drop',
    border: 'none'
  }
}))

const Button = ({
  children,
  disabled,
  onClick,
  variant,
  ...props
}: ButtonProps & { children: React.ReactNode }) => {
  return (
    <div>
      <MuiButtonStyled onClick={onClick} disabled={disabled} variant={variant} {...props}>
        {children}
      </MuiButtonStyled>
    </div>
  )
}

export default Button
