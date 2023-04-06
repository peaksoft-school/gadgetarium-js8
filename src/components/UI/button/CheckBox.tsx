import styled from '@emotion/styled'
import { Checkbox } from '@mui/material'

const StyledCheckBox = styled(Checkbox)(() => ({
  '&:hover': {
    color: '#CB11AB'
  },
  '&.Mui-checked': {
    color: '#CB11AB'
  },
  color: '#858FA4'
}))

export const CheckBox = () => {
  return <StyledCheckBox />
}
