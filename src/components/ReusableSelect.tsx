import { FormControl, styled } from '@mui/material'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import React from 'react'

interface Option {
  name: string | number
  id: number
}

type SelectProps = {
  options: Option[]
  brands?: {
    subCategories?: {
      id: number
      name: string
    }
    brands?: {
      name: string
      id: number
      logo: string
    }
  }
  value: string | number
  onChange: any
  placeholder: string
  name: string
  id: string
  getOptionValue?: (option: Option) => any
}

export const StyledOption = styled(MenuItem)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '19px',
  color: '#0c0b0b',
  '&:hover': {
    background: '#CB11AB',
    borderRadius: '11px',
    color: '#000000'
  }
}))
export const StyledSelect = styled(Select)(() => ({
  '&.MuiSelect-outlined': {
    padding: '0px'
  },

  border: ' .0625rem solid #CDCDCD',
  borderRadius: '.375rem',
  width: '20.75rem',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  // padding: '.30px 8px',
  background: '#F7F7F7',
  margin: '.3125rem',

  '&:hover': {
    border: '.125rem solid #0a0a0a',
    background: '#F4F4F4',
    color: '#292929',
    path: {
      fill: '#969696'
    }
  },
  '&:focus': {
    border: '.125rem solid #0a0a0a',
    background: '#F4F4F4',
    color: '#292929'
  },
  '&:active': {
    path: {
      fill: '#CB11AB'
    }
  }
}))

export const ReusableSelect: React.FC<SelectProps> = ({
  id,
  options,
  value,
  onChange,
  placeholder,
  name,
  getOptionValue
}) => {
  return (
    <FormControl>
      <StyledSelect id={id} name={name} value={value} onChange={onChange} displayEmpty>
        <StyledOption value="" disabled sx={{ display: 'none' }}>
          {placeholder}
        </StyledOption>
        {options.map((option) => (
          <StyledOption key={option.id} value={getOptionValue ? getOptionValue(option) : option.id}>
            {option.name}
          </StyledOption>
        ))}
      </StyledSelect>
    </FormControl>
  )
}
