import { styled } from '@mui/material'
import BasketPreviewItem from './BasketPreviewItem'
import { ReactComponent as Triangle } from '../../../assets/icons/basket-preview-icons/triangleIcon.svg'
import Button from '../buttons/Button'

const MainContainer = styled('div')(() => ({
  position: 'relative',
  width: '32.875rem',
  height: '100%',
  margin: '0 auto',
  marginTop: '7rem',
  marginBottom: '1rem',
  background: '#FFFFFF',
  boxShadow: '0rem 0.625rem 1.875rem rgba(133, 143, 164, 0.1)',
  borderRadius: '5px'
}))

const BottomContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '1rem'
}))

const TotalAmount = styled('p')(() => ({
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '0.875rem',
  lineHeight: '1.0625rem',
  color: '#292929'
}))

const StyledTriangle = styled(Triangle)(() => ({
  position: 'absolute',
  left: '27rem',
  top: '-1.8rem'
}))

const StyledButton = styled(Button)(() => ({
  backgroundColor: '#CB11AB',
  borderRadius: '4px',
  padding: '0.75rem 1.25rem',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '1rem',
  lineHeight: '1.1875rem',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#E313BF'
  }
}))

interface Product {
  id: string
  img: string
  title: string
  description: string
  price: number
}

interface BasketPreviewProps {
  productData: Product[]
}

const BasketPreview: React.FC<BasketPreviewProps> = ({ productData }) => {
  return (
    <MainContainer>
      <StyledTriangle />
      {productData.map((data) => {
        return (
          <BasketPreviewItem
            description={data.description}
            img={data.img}
            title={data.title}
            price={data.price}
            key={data.id}
          />
        )
      })}
      <BottomContainer>
        <StyledButton onClick={() => {}}>Оформить заказ</StyledButton>
        <TotalAmount>Итого 68 000 с</TotalAmount>
      </BottomContainer>
    </MainContainer>
  )
}

export default BasketPreview
