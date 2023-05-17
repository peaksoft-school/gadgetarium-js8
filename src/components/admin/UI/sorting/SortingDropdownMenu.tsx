import React, { JSXElementConstructor, ReactElement } from 'react'
import { Popover } from '@mui/material'
import { styled } from '@mui/material'
import { ReactComponent as VectorIcon } from '../../../../assets/icons/admin-header/vector.svg'

const Title = styled('p')(() => ({
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '0.875rem',
  color: '#384255',
  lineHeight: '130%',
  cursor: 'pointer'
}))

const StyledVector = styled(VectorIcon)(() => ({
  marginLeft: '0.5rem',
  path: {
    fill: '#384255'
  }
}))

const SortingItems = styled('ul')(() => ({
  padding: '1.25rem',
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  li: {
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.1875rem',
    color: '#292929',
    cursor: 'pointer',
    '&:hover': {
      color: '#cb11ab'
    }
  }
}))

type SortingDropdownMenuProps = {
  title: string
  color: string
  children:
    | ReactElement<{ onClose: () => void }, string | JSXElementConstructor<unknown>>
    | readonly ReactElement<{ onClose: () => void }, string | JSXElementConstructor<unknown>>[]
}

const SortingDropdownMenu = ({ children }: SortingDropdownMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLParagraphElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const changedChildren = React.Children.map(
    children,
    (child: ReactElement<{ onClose: () => void }, string | JSXElementConstructor<unknown>>) =>
      React.cloneElement(child, { onClose: handleClose })
  )

  return (
    <>
      <Title onClick={handleClick}>
        Сортировать
        <StyledVector />
      </Title>
      <Popover
        id="dropdown-id"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <SortingItems>{changedChildren}</SortingItems>
      </Popover>
    </>
  )
}

export default SortingDropdownMenu
