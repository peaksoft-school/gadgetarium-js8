import { useState } from 'react'

export const useClientSidePagination = () => {
  const [pages] = useState(0)
  const [rowsPerPage] = useState(7)

  const paginate = <T>(rows: T[]) => {
    return rows.slice(pages * rowsPerPage, pages * rowsPerPage + rowsPerPage)
  }

  return {
    paginate
  }
}
