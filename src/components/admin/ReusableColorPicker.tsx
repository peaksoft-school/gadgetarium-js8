/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColorResult } from 'react-color'

import { IconButton, styled } from '@mui/material'

import { Palette } from '@mui/icons-material'
import IconButtons from '../UI/buttons/IconButtons'
import { ProductColor } from '../../api/color/productColorService'

type PropsColorPicker = {
  openColorPicker: boolean
  openColorHandler: () => void
  colors: any
  colorPickerHandler: ColorResult | any
  colour: string
}

export const Container = styled('div')(() => ({
  border: ' .0625rem solid #CDCDCD',
  borderRadius: '.375rem',
  width: '20.75rem',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '.08rem 1.125rem',
  background: '#F7F7F7',
  margin: '.3125rem',
  paddingLeft: '1rem',
  '&:hover': {
    border: '0.5px solid #CB11AB',
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

const StyledSquare = styled('div')(() => ({
  width: '20px',
  height: '20px',
  display: 'inline-block',
  margin: '5px'
}))

interface ColorSquareProps {
  color: string
}

const ColorSquare: React.FC<ColorSquareProps> = ({ color }) => (
  <StyledSquare style={{ backgroundColor: color }} />
)

const ReusableColorPicker = ({
  openColorHandler,
  colorPickerHandler,
  openColorPicker,
  colors,
  colour
}: PropsColorPicker) => {
  return (
    <>
      <Container onClick={openColorHandler}>
        <StyledInput required type="text" placeholder="Основной цвет" value={colour} />
        <IconButtons icon={<Palette />} />
      </Container>
      {openColorPicker ? (
        <div
          onMouseLeave={openColorHandler}
          style={{
            width: '22rem',
            height: '100%',
            backgroundColor: '#f3f3f3',
            paddingLeft: '1rem'
          }}
        >
          {colors.map((colorr: ProductColor) => (
            <IconButton
              size="small"
              sx={{ padding: '1px' }}
              onClick={() => colorPickerHandler(colorr.colorName)}
            >
              <ColorSquare key={Math.random().toString()} color={colorr.hexCode} />
            </IconButton>
          ))}
        </div>
      ) : null}
    </>
  )
}

export default ReusableColorPicker
