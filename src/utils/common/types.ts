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
  image: string | null
  dateOfStart: string

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
