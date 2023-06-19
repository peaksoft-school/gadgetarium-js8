import React, { useEffect, useState } from 'react'
import { ProductCard } from '../card/ProductCard'
import { ReactComponent as LikeIcon } from '../../../assets/icons/userMainPageIcons/like.svg'
import { Button, styled } from '@mui/material'
import { useSnackbar } from '../../../hooks/snackbar/useSnackbar'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/store'
import {
  addNewProductToBusket,
  addNewProductToComparison,
  addNewProductToFavorite
} from '../../../redux/store/userMainPage/MainPage.thunk'
import {
  getDiscountProduct,
  getNewProduct,
  getRecommendedProduct
} from '../../../redux/store/userMainPage/GetProduct.thunk'
import { useNavigate } from 'react-router-dom'
export type DiscountProduct =
  | {
      inFavorites: boolean
      inComparisons: boolean
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
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const { discount, newProduct, recommendProduct } = useSelector(
    (state: RootState) => state.getProducts
  )
  const [showAllProduct, setShowAllProduct] = useState(5)
  const [showAllNewProduct, setShowAllNewProduct] = useState(5)
  const [showAllRecomendProduct, setShowRecomendAllProduct] = useState(5)
  const { snackbarHanler, ToastContainer } = useSnackbar({
    autoClose: 3000,
    position: 'top-right'
  })
  const snackbarHandler = (message: string, type: 'success' | 'error' | undefined) => {
    snackbarHanler({
      message: message,
      linkText: '',
      type: type
    })
  }

  const addProductToBusket = (subProductId: number) => {
    dispatch(addNewProductToBusket({ id: subProductId, snackbar: snackbarHandler }))
  }
  const productMovedToComparisonHandle = (subProductId: number, inComparisons: boolean) => {
    const dataComparisons = {
      id: subProductId,
      isComparisons: !inComparisons,
      snackbar: snackbarHandler,
      showAllProduct,
      showAllNewProduct,
      showAllRecomendProduct
    }
    dispatch(addNewProductToComparison(dataComparisons))
  }

  const addProductToFavourites = (subProductId: number, inFavorites: boolean) => {
    const dataFavourite = {
      id: subProductId,
      isFavorites: !inFavorites,
      snackbar: snackbarHandler,
      showAllProduct,
      showAllNewProduct,
      showAllRecomendProduct
    }
    dispatch(addNewProductToFavorite(dataFavourite))
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

  useEffect(() => {
    dispatch(getNewProduct(showAllNewProduct))
  }, [showAllNewProduct])

  useEffect(() => {
    dispatch(getRecommendedProduct(showAllRecomendProduct))
  }, [showAllRecomendProduct])

  useEffect(() => {
    dispatch(getDiscountProduct(showAllProduct))
  }, [showAllProduct])

  return (
    <>
      {ToastContainer}
      <StyledCartContainer>
        <StyledTitle>Акции</StyledTitle>
        <div>
          <StyledProduct>
            {discount?.map((product) => (
              <div onClick={() => navigate(`/user/product/${product.subProductId}`)}>
                <ProductCard
                  id={product.subProductId}
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
                  basketOnClick={() => addProductToBusket(product.subProductId)}
                  ellipsIconOnClick={() => {}}
                  scaleIconOnClick={() =>
                    productMovedToComparisonHandle(product.subProductId, product.inComparisons)
                  }
                  heartIconOnClick={() =>
                    addProductToFavourites(product.subProductId, product.inFavorites)
                  }
                  image={product.image}
                  quantityOfPeople={product.countOfReviews}
                  inComparisons={product.inComparisons}
                  inFavorites={product.inFavorites}
                />
              </div>
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
            {newProduct?.map((product) => (
              <div onClick={() => navigate(`/user/product/${product.subProductId}`)}>
                <ProductCard
                  ellipseChildren="new"
                  id={product.subProductId}
                  ellipseColor="#2FC509"
                  amount={product.quantity}
                  productText={product.productInfo}
                  rating={product.rating}
                  newPrice={`${product.price}`}
                  oldPrice=""
                  basketOnClick={() => addProductToBusket(product.subProductId)}
                  ellipsIconOnClick={() => {}}
                  scaleIconOnClick={() =>
                    productMovedToComparisonHandle(product.subProductId, product.inComparisons)
                  }
                  heartIconOnClick={() =>
                    addProductToFavourites(product.subProductId, product.inFavorites)
                  }
                  image={product.image}
                  quantityOfPeople={product.countOfReviews}
                  inComparisons={product.inComparisons}
                  inFavorites={product.inFavorites}
                />
              </div>
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
            {recommendProduct.map((product) => (
              <div onClick={() => navigate(`/user/product/${product.subProductId}`)}>
                <ProductCard
                  id={product.subProductId}
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
                  basketOnClick={() => addProductToBusket(product.subProductId)}
                  ellipsIconOnClick={() => {}}
                  scaleIconOnClick={() =>
                    productMovedToComparisonHandle(product.subProductId, product.inComparisons)
                  }
                  heartIconOnClick={() =>
                    addProductToFavourites(product.subProductId, product.inFavorites)
                  }
                  image={product.image}
                  quantityOfPeople={product.countOfReviews}
                  inComparisons={product.inComparisons}
                  inFavorites={product.inFavorites}
                />
              </div>
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
