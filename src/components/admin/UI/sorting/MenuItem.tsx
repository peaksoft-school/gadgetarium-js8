type MenuItemProps = {
  title: string
  onChange: (type: string, value: string | number | boolean) => void
  onClose?: () => void
  sortBy: string | number | boolean
}

const MenuItem = (props: MenuItemProps) => {
  const { title, onChange, sortBy } = props

  const onClickItemHandler = (value: string | number | boolean) => {
    if (props.onClose) props.onClose()
    onChange('sortBy', value)
  }

  return <li onClick={() => onClickItemHandler(sortBy)}>{title}</li>
}

export default MenuItem
