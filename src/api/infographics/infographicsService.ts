import { mainApi } from '../instances'

export interface InfographicsTypes {
  redeemedForTheAmount: number
  countRedeemed: number
  orderedForTheAmount: number
  countOrdered: number
  currentPeriod: number
  previousPeriod: number
}

type InfographicssResponse = {
  data: InfographicsTypes
}

export const getInfographicsRequest = (date: string) => {
  return mainApi.get<InfographicssResponse>(`/api/infographics/infographic?period=${date}`)
}
