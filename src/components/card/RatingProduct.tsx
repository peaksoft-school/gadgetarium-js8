import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
interface Props {
  rating: number
  quantityOfPeople: number
}
const ProductRating = ({ rating, quantityOfPeople }: Props) => {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
        display: 'flex',
        alignItems: 'center',
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '15px',
        color: '#909CB5'
      }}
    >
      <Typography
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginRight: '6px',
          fontSize: '12px'
        }}
      >
        Рейтинг
      </Typography>
      <Rating
        readOnly
        sx={{
          fontSize: '14px'
        }}
        size="small"
        value={rating}
      />
      <Typography
        sx={{
          marginLeft: '4px',
          fontSize: '12px'
        }}
      >
        ({quantityOfPeople})
      </Typography>
    </Box>
  )
}
export default ProductRating
