import { useDispatch, useSelector } from 'react-redux'
import { FavouriteType, favouriteActions } from '../../../redux/store/favourites/favourites.slice'
import { AppDispatch, RootState } from '../../../redux/store'
import {
  postOrDeleteFavourites,
  postToBasketFromFavourite,
  postToComporisonsFromFavourite
} from '../../../redux/store/favourites/favourites.thunk'
import { FavouriteCard } from '../card/FavouriteCard'
import { useSnackbar } from '../../../hooks/snackbar/useSnackbar'

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
    <>
      {items?.map((item) => {
        return (
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
            isFavourite={item.isFavourite}
            scaleIconOnClick={() => {
              const data = { id: item.subProductId, isCompare: true }
              dispatch(postToComporisonsFromFavourite(data))
              snackbarHanler({
                message: 'Товар добавлен в список сравнения!',
                linkText: '',
                type: 'success'
              })
            }}
            basketOnClick={() => {
              const data = { subproductId: item.subProductId, quantity: 1 }
              const count = totalQuantity + 1
              dispatch(postToBasketFromFavourite(data))
              dispatch(favouriteActions.addCount(count))
              snackbarHanler({
                message: 'Товар успешно добавлен в корзину!',
                linkText: '',
                type: 'success'
              })
            }}
            heartIconOnClick={() => {
              const data = {
                id: item.subProductId,
                isFavourite: !item.isFavourite,
                snackbar: reusableSnackbarHandle
              }
              dispatch(favouriteActions.favourite({ id: item.subProductId }))
              dispatch(postOrDeleteFavourites(data))
            }}
          />
        )
      })}
      {ToastContainer}
    </>
  )
}
