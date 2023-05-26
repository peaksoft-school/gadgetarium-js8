import { ColorResult, SketchPicker } from 'react-color'

import { styled } from '@mui/material'
import IconButtons from './UI/buttons/IconButtons'
import { Palette } from '@mui/icons-material'

type PropsColorPicker = {
  openColorPicker: boolean
  openColorHandler: () => void
  color: string
  colorPickerHandler: ColorResult | any
}

export const Container = styled('div')(() => ({
  border: ' .0625rem solid #CDCDCD',
  borderRadius: '.375rem',
  width: '20.75rem',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '.5rem 1.125rem',
  background: '#F7F7F7',
  margin: '.3125rem',
  paddingLeft: '1rem',
  '&:hover': {
    border: '.125rem solid #0a0a0a',
    background: '#F4F4F4',
    color: '#0b0b0b',
    path: {
      fill: '#969696'
    }
  },
  '&:focus': {
    border: '.125rem solid #0a0a0a',
    background: '#F4F4F4',
    color: '#0b0b0b'
  },
  '&:active': {
    path: {
      fill: '#CB11AB'
    }
  }
}))

export const StyledInput = styled('input')(() => ({
  background: 'none',
  color: '#333131',
  width: '90%',
  height: '18px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  outline: 'none',
  flex: 'none',
  border: 'none',
  order: '0',
  flexRow: '0'
}))

const ReusableColorPicker = ({
  openColorHandler,
  colorPickerHandler,
  openColorPicker,
  color
}: PropsColorPicker) => {
  return (
    <>
      <Container>
        <StyledInput type="text" value={color} placeholder="Основной цвет" />
        <IconButtons onClick={openColorHandler} icon={<Palette />} />
      </Container>
      {openColorPicker && <SketchPicker color={color} onChange={colorPickerHandler} />}
    </>
  )
}

export default ReusableColorPicker
