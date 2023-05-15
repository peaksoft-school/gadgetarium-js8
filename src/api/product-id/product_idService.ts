import { mainApi } from '../../config/instances'

export type ReviewType = {
  image: string
  fullName: string
  createdAt: string
  grade: number
  commentary: string
  answer: string
}

export type ProductResponse = {
  subProductId: number
  logo: string
  images: string[]
  colours: string[]
  name: string
  quantity: number
  itemNumber: string
  rating: number
  countOfReviews: number
  color: string
  percentOfDiscount: number
  price: number
  oldPrice: number
  dateOfIssue: Date | null | string
  characteristics: {
    [key: string]: string
  }
  description: string
  video: string
  reviews: ReviewType[]
}

export type ProductIdRequestType = {
  productId: number
  color?: string | null
  page: number
}
export const getProductByIdRequest = ({ productId, color, page }: ProductIdRequestType) => {
  return mainApi.get<ProductResponse>(
    `api/user/products/get-by-id?productId=${productId}&color=${color}&page=${page}`
  )
}
