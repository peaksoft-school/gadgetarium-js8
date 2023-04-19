import { ButtonProps, IconButton } from '@mui/material'

interface Props extends ButtonProps {
  icon?: React.ReactNode
}

const IconButtons = ({ icon, ...restProps }: Props) => {
  return <IconButton {...restProps}>{icon}</IconButton>
}

export default IconButtons
