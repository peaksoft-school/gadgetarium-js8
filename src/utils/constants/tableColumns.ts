export type Column<T> = {
  header: string
  key: string
  minWidth?: string | number
  index?: boolean
  render?: (meal: T) => JSX.Element
}
