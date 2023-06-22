import { styled } from '@mui/material/styles'
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox'
import { ReactComponent as CheckIcon } from '../../../assets/icons/chek-icons/checkbox.svg'
import { FormControlLabel } from '@mui/material'
import { ChangeEvent } from 'react'
interface CheckBoxType {
  checked?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  label?: string
  changecolor: string
}
const BpIcon = styled('span')(({ changecolor }: CheckBoxType) => ({
  borderRadius: 2,
  width: 20,
  height: 20,
  border: '1px solid #858FA4',
  'input:hover ~ &': {
    border: `1px solid ${changecolor}`
  }
}))

const BpCheckedIcon = styled(BpIcon)(({ changecolor }: CheckBoxType) => ({
  border: `1px solid ${changecolor} `,
  backgroundColor: `${changecolor}`,
  color: '#fff'
}))
const StyledCheckIcon = styled(CheckIcon)(() => ({
  marginBottom: '2.2px',
  marginLeft: '3.5px'
}))
const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  margin: 0
}))
export const CustomizeCheckbox = ({
  checked,
  onChange,
  label,
  changecolor = '#CB11AB',
  ...rest
}: CheckBoxType & CheckboxProps) => {
  return (
    <StyledFormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          checkedIcon={
            <BpCheckedIcon changecolor={changecolor}>
              <StyledCheckIcon />
            </BpCheckedIcon>
          }
          icon={<BpIcon changecolor={changecolor} />}
          inputProps={{ 'aria-label': 'Checkbox demo' }}
          {...rest}
        />
      }
      label={''}
    />
  )
}
