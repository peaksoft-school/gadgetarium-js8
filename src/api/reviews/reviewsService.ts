import { mainApi } from '../instances'
type Type = {
  answer: string
  commentary: string
  date: string
  grade: number
  id: number
  images: string[]
  productImg: string
  productItemNumber: number
  productName: string
  userEmail: string
  userImg: string
  userName: string
}

export type ReviewType = Type[]
type DeleteType = {
  id: number
}
type ValuesType = {
  reviewId: number
  answer: string
}
export const getReviewsRequest = (payload: string) => {
  return mainApi.get<ReviewType>(`/api/reviews?param=${payload}`)
}

export const deleteReviewByIdRequest = (id: number) => {
  return mainApi.delete<DeleteType>(`/api/reviews?id=${id}`)
}

export const postReviewsRequest = (values: ValuesType) => {
  return mainApi.post<ValuesType>(`/api/reviews`, values)
}
export const updateRequest = (values: ValuesType) => {
  return mainApi.put<ValuesType>('/api/reviews', values)
}

export const getFeedbackIngographicsRequest = () => {
  return mainApi.get('/api/reviews/feedback-infographic')
}
