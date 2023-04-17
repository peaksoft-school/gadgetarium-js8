import { Button as MuiButton, styled } from '@mui/material'

export type ButtonProps = {
  variant?: 'text' | 'outlined' | 'contained' | undefined
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
}

const MuiButtonStyled = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  textTransform: 'inherit',
  whiteSpace: 'nowrap',
  fontSize: '16px',
  background: theme.customPalette.primary.main,
  '&.MuiButton-contained': {
    border: 'none',
    color: '#ffffff'
  },
  '&:active': {
    border: 'none',
    background: theme.customPalette.primary.mainActive
  },
  '&:hover': {
    background: theme.customPalette.primary.mainHover
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
    <>
      <MuiButtonStyled onClick={onClick} disabled={disabled} variant={variant} {...props}>
        {children}
      </MuiButtonStyled>
    </>
  )
}

export default Button
