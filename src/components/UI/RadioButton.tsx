import { FormControl, FormControlLabel, styled } from '@mui/material'
import Radio from '@mui/material/Radio'
import { ChangeEvent } from 'react'

export interface RadioType {
  checked?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  value?: string
  name?: string
  label?: string
}

const StyledRadio = styled(Radio)({
  '&:hover': {
    color: '#CB11AB'
  },
  '&.Mui-checked': {
    color: '#CB11AB'
  },
  color: '#858FA4'
})
export const RadioButton = ({
  checked,
  onChange,
  value = '',
  name = '',
  label = ''
}: RadioType) => {
  return (
    <FormControl>
      <FormControlLabel
        value={value}
        control={<StyledRadio checked={checked} onChange={onChange} value={value} name={name} />}
        label={label}
      />
    </FormControl>
  )
}
