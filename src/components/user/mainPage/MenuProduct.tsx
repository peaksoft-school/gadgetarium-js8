import React, { useEffect, useState } from 'react'
import { ProductCard } from '../card/ProductCard'
import MuiAlert from '@mui/material/Alert'
import { ReactComponent as LikeIcon } from '../../../assets/icons/userMainPageIcons/like.svg'
import {
  getDiscountProductService,
  getNewProductService,
  getRecommendedProductService
} from '../../../api/mainPage/getProductsService'
import { Button, Snackbar, styled } from '@mui/material'
import {
  AddProductToBasketService,
  AddProductToComparisonsService
} from '../../../api/mainPage/AddProductToBusketService'
// import Snackbar from '../../UI/snackbar/Snackbar'
type DiscountProduct =
  | {
      countOfReviews: number
      discount: number
      image: string
      price: number
      productInfo: string
      quantity: number
      rating: number
      subProductId: number
      newPrice: number
    }[]

const StyledProduct = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  gap: '8px'
}))

const StyledTitle = styled('h1')(() => ({
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '1.875rem',
  lineHeight: ' 110%',

  color: '#292929',
  paddingBottom: '1.25rem'
}))

const ButtonContainer = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center'
}))

const StyledButton = styled(Button)(() => ({
  marginTop: '2.1875rem',

  border: '1px solid #CB11AB',
  borderRadius: '4px',
  color: '#CB11AB',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '120%',
  '&.hover': {
    border: '1px solid #CB11AB',
    borderRadius: '4px',
    backgroundColor: '#CB11AB'
  },
  '&.focuse': {
    border: '1px solid #CB11AB',
    borderRadius: '4px',
    backgroundColor: '#CB11AB'
  }
}))

const StyledCartContainer = styled('div')(() => ({
  paddingBottom: '6.25rem'
}))

const MenuProduct = () => {
  const [newProduct, setNewProduct] = useState<{ elements: DiscountProduct }>()
  const [recommendProduct, setRecommendProduct] = useState<{ elements: DiscountProduct }>()
  const [discoundProduct, setDiscoundProduct] = useState<{
    elements: DiscountProduct
  }>()
  const [showAllProduct, setShowAllProduct] = useState(5)
  const [showAllNewProduct, setShowAllNewProduct] = useState(5)
  const [showAllRecomendProduct, setShowRecomendAllProduct] = useState(5)
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  const addToBusket = async (id: number) => {
    try {
      await AddProductToBasketService(id)
      setShowSnackbar(true)
      setSnackbarMessage('Товар успешно добавлен в корзину!')
    } catch (error) {
      setShowSnackbar(true)
      setSnackbarMessage('In the basket you can add only one product')
    }
  }
  const addToComparisons = async () => {
    await AddProductToComparisonsService()
  }

  const showProductHandler = () => {
    setShowAllProduct((prevState) => prevState + 5)
  }
  const showNewProductHandler = () => {
    setShowAllNewProduct((prevState) => prevState + 5)
  }
  const showRecomendProductHandler = () => {
    setShowRecomendAllProduct((prevState) => prevState + 5)
  }
  const getNewProducts = async () => {
    try {
      const { data } = await getNewProductService(showAllNewProduct)
      return setNewProduct(data)
    } catch (error) {}
  }

  useEffect(() => {
    getNewProducts()
  }, [showAllNewProduct])

  const getRecommendedProduct = async () => {
    try {
      const { data } = await getRecommendedProductService(showAllRecomendProduct)
      return setRecommendProduct(data)
    } catch (error) {}
  }

  useEffect(() => {
    getRecommendedProduct()
  }, [showAllRecomendProduct])

  const getDiscoundProduct = async () => {
    try {
      const { data } = await getDiscountProductService(showAllProduct)
      return setDiscoundProduct(data)
    } catch (error) {}
  }
  useEffect(() => {
    getDiscoundProduct()
  }, [showAllProduct])

  return (
    <>
      {/* <Snackbar message="Success" linkText="success"></Snackbar> */}
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000} // Adjust the duration as needed
        onClose={() => setShowSnackbar(false)}
        message={snackbarMessage}
      ></Snackbar>

      <StyledCartContainer>
        <StyledTitle>Акции</StyledTitle>

        <div>
          <StyledProduct>
            {discoundProduct?.elements.map((product) => (
              <>
                <ProductCard
                  ellipseChildren={`-${product.discount}%`}
                  ellipseColor="#F10000"
                  amount={product.quantity}
                  productText={product.productInfo}
                  rating={product.rating}
                  newPrice={
                    product.discount > 0
                      ? ((((100 - product.discount) * product.price) / 100).toFixed(
                          0
                        ) as unknown as number)
                      : 0
                  }
                  oldPrice={`${product.price}c`}
                  basketOnClick={() => addToBusket(product.subProductId)}
                  ellipsIconOnClick={() => {}}
                  scaleIconOnClick={() => addToComparisons()}
                  heartIconOnClick={() => {}}
                  image={product.image}
                  quantityOfPeople={product.countOfReviews}
                />
              </>
            ))}
          </StyledProduct>
          <ButtonContainer>
            <StyledButton onClick={showProductHandler} variant="outlined">
              Показать еще
            </StyledButton>
          </ButtonContainer>
        </div>
      </StyledCartContainer>
      <StyledCartContainer>
        <StyledTitle>Новинки</StyledTitle>
        <div>
          <StyledProduct>
            {newProduct?.elements.map((product) => (
              <>
                <ProductCard
                  ellipseChildren="new"
                  ellipseColor="#2FC509"
                  amount={product.quantity}
                  productText={product.productInfo}
                  rating={product.rating}
                  newPrice={`${product.price}`}
                  oldPrice=""
                  basketOnClick={() => addToBusket(product.subProductId)}
                  ellipsIconOnClick={() => {}}
                  scaleIconOnClick={() => addToComparisons()}
                  heartIconOnClick={() => {}}
                  image={product.image}
                  quantityOfPeople={product.countOfReviews}
                />
              </>
            ))}
          </StyledProduct>
          <ButtonContainer>
            <StyledButton onClick={showNewProductHandler} variant="outlined">
              Показать еще
            </StyledButton>
          </ButtonContainer>
        </div>
      </StyledCartContainer>
      <StyledCartContainer>
        <StyledTitle>Мы рекомендуем</StyledTitle>
        <div>
          <StyledProduct>
            {recommendProduct?.elements.map((product) => (
              <>
                <ProductCard
                  ellipseChildren={<LikeIcon />}
                  ellipseColor="#2C68F5"
                  amount={product.quantity}
                  productText={product.productInfo}
                  rating={product.rating}
                  newPrice={
                    product.discount > 0
                      ? ((((100 - product.discount) * product.price) / 100).toFixed(
                          0
                        ) as unknown as number)
                      : 0
                  }
                  oldPrice={`${product.price}c`}
                  basketOnClick={() => addToBusket(product.subProductId)}
                  ellipsIconOnClick={() => {}}
                  scaleIconOnClick={() => addToComparisons()}
                  heartIconOnClick={() => {}}
                  image={product.image}
                  quantityOfPeople={product.countOfReviews}
                />
              </>
            ))}
          </StyledProduct>
          <ButtonContainer>
            <StyledButton onClick={showRecomendProductHandler} variant="outlined">
              Показать еще
            </StyledButton>
          </ButtonContainer>
        </div>
      </StyledCartContainer>
    </>
  )
}

export default MenuProduct
