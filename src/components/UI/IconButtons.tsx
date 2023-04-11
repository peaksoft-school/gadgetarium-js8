import { IconButton } from '@mui/material'

type Props = {
  icon?: React.ReactNode
}

const IconButtons = ({ icon, ...restProps }: Props) => {
  return <IconButton {...restProps}>{icon}</IconButton>
}

export default IconButtons
