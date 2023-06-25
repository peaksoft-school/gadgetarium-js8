type SnackbarHandler = (message: string, type: 'error' | 'success' | undefined) => void

export enum UserRoles {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export type SignUpUser = {
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  password: string
}

export type MailingListType = {
  name: string
  description: string
  image: string | File
  dateOfStart: string
  snackbar: SnackbarHandler
  dateOfFinish: string
}

export type Column<T> = {
  header: string
  key: string
  width?: string | number
  index?: boolean
  cell?: string
  style?: string
  render?: (product: T) => JSX.Element
  checked?: boolean
}
export interface BannerListType {
  bannerList: ImageUrlsType
}
export type ImageUrlsType = File[]

export type OrderPaginationType = {
  currentPage: number
  totalPages: number
  countOfElements: number
}
