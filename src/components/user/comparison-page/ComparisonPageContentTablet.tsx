/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react'
import * as ITEMS from './compareItems'
import { CompareProducts } from '../../../api/compare-products/compareProductsService'
import { Button, IconButton, styled } from '@mui/material'
import { ReactComponent as Delete } from '../../../assets/icons/compare-icons/deleteIconn.svg'
import { ReactComponent as ArrowSlider } from '../../../assets/icons/compare-icons/arrow2.svg'
import { ReactComponent as BasketIcon } from '../../../assets/icons/header-icons/basketIcon.svg'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
import {
  addNewProductToBusket,
  addNewProductToComparison
} from '../../../redux/store/userMainPage/MainPage.thunk'
import { useSnackbar } from '../../../hooks/snackbar/useSnackbar'
import { getAllCompareProducts } from '../../../redux/store/compare-products/compareProducts.thunk'
import { incrementQuantityComparison } from '../../../redux/store/countProduct/countProductComparison.thunk'

const ComparisonToolsTable = styled('table')`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
`

const ComparisonToolsTdLeft = styled('td')`
  text-align: center;
  width: 300px;
  vertical-align: top;
  font-size: 14px;
`

const ComparisonToolsRightDiv = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
`

const ComparisonToolSLeftUl = styled('ul')`
  margin-top: 422px;
  list-style: none;
  & li {
    border-bottom: 1px solid #eee;
    text-align: left;
    height: 35px;
    line-height: 35px;
    white-space: nowrap;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 16px;
    color: #292929;
  }
`

const LeftArrowSlider = styled(ArrowSlider)`
  top: 30%;
  width: 50px;
  height: 50px;
  background: #fff;
  position: absolute;
  left: 0;
  transform: rotate(180deg);
  border-radius: 25px;
  cursor: pointer;
  border: 1px solid #cb11ab;
  transition: 0.4s;
  &:hover {
    box-shadow: 0px 2px 6px rgb(0 0 0 / 7%), 0px 0px 25px rgb(0 0 0 / 10%);
    opacity: 1;
  }
`
const RightArrowSlider = styled(ArrowSlider)`
  top: 30%;
  width: 50px;
  height: 50px;
  position: absolute;
  right: 0;
  left: 60rem;
  background: #fff;
  border-radius: 25px;
  cursor: pointer;
  border: 1px solid #cb11ab;
  transition: 0.4s;
  &:hover {
    box-shadow: 0px 2px 6px rgb(0 0 0 / 7%), 0px 0px 25px rgb(0 0 0 / 10%);
    opacity: 1;
  }
`

const ComparisonPageTools = styled('div')`
  margin-top: 34px;
`

const ComparisonPageCard = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 220px;
  height: 370px;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  padding: 12px;
  transition: 0.5s ease;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
    transform: scale(10px);
  }
`
const StyledSecondButton = styled(Button)(() => ({
  padding: '10px 24px',
  gap: '10px',
  width: '160px',
  height: '43px',
  background: '#CB11AB',
  borderRadius: '4px',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '19px',
  textTransform: 'none',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#f200ca'
  }
}))

const ComparisonToolsTdRight = styled('td')`
  width: 100%;
  padding-left: 8px;
  font-size: 14px;
  vertical-align: top;
`
const ComparisonToolsRightUl = styled('ul')`
  width: 100%;
  overflow-x: scroll;
  list-style: none;
  display: flex;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`
const ComparisonToolsRightLi = styled('li')`
  width: 220px;
  display: inline-block;
  margin-left: 30px;
  margin-bottom: 12px;
  & ul {
    margin-top: 54px;
    overflow: hidden;
    clear: both;
    list-style: none;
    & li {
      border-bottom: 1px solid #eee;
      height: 35px;
      line-height: 35px;
      overflow: hidden;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #292929;
    }
  }
`

const ComparisonCardClear = styled('div')`
  display: flex;
  justify-content: flex-end;
`

const ComparisonCardImage = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 3px;
  margin-bottom: 18px;
  & img {
    width: 155px;
    height: 170px;
    object-fit: contain;
  }
`

const ComparisonCardTitle = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  margin-left: 10px;
`

const ComparisonTitleHeader = styled('h1')`
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #292929;
`

const ComparisonTitleParagraph = styled('p')`
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  color: #292929;
  margin-top: 8px;
`

const ComparisonCardButton = styled('div')`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`

const renderSwitch = (param: string) => {
  switch (param) {
    case 'SMARTPHONE':
      return ITEMS.phoneItems
    case 'LAPTOP':
      return ITEMS.laptopItems
    case 'TABLET':
      return ITEMS.tabletItems
    case 'SMARTWATCHES':
      return ITEMS.smartWathchesItems
    default:
      return null
  }
}

type Props = {
  type: string
  data: CompareProducts[]
}

const ComparisonPageContentTablet = ({ type, data }: Props) => {
  const [queryParamsTablet] = useState({ categoryName: 'Планшет' })
  const [showAllProduct] = useState(5)
  const [showAllNewProduct] = useState(5)
  const [showAllRecomendProduct] = useState(5)
  const dispatch = useDispatch<AppDispatch>()
  const { snackbarHanler, ToastContainer } = useSnackbar({
    autoClose: 3000,
    position: 'top-right'
  })
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const snackbarHandler = (message: string, type: 'success' | 'error' | undefined) => {
    snackbarHanler({
      message: message,
      linkText: '',
      type: type
    })
  }

  useEffect(() => {
    dispatch(getAllCompareProducts(queryParamsTablet))
  }, [])

  const slideRef = useRef<HTMLUListElement | null>(null)

  const slideLeft = () => {
    if (slideRef.current) {
      slideRef.current.scrollLeft -= 100
    }
  }

  const slideRight = () => {
    if (slideRef.current) {
      slideRef.current.scrollLeft += 500
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addProductToBusket = (e: any, subProductId: number) => {
    e.stopPropagation()
    dispatch(addNewProductToBusket({ id: subProductId, snackbar: snackbarHandler }))
  }

  const handleCountQuantityComparison = () => {
    dispatch(incrementQuantityComparison())
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
  return (
    <>
      <ComparisonPageTools>
        <ComparisonToolsTable>
          <tbody>
            <tr>
              <ComparisonToolsTdLeft>
                <div>
                  <ComparisonToolSLeftUl>
                    {renderSwitch(type)?.map((dataa) => (
                      <li key={dataa.id}>{dataa.placeholder}</li>
                    ))}
                  </ComparisonToolSLeftUl>
                </div>
              </ComparisonToolsTdLeft>
              <ComparisonToolsTdRight>
                <ComparisonToolsRightDiv>
                  <ComparisonToolsRightUl ref={slideRef}>
                    <LeftArrowSlider onClick={slideLeft} />
                    {data?.map((el) => (
                      <ComparisonToolsRightLi key={el.name}>
                        <ComparisonPageCard>
                          <ComparisonCardClear>
                            <IconButton
                              onClick={(e) =>
                                productMovedToComparisonHandle(e, el.subProductId, true)
                              }
                            >
                              <Delete />
                            </IconButton>
                          </ComparisonCardClear>
                          <ComparisonCardImage>
                            <img src={el.img} alt={el.name} />
                          </ComparisonCardImage>
                          <ComparisonCardTitle>
                            <ComparisonTitleHeader>{el.name}</ComparisonTitleHeader>
                            <ComparisonTitleParagraph>{el.price} с</ComparisonTitleParagraph>
                          </ComparisonCardTitle>
                          <ComparisonCardButton>
                            <StyledSecondButton
                              onClick={(e) => addProductToBusket(e, el.productId)}
                            >
                              <BasketIcon />В корзину
                            </StyledSecondButton>
                          </ComparisonCardButton>
                        </ComparisonPageCard>
                        <ul key={el.productId}>
                          <>
                            <li key={el.productId}>{el.brandName}</li>
                            <li key={el.productId}>{el.color}</li>
                            <li key={el.productId}>{el.memory}</li>
                          </>
                        </ul>
                      </ComparisonToolsRightLi>
                    ))}
                    <RightArrowSlider onClick={slideRight} />
                  </ComparisonToolsRightUl>
                </ComparisonToolsRightDiv>
              </ComparisonToolsTdRight>
            </tr>
          </tbody>
        </ComparisonToolsTable>
      </ComparisonPageTools>
    </>
  )
}

export default ComparisonPageContentTablet
