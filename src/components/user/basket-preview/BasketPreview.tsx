import { styled } from '@mui/material'
import BasketPreviewItem from './BasketPreviewItem'
import { ReactComponent as Triangle } from '../../../assets/icons/basket-preview-icons/triangleIcon.svg'
import Button from '../../UI/buttons/Button'

const MainContainer = styled('div')(() => ({
  position: 'relative',
  width: '32.875rem',
  height: '100%',
  marginLeft: '2.6rem',
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

type BasketPreviewProps<T extends { img?: string; name: string; price: number; image?: string }> = {
  productData: T[]
  childrenn: string
  totalAmount?: number
  navigateHandler: () => void
}

const BasketPreview = <T extends { img?: string; name: string; price: number; image?: string }>({
  productData,
  childrenn,
  totalAmount,
  navigateHandler
}: BasketPreviewProps<T>) => {
  return (
    <MainContainer>
      <StyledTriangle />
      {productData.map((data) => {
        return (
          <BasketPreviewItem
            img={data.img || data.image}
            title={data.name}
            price={data.price}
            key={data.name}
          />
        )
      })}
      <BottomContainer>
        <StyledButton onClick={navigateHandler}>{childrenn}</StyledButton>
        {totalAmount ? <TotalAmount>Итого {totalAmount}</TotalAmount> : null}
      </BottomContainer>
    </MainContainer>
  )
}

export default BasketPreview
