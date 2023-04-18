import * as React from 'react'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
interface Props {
  rating: number
  totalRating: number
}
const ProductRating = ({ rating, totalRating }: Props) => {
  const [value, setValue] = React.useState<number | null>(rating)
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
        sx={{
          fontSize: '14px'
        }}
        size="small"
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      />
      <Typography
        sx={{
          marginLeft: '4px',
          fontSize: '12px'
        }}
      >
        ({totalRating})
      </Typography>
    </Box>
  )
}
export default ProductRating
