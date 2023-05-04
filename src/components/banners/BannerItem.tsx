import IconButtons from '../UI/IconButtons'
import { Grid, styled } from '@mui/material'
import { ReactComponent as DeletePictureIcon } from '../../assets/icons/banner-icons/delete-icon.svg'
interface PropsType {
  deleteItem: (ID: string) => void
  imageUrl: string
  id: string
}
const StyledIconButtons = styled(IconButtons)(() => ({
  padding: 0,
  position: 'absolute',
  top: '0',
  right: '0'
}))
const StyledImage = styled('img')(() => ({
  width: '100%',
  height: '100%'
}))
const StyledGrid = styled(Grid)(() => ({
  position: 'relative',
  width: '100%',
  height: '100%'
}))
export const BannerItem = ({ imageUrl, deleteItem, id }: PropsType) => {
  return (
    <StyledGrid>
      <StyledImage src={imageUrl} alt="Uploaded Image" />
      <StyledIconButtons icon={<DeletePictureIcon />} onClick={() => deleteItem(id)} />
    </StyledGrid>
  )
}
