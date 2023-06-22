import { Menu, MenuItem } from '@mui/material'
type Props = {
  open: boolean
  onClick: (id: number) => void
  onClose?: () => void
  anchorEl: null | HTMLElement
}
const PickupMenu = ({ anchorEl, open, onClick, onClose }: Props) => {
  const MenuListPickup = [
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
      title: 'Курьер в пути'
    },
    {
      id: 4,
      title: 'Доставлен'
    },
    {
      id: 5,
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
      {MenuListPickup.map((menu) => {
        return (
          <MenuItem key={menu.id} onClick={() => onClick(menu.id)}>
            {menu.title}
          </MenuItem>
        )
      })}
    </Menu>
  )
}
export default PickupMenu
