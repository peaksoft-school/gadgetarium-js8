import { Button as MuiButton, styled, ButtonProps as MuiButtonProps } from '@mui/material'

export interface ButtonProps extends MuiButtonProps {
  children: React.ReactNode
}

const MuiButtonStyled = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  textTransform: 'inherit',
  whiteSpace: 'nowrap',
  fontSize: '16px',
  background: '#CB11AB',
  '&.MuiButton-contained': {
    border: 'none',
    color: '#ffffff'
  },
  '&:active': {
    border: 'none',
    background: '#C90EA9'
  },
  '&:hover': {
    background: '#E313BF'
  },
  '&.Mui-disabled': {
    backgroundColor: 'rgb(81, 81, 81)',
    color: '#fff',
    cursor: 'not-drop',
    border: 'none'
  }
}))

const Button = ({ children, ...props }: ButtonProps & { children: React.ReactNode }) => {
  return (
    <>
      <MuiButtonStyled {...props}>{children}</MuiButtonStyled>
    </>
  )
}

export default Button
