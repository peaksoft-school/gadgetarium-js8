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

const getInfographicsRequest = () => {
  return mainApi.get<InfographicssResponse>('/api/infographics/infographic')
}

export default {
  getInfographicsRequest
}
