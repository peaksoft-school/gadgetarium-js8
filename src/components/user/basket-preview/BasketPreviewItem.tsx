import { styled, Divider } from '@mui/material'
import { ReactComponent as RemoveIcon } from '../../../assets/icons/basket-preview-icons/removeIcon.svg'
import IconButtons from '../../UI/buttons/IconButtons'

const StyledImage = styled('img')(() => ({
  width: '6.25rem',
  height: '4.375rem',
  marginLeft: '-0.8rem'
}))

const StyledDescription = styled('p')(() => ({
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '150%',
  color: '#292929'
}))

const StyledPrice = styled('p')(() => ({
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '0.875rem',
  lineHeight: '1.0625rem',
  color: '#384255',
  margin: '0rem 2rem 1.5rem 0rem'
}))

const ProductContainer = styled('li')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  listStyle: 'none',
  padding: '1.5rem 1rem 0.5rem 1rem'
}))

const ProductInfoContainer = styled('div')(() => ({
  display: 'flex'
}))

const PriceAndRemoveIconCont = styled('div')(() => ({
  display: 'flex',
  marginRight: '0.6rem'
}))

const StyledDivider = styled(Divider)(() => ({
  width: '29.4rem',
  height: '0.0625rem',
  background: 'rgba(133, 143, 164, 0.15)',
  borderRadius: '1px',
  margin: '0 auto'
}))

const StyledIconButtons = styled(IconButtons)(() => ({
  height: '1.75rem',
  marginTop: '-0.5rem'
}))

type HoveredBasketProps = {
  title: string
  price: number
  img: string | undefined
}

const BasketPreviewItem = ({ title, price, img }: HoveredBasketProps) => {
  return (
    <div>
      <ProductContainer>
        <ProductInfoContainer>
          <StyledImage src={img} alt="phone" />
          <StyledDescription>{title}</StyledDescription>
        </ProductInfoContainer>
        <PriceAndRemoveIconCont>
          <StyledPrice>{price}c</StyledPrice>
          <StyledIconButtons icon={<RemoveIcon />} />
        </PriceAndRemoveIconCont>
      </ProductContainer>
      <StyledDivider />
    </div>
  )
}

export default BasketPreviewItem
