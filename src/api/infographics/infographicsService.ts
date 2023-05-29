import { mainApi } from '../../config/instances'

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

export const getInfographicsRequest = () => {
  return mainApi.get<InfographicssResponse>('/api/infographics/infographic')
}
