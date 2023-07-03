import { useDispatch, useSelector } from 'react-redux'
import { FavouriteType, favouriteActions } from '../../../redux/store/favourites/favourites.slice'
import { AppDispatch, RootState } from '../../../redux/store'
import {
  postOrDeleteFavourites,
  postToBasketFromFavourite,
  postToOrDeleteComporisonsFromFavourite
} from '../../../redux/store/favourites/favourites.thunk'
import { FavouriteCard } from '../card/FavouriteCard'
import { useSnackbar } from '../../../hooks/snackbar/useSnackbar'
import { styled } from '@mui/material'
const Container = styled('div')(() => ({
  display: 'flex',
  gap: '1.25rem',
  flexFlow: 'wrap'
}))
export const Favourites = ({ items }: { items: FavouriteType[] }) => {
  const dispatch = useDispatch<AppDispatch>()
  const totalQuantity = useSelector((state: RootState) => state.favourites.totalQuantity)
  const { snackbarHanler, ToastContainer } = useSnackbar({ autoClose: 2500, position: 'top-right' })
  const reusableSnackbarHandle = (message: string, type: 'error' | 'success' | undefined) => {
    snackbarHanler({
      message: message,
      linkText: '',
      type: type
    })
  }
  return (
    <Container>
      {items?.map((item) => {
        return (
          <div style={{ display: 'flex' }}>
            <FavouriteCard
              ellipseColor="#F53B49"
              ellipseChildren={`-${item.discount}%`}
              key={item.subProductId}
              image={item.image}
              productText={item.productInfo}
              newPrice={item.newPrice}
              oldPrice={item.price}
              amount={item.quantity}
              rating={item.rating}
              quantityOfPeople={null}
              isFavourite={item.inFavorites}
              inComparisons={item.inComparisons}
              scaleIconOnClick={() => {
                const data = {
                  id: item.subProductId,
                  isCompare: !item.inComparisons,
                  snackbar: reusableSnackbarHandle
                }
                dispatch(postToOrDeleteComporisonsFromFavourite(data))
              }}
              basketOnClick={() => {
                const data = {
                  subproductId: item.subProductId,
                  quantity: 1,
                  snackbar: reusableSnackbarHandle
                }
                const count = totalQuantity + 1
                dispatch(postToBasketFromFavourite(data))
                dispatch(favouriteActions.addCount(count))
              }}
              heartIconOnClick={() => {
                const data = {
                  id: item.subProductId,
                  isFavourite: !item.inFavorites,
                  snackbar: reusableSnackbarHandle
                }
                dispatch(favouriteActions.favourite({ id: item.subProductId }))
                dispatch(postOrDeleteFavourites(data))
              }}
            />
          </div>
        )
      })}
      {ToastContainer}
    </Container>
  )
}
