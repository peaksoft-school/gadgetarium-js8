import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDebounce } from '../../../hooks/useDebounced/useDebounce'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/store'
import { useNavigate } from 'react-router-dom'
import { getSearch } from '../../../redux/store/userMainPage/search.thunk'
import { SearchInput } from '../../UI/inputs/SearchInput'
import { Box, Paper, Stack, Typography, styled } from '@mui/material'

const Item = styled(Paper)(() => ({
  backgroundColor: 'rgba(255,255,255, 1)',
  textAlign: 'left',
  position: 'absolute',
  width: '100%',
  top: '100%',
  fontSize: '1rem',
  zIndex: '100',
  maxHeight: '260px',
  overflow: 'auto'
}))

const StyledTableCellImage = styled(Box)(() => ({
  height: '50px',
  alignItems: 'center',
  margin: ' 0 0 0 20px ',
  '& .image': {
    width: '100%',
    height: '80%',
    objectFit: 'contain',
    mixBlendMode: 'darken'
  }
}))
const BoxStyled = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',

  '& .product-name': {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: '16px'
  },
  '&:hover': {
    background: '#f1f1f2',
    cursor: 'pointer'
  }
}))
const StyledText = styled('p')(() => ({
  color: 'red',
  padding: '10px'
}))
const SearchItem = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [openProductModal, setOpenProductModal] = useState(false)
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')
  const debouncedSearchTerm = useDebounce(searchValue, 2000)
  const { products } = useSelector((state: RootState) => state.search.data)
  const openModalHandler = () => {
    setOpenProductModal((prevState) => !prevState)
  }
  const inputSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    openModalHandler()
  }
  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(getSearch({ keyword: debouncedSearchTerm }))
    } else {
      dispatch(getSearch({ keyword: null }))
    }
  }, [debouncedSearchTerm])

  const chooseProductHandler = (id: number) => {
    products.productCardResponses.find((product) => {
      if (product.sub_product_id === id) {
        navigate(`/user/product/${product.sub_product_id}`)
      }
    })
    setSearchValue('')
  }

  return (
    <Stack spacing={1} position="relative">
      <SearchInput
        value={searchValue}
        onChange={inputSearchHandler}
        placeholder=" Поиск по каталогу магазина"
      />
      {openProductModal ? (
        <Item className="item" onMouseLeave={openModalHandler}>
          {products.productCardResponses?.length === 0 ? (
            <StyledText>Не найденно</StyledText>
          ) : (
            products?.productCardResponses?.map((item) => (
              <BoxStyled
                key={item.sub_product_id}
                onClick={() => chooseProductHandler(item.sub_product_id)}
              >
                <StyledTableCellImage className="flex-start">
                  <img src={item.image} alt="" className="image" />
                </StyledTableCellImage>
                <Typography className="product-name">{item.fullname}</Typography>
              </BoxStyled>
            ))
          )}
        </Item>
      ) : null}
    </Stack>
  )
}

export default SearchItem
