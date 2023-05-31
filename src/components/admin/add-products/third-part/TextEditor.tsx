/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { ToggleButton, ToggleButtonGroup, styled } from '@mui/material'
import { ReactComponent as Bold } from '../../../../assets/icons/admin-add-products/bold.svg'
import { ReactComponent as Italic } from '../../../../assets/icons/admin-add-products/italic.svg'
import { ReactComponent as Underline } from '../../../../assets/icons/admin-add-products/underline.svg'
import { ReactComponent as ListUl } from '../../../../assets/icons/admin-add-products/listUl.svg'
import { ReactComponent as ListOl } from '../../../../assets/icons/admin-add-products/listOl.svg'
import CustomTextField from './CustomTextField'

type Props = {
  onChange: any
  value: string
}

const IconStyled = styled(ToggleButton)(() => ({
  border: 'none'
}))

const StyledCustomTextField = styled(CustomTextField)((styles: any) => ({
  '&': {
    width: '100%',
    color: '#91969E',
    fontSize: '16px',
    fontFamily: 'Inter',
    paddingLeft: '20px',
    paddingTop: '16px',
    listStyle: 'square',
    fontWeight: styles.bold ? 700 : 400,
    fontStyle: styles.italic ? 'italic' : '',
    textDecoration: styles.underline ? 'underline' : '',
    '& .ccs-btngv5': {
      outline: 'none'
    }
  }
}))

const TextEditor = ({ onChange, value }: Props) => {
  const [selected, setSelected] = useState('')
  const bold = selected.includes('bold')
  const italic = selected.includes('italic')
  const underline = selected.includes('underlined')
  const handleSelection = (event: any, newSelected: string) => {
    setSelected(newSelected)
  }

  return (
    <>
      <div
        style={{
          marginTop: '8px',
          width: '812px',
          height: '335px',
          border: '1px solid #CDCDCD',
          borderRadius: '5px'
        }}
      >
        <ToggleButtonGroup
          value={selected}
          onChange={handleSelection}
          aria-label="text formatting"
          style={{
            display: 'flex',
            padding: ' 0.5rem 0rem 0.5rem 2rem',
            gap: '5rem',
            border: '1px solid #CDCDCD'
          }}
        >
          <IconStyled value="bold" aria-label="bold">
            <Bold />
          </IconStyled>
          <IconStyled value="italic" aria-label="italic">
            <Italic />
          </IconStyled>
          <IconStyled value="underlined" aria-label="underlined">
            <Underline />
          </IconStyled>
          <IconStyled value="list" aria-label="list">
            <ListUl />
          </IconStyled>
          <IconStyled value="number" aria-label="number">
            <ListOl />
          </IconStyled>
        </ToggleButtonGroup>
        <StyledCustomTextField
          sx={{ border: 'none', height: '266px !important' }}
          placeholder="Введите описание о товаре"
          onChange={onChange}
          value={value}
          name="description"
          minRows={10}
          maxRows={30}
          bold={bold}
          italic={italic}
          underline={underline}
        />
      </div>
    </>
  )
}

export default TextEditor
