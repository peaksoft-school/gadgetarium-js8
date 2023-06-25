import React, { useEffect, useState } from 'react'
import { ProductCard } from '../card/ProductCard'
import { ReactComponent as LikeIcon } from '../../../assets/icons/userMainPageIcons/like.svg'
import { Button, styled } from '@mui/material'
import { useSnackbar } from '../../../hooks/snackbar/useSnackbar'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/store'
import { useNavigate } from 'react-router-dom'
import { incrementQuantityBusket } from '../../../redux/store/countProduct/countProductBusket.slice'
import { incrementQuantityComparison } from '../../../redux/store/countProduct/countProductComparison.thunk'
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
  outline: 'none',
  border: '1px solid #CB11AB',
  borderRadius: '4px',
  color: '#CB11AB',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '120%',
  '&.MuiButton-contained': {
    border: '1px solid #CB11AB',
    borderRadius: '4px'
  },
  '&:active': {
    borderRadius: '4px',
    border: '1px solid #CB11AB'
  },
  '&:hover': {
    borderRadius: '4px',
    border: '1px solid #CB11AB'
  },
  '&.Mui-disabled': {
    backgroundColor: 'rgb(81, 81, 81)',
    color: '#fff',
    cursor: 'not-drop',
    border: 'none'
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

  const handleCountQuantityComparison = () => {
    dispatch(incrementQuantityComparison())
  }
  const handleCountQuantityBusket = () => {
    dispatch(incrementQuantityBusket())
  }
  const addProductToBusket = (e: any, subProductId: number) => {
    e.stopPropagation()
    dispatch(addNewProductToBusket({ id: subProductId, snackbar: snackbarHandler }))
    handleCountQuantityBusket()
  }
  const productMovedToComparisonHandle = (e: any, subProductId: number, inComparisons: boolean) => {
    e.stopPropagation()
    const dataComparisons = {
      id: subProductId,
      isComparisons: !inComparisons,
      snackbar: snackbarHandler,
      showAllProduct,
      showAllNewProduct,
      showAllRecomendProduct
    }
    dispatch(addNewProductToComparison(dataComparisons))
    handleCountQuantityComparison()
  }

  const addProductToFavourites = (e: any, subProductId: number, inFavorites: boolean) => {
    e.stopPropagation()
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
      {discount.length ? (
        <StyledCartContainer>
          <StyledTitle>Aкция</StyledTitle>
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
                    basketOnClick={(e) => addProductToBusket(e, product.subProductId)}
                    ellipsIconOnClick={() => {}}
                    scaleIconOnClick={(e) =>
                      productMovedToComparisonHandle(e, product.subProductId, product.inComparisons)
                    }
                    heartIconOnClick={(e) =>
                      addProductToFavourites(e, product.subProductId, product.inFavorites)
                    }
                    image={product.image}
                    quantityOfPeople={product.countOfReviews}
                    inComparisons={product.inComparisons}
                    inFavorites={product.inFavorites}
                  />
                </div>
              ))}
            </StyledProduct>
            {discount.length > 5 ? null : (
              <ButtonContainer>
                <StyledButton onClick={showProductHandler} variant="outlined">
                  Показать еще
                </StyledButton>
              </ButtonContainer>
            )}
          </div>
        </StyledCartContainer>
      ) : null}

      {newProduct.length ? (
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
                    basketOnClick={(e) => addProductToBusket(e, product.subProductId)}
                    ellipsIconOnClick={() => {}}
                    scaleIconOnClick={(e) =>
                      productMovedToComparisonHandle(e, product.subProductId, product.inComparisons)
                    }
                    heartIconOnClick={(e) =>
                      addProductToFavourites(e, product.subProductId, product.inFavorites)
                    }
                    image={product.image}
                    quantityOfPeople={product.countOfReviews}
                    inComparisons={product.inComparisons}
                    inFavorites={product.inFavorites}
                  />
                </div>
              ))}
            </StyledProduct>
            {newProduct.length > 5 ? (
              <ButtonContainer>
                <StyledButton onClick={showNewProductHandler} variant="outlined">
                  Показать еще
                </StyledButton>
              </ButtonContainer>
            ) : null}
          </div>
        </StyledCartContainer>
      ) : null}
      {recommendProduct.length ? (
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
                    basketOnClick={(e) => addProductToBusket(e, product.subProductId)}
                    ellipsIconOnClick={() => {}}
                    scaleIconOnClick={(e) =>
                      productMovedToComparisonHandle(e, product.subProductId, product.inComparisons)
                    }
                    heartIconOnClick={(e) =>
                      addProductToFavourites(e, product.subProductId, product.inFavorites)
                    }
                    image={product.image}
                    quantityOfPeople={product.countOfReviews}
                    inComparisons={product.inComparisons}
                    inFavorites={product.inFavorites}
                  />
                </div>
              ))}
            </StyledProduct>
            {recommendProduct.length > 5 ? null : (
              <ButtonContainer>
                <StyledButton onClick={showRecomendProductHandler} variant="outlined">
                  Показать еще
                </StyledButton>
              </ButtonContainer>
            )}
          </div>
        </StyledCartContainer>
      ) : null}
    </>
  )
}

export default MenuProduct
