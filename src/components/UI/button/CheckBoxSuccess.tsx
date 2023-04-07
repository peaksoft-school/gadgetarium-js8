import styled from '@emotion/styled'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
interface CheckBox {
  checked?: boolean
  onChange?: () => void
  label?: string
}
const StyledCheckBox = styled(Checkbox)({
  color: '#858FA4',
  '&.Mui-checked': {
    color: '#2FC509'
  }
})

export const CheckBoxSucces = ({ checked, onChange, label }: CheckBox) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<StyledCheckBox checked={checked} onChange={onChange} />}
        label={label}
      />
    </FormGroup>
  )
}
