import IconButtons from '../../../UI/buttons/IconButtons'
import { Grid, styled } from '@mui/material'
import { ReactComponent as DeletePictureIcon } from '../../../../assets/icons/banner-icons/delete-icon.svg'
interface PropsType {
  url: string
  id: number
  deleteImage: (id: number) => void
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
export const BannerItem = ({ url, id, deleteImage }: PropsType) => {
  return (
    <StyledGrid>
      <StyledImage src={url} alt="Uploaded Image" />
      <StyledIconButtons icon={<DeletePictureIcon />} onClick={() => deleteImage(id)} />
    </StyledGrid>
  )
}
