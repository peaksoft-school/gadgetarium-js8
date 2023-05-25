import { useEffect, useState } from 'react'
import AdminHeader from '../AdminHeader'
import Infographics from '../product-infographics/Infographics'
import { getAllReviews } from '../../../redux/store/reviews/reviews.thunk'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/store'
import { useSearchParams } from 'react-router-dom'
import { getInfographics } from '../../../redux/store/infographics/infographicsThunk'
import ReviewsTab from '../UI/tabs/ReviewsTab'
import { styled } from '@mui/material'
const ContainerFeedback = styled('div')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  padding: '6.875rem 5rem 17.5rem 5.3125rem',
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between'
}))
const Section = styled('section')(() => ({
  marginRight: '1.875rem'
}))
const ReviewsPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const infographicData = useSelector((state: RootState) => state.infographics)
  const [searchParams, setSearchParams] = useSearchParams()
  const [page, setPage] = useState('AllReviews')
  const handlerChangePage = (newPage: string) => {
    searchParams.set('page', `${newPage}`)
    setSearchParams(searchParams)
    setPage(newPage)
  }
  const defaultPage = () => {
    searchParams.set('page', 'AllReviews')
    setSearchParams(searchParams)
  }
  useEffect(() => {
    dispatch(getAllReviews(page))
  }, [page])

  useEffect(() => {
    const date = 'day'
    dispatch(getInfographics(date))
    defaultPage()
  }, [])
  return (
    <div style={{ width: '100%' }}>
      <AdminHeader />
      <ContainerFeedback>
        <Section>
          <ReviewsTab defaultValue="Все отзывы" handlerChangePage={handlerChangePage} page={page} />
        </Section>
        <Infographics infographicsData={infographicData.items} />
      </ContainerFeedback>
    </div>
  )
}
export default ReviewsPage
