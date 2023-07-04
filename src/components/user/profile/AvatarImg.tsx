import { Avatar, IconButton, Stack, styled } from '@mui/material'
import { ChangeEvent, FC, useState } from 'react'
import { ReactComponent as AvatarIcon } from '../../../assets/icons/AvatarIcon.svg'

interface ImagePickerProps {
  onSelectImage: (selectedFile: File) => void
}

const StyledImg = styled('img')(() => ({
  width: '100%',
  height: '100%',
  borderRadius: '100%',
  // objectFit: 'cover',
  background: 'none',
  '&.hover': {
    background: 'none'
  }
}))

const AvatarGroupStyle = styled(Avatar)`
  vertical-align: middle;
  border-radius: 50%;
  width: 140px;
  height: 140px;
  border: '1px solid #444343';
  background-color: '#e4e4e4';
`

// const StyledInput = styled('input')(() => ({
//   width: '100%',
//   height: '100%',
//   borderRadius: '50%'
// }))
const ImagePickerProfil: FC<ImagePickerProps> = ({ onSelectImage }) => {
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
        <input hidden accept="image/*" type="file" onChange={handleImageChange} />
        {!!selectedImage ? (
          <StyledImg src={selectedImage} alt="Selectede Image" />
        ) : (
          <AvatarGroupStyle variant="rounded">
            <AvatarIcon />
          </AvatarGroupStyle>
        )}
      </Stack>
    </IconButton>
  )
}
export default ImagePickerProfil
