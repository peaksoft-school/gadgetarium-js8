import styled from '@emotion/styled'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

interface CheckBox {
  label?: string
  checked?: boolean
  onChange?: () => void
}
const StyledCheckBox = styled(Checkbox)(() => ({
  '&:hover': {
    color: '#CB11AB'
  },
  '&.Mui-checked': {
    color: '#CB11AB'
  },
  color: '#858FA4'
}))

export const CheckBoxLabels = ({ checked, onChange, label }: CheckBox) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<StyledCheckBox checked={checked} onChange={onChange} />}
        label={label}
      />
    </FormGroup>
  )
}
