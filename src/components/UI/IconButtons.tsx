import { IconButton } from '@mui/material'

type Props = {
  icon?: React.ReactNode
  onClick?: () => void
}

const IconButtons = ({ icon, ...restProps }: Props) => {
  return <IconButton {...restProps}>{icon}</IconButton>
}

export default IconButtons
