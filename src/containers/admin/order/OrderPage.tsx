import { useDispatch } from 'react-redux'
import { Grid, InputBase, Paper, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import IconButtons from '../../../components/UI/buttons/IconButtons'
import { ReactComponent as SearchIcon } from '../../../assets/icons/header-icons/searchIcon.svg'
import Infographics from '../../../components/admin/product-infographics/Infographics'
import { AppDispatch } from '../../../redux/store'
import OrderTab from './tabs/OrderTab'
import { getInfographics } from '../../../redux/store/infographics/infographicsThunk'
import { useSnackbar } from '../../../hooks/snackbar/useSnackbar'
import { DeliveryMenu } from '../../../components/admin/UI/menu-list/DeliveryMenu'
import PickupMenu from '../../../components/admin/UI/menu-list/PickupMenu'
import { DeleteModalOrder } from './DeleteModalOrder'
import { useOrderAdmin } from '../../../hooks/order/useOrderAdmin'

const FirstContainer = styled('div')(() => ({
  width: '81.5625rem',
  marginRight: '5.3125rem'
}))

const StyledPaper = styled(Paper)(() => ({
  p: '0.125rem 0.25rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '32rem',
  border: '1px solid #91969E',
  borderRadius: '8px',
  background: 'transparent'
}))

const StyledGrid = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'space-between'
}))

const Main = styled('main')(() => ({
  margin: '7rem 4.6875rem',
  display: 'flex',
  justifyContent: 'space-between'
}))

const ProductsTabContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '3.125rem'
}))

const StyledSearchIcon = styled(SearchIcon)(() => ({
  path: {
    fill: '#91969E'
  }
}))

const OrderPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [changeTabColor, setChangeTabColor] = useState('В обработке')
  const { ToastContainer } = useSnackbar({
    autoClose: 2500,
    position: 'bottom-right'
  })
  const {
    updatedTab,
    chooseDeliveryTypeHandler,
    searchTermHandler,
    searchCharacters,
    deleteProductHandler,
    handleClose,
    openList,
    closeModalHandler,
    infographics,
    debouncedSearchTerm,
    openModal,
    getIdProduct,
    getNameProduct,
    getOrder,
    queryParams,
    searchTerm,
    delivered,
    anchorEl,
    setQueryParams
  } = useOrderAdmin()
  useEffect(() => {
    dispatch(getInfographics('day'))
  }, [])
  useEffect(() => {
    getOrder()
  }, [queryParams])
  useEffect(() => {
    if (debouncedSearchTerm.length != 0) {
      searchCharacters(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm])
  return (
    <>
      <>
        <DeleteModalOrder
          openModal={openModal}
          closeModalHandler={closeModalHandler}
          deleteHandler={() => deleteProductHandler(getIdProduct)}
          text={`Вы уверены, что хотите удалить товар
    ${getNameProduct}?`}
        />
        <Main>
          <FirstContainer>
            <StyledGrid>
              <StyledPaper>
                <InputBase
                  value={searchTerm}
                  onChange={searchTermHandler}
                  placeholder="Поиск по артикулу или ..."
                />
                <IconButtons icon={<StyledSearchIcon />} />
              </StyledPaper>
            </StyledGrid>
            {delivered ? (
              <DeliveryMenu
                open={openList}
                anchorEl={anchorEl}
                onClick={chooseDeliveryTypeHandler}
                onClose={handleClose}
              />
            ) : (
              <PickupMenu
                open={openList}
                anchorEl={anchorEl}
                onClick={chooseDeliveryTypeHandler}
                onClose={handleClose}
              />
            )}
            <ProductsTabContainer>
              <OrderTab
                tabs={updatedTab}
                defaultValue={changeTabColor}
                setQueryParams={setQueryParams}
                setChangeTabColor={setChangeTabColor}
              />
            </ProductsTabContainer>
          </FirstContainer>
          <Infographics infographicsData={infographics} />
        </Main>
      </>

      {ToastContainer}
    </>
  )
}

export default OrderPage
