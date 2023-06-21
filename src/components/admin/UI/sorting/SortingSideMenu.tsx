import React, { JSXElementConstructor, ReactElement } from 'react'
import { styled } from '@mui/material'
import { Popover } from '@mui/material'

const SortingItems = styled('ul')(() => ({
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  padding: '1.25rem',
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

type SortingSideMenuProps = {
  title: string
  children:
    | ReactElement<unknown, string | JSXElementConstructor<unknown>>
    | readonly ReactElement<unknown, string | JSXElementConstructor<unknown>>[]
}

const SortingSideMenu = (props: SortingSideMenuProps) => {
  const { title, children } = props

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const changedChildren = React.Children.map(
    children,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (child: ReactElement<any, string | JSXElementConstructor<unknown>>) =>
      React.cloneElement(child, { onClose: handleClose })
  )

  return (
    <>
      <li onClick={handleClick}>{title}</li>
      <Popover
        id="dropdown-id"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <SortingItems>{changedChildren}</SortingItems>
      </Popover>
    </>
  )
}

export default SortingSideMenu
