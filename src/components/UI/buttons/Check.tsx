import { styled } from '@mui/material/styles'
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox'
import { ReactComponent as CheckIcon } from '../../../assets/icons/chek-icons/checkbox.svg'
import { FormControlLabel } from '@mui/material'
interface CheckBoxType {
  checked?: boolean
  onChange?: () => void
  label?: string
  changeColor?: string
}
const BpIcon = styled('span')(({ changeColor }: CheckBoxType & CheckboxProps) => ({
  borderRadius: 2,
  width: 20,
  height: 20,
  border: '1px solid #858FA4',
  'input:hover ~ &': {
    border: `1px solid ${changeColor}`
  }
}))

const BpCheckedIcon = styled(BpIcon)(({ changeColor }: CheckBoxType) => ({
  border: `1px solid ${changeColor} `,
  backgroundColor: `${changeColor}`,
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
  changeColor = '#CB11AB',
  ...rest
}: CheckBoxType) => {
  return (
    <StyledFormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          checkedIcon={
            <BpCheckedIcon changeColor={changeColor}>
              <StyledCheckIcon />
            </BpCheckedIcon>
          }
          icon={<BpIcon changeColor={changeColor} />}
          inputProps={{ 'aria-label': 'Checkbox demo' }}
          {...rest}
        />
      }
      label={''}
    />
  )
}
