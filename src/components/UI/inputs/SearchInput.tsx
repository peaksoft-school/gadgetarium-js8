import React from 'react'

import { ReactComponent as WhiteSearchIcon } from '../../../assets/icons/whiteSearchIcon.svg'
import { styled } from '@mui/material'
import IconButtons from '../IconButtons'

type SearchInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export const Container = styled('div')(() => ({
  width: '100%',
  background: 'none',
  height: '42px',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '8px 18px',
  border: '1px solid #FFFFFF',
  borderRadius: '10px',
  '&:hover': {
    background: '#FAFAFA',
    color: '#eaeff8',
    path: {
      fill: '#969696'
    }
  },
  '&:focus': {
    color: '#e7e1e1'
  },
  '&:active': {
    path: {
      fill: '#CB11AB'
    }
  }
}))

export const StyledInput = styled('input')(() => ({
  background: 'none',
  color: '#b8afaf',
  width: '95%',
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

export const SearchInput = ({ ...props }: SearchInputProps) => {
  return (
    <Container>
      <StyledInput {...props} />
      <IconButtons icon={<WhiteSearchIcon />} />
    </Container>
  )
}
