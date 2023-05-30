import { Rating, Typography, styled } from '@mui/material'
type Props = {
  five: number
  four: number
  three: number
  two: number
  one: number
}
const Container = styled('div')(() => ({
  padding: '.5rem',
  backgroundColor: '#fffff'
}))
const RatingTitle = styled(Typography)(() => ({
  display: 'flex',
  alignItems: 'center'
}))
const TableRating = ({ data }: { data: Props }) => {
  return (
    <Container>
      <RatingTitle>
        <Rating name="read-only" value={1} readOnly />({data.one})
      </RatingTitle>
      <RatingTitle>
        <Rating name="read-only" value={2} readOnly />({data.two})
      </RatingTitle>
      <RatingTitle>
        <Rating name="read-only" value={3} readOnly />({data.three})
      </RatingTitle>
      <RatingTitle>
        <Rating name="read-only" value={4} readOnly />({data.four})
      </RatingTitle>
      <RatingTitle>
        <Rating name="read-only" value={5} readOnly />({data.five})
      </RatingTitle>
    </Container>
  )
}

export default TableRating
