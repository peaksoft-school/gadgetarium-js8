import { IconButton } from '@mui/material'

type Props = {
  icon?: React.ReactNode
}

const IconButtons = ({ icon }: Props) => {
  return <IconButton>{icon}</IconButton>
}

export default IconButtons
