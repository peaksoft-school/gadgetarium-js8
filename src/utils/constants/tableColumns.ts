export type Column<T> = {
  header: string | string[]
  key: string
  width?: string | number
  index?: boolean
  cell?: string
  style?: string
  render?: (product: T) => JSX.Element
  checked?: boolean
  align?: 'left' | 'right' | 'center'
}
