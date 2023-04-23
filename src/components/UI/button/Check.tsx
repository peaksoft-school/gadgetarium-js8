import { styled } from '@mui/material/styles'
import Checkbox from '@mui/material/Checkbox'
import { FormControlLabel } from '@mui/material'
import { ReactComponent as CheckIcon } from '../../../assets/icons/checkIcon.svg'

interface CheckBoxType {
  checked?: boolean
  onChange?: () => void
  label?: string
  changeColor?: string
}
const BpIcon = styled('span')(({ changeColor }: CheckBoxType) => ({
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
