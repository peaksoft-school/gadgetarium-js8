import { useState } from 'react'

export const useClientSidePagination = () => {
  const [page] = useState(0)

  const paginate = <T>(rows: T[]) => {
    return rows.slice(page)
  }

  return {
    paginate
  }
}
