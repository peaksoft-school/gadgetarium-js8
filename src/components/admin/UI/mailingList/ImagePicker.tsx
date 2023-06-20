import { Avatar, IconButton, Stack, styled } from '@mui/material'
import { ChangeEvent, FC, useState } from 'react'
import { ReactComponent as AvatarIcon } from '../../../../assets/icons/AvatarIcon.svg'

interface ImagePickerProps {
  onSelectImage: (selectedFile: File) => void
}

const StyledImg = styled('img')`
  width: 60%;
  height: 50%;
`
const AvatarGroupStyle = styled(Avatar)`
  padding: 7rem;
  border-radius: 3px;
`

const StyledText = styled('p')`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 120%;
  margin-top: 13px;

  text-align: center;
  width: 100%;
  color: #91969e;
`
const StyledInput = styled('input')`
  width: 100%;
  height: 100%;
`
const ImagePicker: FC<ImagePickerProps> = ({ onSelectImage }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      const reader = new FileReader()

      reader.readAsDataURL(selectedFile)
      reader.onload = () => {
        const imageUrl = reader.result as string
        setSelectedImage(imageUrl)
        onSelectImage(selectedFile)
      }
    }
  }
  return (
    <IconButton color="primary" aria-label="upload picture" component="label">
      <Stack direction="row" spacing={2}>
        <StyledInput hidden accept="image/*" type="file" onChange={handleImageChange} />
        {!!selectedImage ? (
          <StyledImg src={selectedImage} alt="Selectede Image" />
        ) : (
          <AvatarGroupStyle sx={{ bgcolor: '#E2E4E8' }} variant="rounded">
            <div>
              <div>
                <AvatarIcon />
              </div>
              <div>
                <StyledText>Нажмите для добавления фотографии</StyledText>
              </div>
            </div>
          </AvatarGroupStyle>
        )}
      </Stack>
    </IconButton>
  )
}
export default ImagePicker
