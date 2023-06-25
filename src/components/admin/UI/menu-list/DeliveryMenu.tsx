import { Menu, MenuItem } from '@mui/material'
type Props = {
  open: boolean
  onClick: (id: number) => void
  onClose?: () => void
  anchorEl: null | HTMLElement
}
export const DeliveryMenu = ({ anchorEl, open, onClick, onClose }: Props) => {
  const MenuList = [
    {
      id: 1,
      title: 'В ожидании'
    },
    {
      id: 2,
      title: 'Готов к выдаче'
    },
    {
      id: 3,
      title: 'Получен'
    },
    {
      id: 4,
      title: 'Отменить'
    }
  ]
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button'
      }}
    >
      {MenuList.map((menuItem) => {
        return (
          <MenuItem key={menuItem.id} onClick={() => onClick(menuItem.id)}>
            {menuItem.title}
          </MenuItem>
        )
      })}
    </Menu>
  )
}
