import IconButtons from '../../../UI/buttons/IconButtons'
import { Grid, styled } from '@mui/material'
import { ReactComponent as DeletePictureIcon } from '../../../../assets/icons/banner-icons/delete-icon.svg'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../redux/store'
import { bannerAction } from '../../../../redux/store/banner/banner.slice'
interface PropsType {
  url: string
  id: number
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
export const BannerItem = ({ url, id }: PropsType) => {
  const dispatch = useDispatch<AppDispatch>()
  const removeItem = () => {
    dispatch(bannerAction.deleteImage(id))
  }
  return (
    <StyledGrid>
      <StyledImage src={url} alt="Uploaded Image" />
      <StyledIconButtons icon={<DeletePictureIcon />} onClick={removeItem} />
    </StyledGrid>
  )
}
