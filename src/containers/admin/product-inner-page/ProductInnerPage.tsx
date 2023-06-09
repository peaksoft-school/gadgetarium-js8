/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Tab, Tabs, Typography, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import {
  ProductDetailsResponse,
  ProductIdRequestType,
  ProductResponse,
  getProductByIdRequest,
  getProductDetailsByIdRequest
} from '../../../api/product-id/product_idService'
import ProductInfo from './ProductInfo'
import ProductDetails from './ProductDetails'
import { deleteProductByIdRequest } from '../../../api/product/productService'
import { useSnackbar } from '../../../hooks/snackbar/useSnackbar'
import { isAxiosError } from 'axios'

const StyledTopLink = styled('a')(() => ({
  color: '#91969E',
  textDecoration: 'none',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '140%'
}))

const StyledTabs = styled(Tabs)(() => ({
  backgroundColor: 'none',
  '& .MuiTabs-indicator': {
    display: 'none'
  }
}))

const StyledTabsBlock = styled('div')(() => ({
  padding: '2.5rem 0 1rem'
}))

const StyledMainBlock = styled('main')(() => ({
  width: '90%',
  margin: '7rem auto'
}))

const StyledProductLogo = styled('img')(() => ({
  width: '10rem'
}))

const StyledTab = styled(Tab)(() => ({
  background: '#E0E2E7',
  color: '#384255',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '19px',
  margin: '0 0.4rem',
  padding: '0.5 1.5rem',
  borderRadius: '4px',
  '&.Mui-selected': {
    background: '#384255',
    color: '#FFFFFF'
  }
}))

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const ProductInnerPage = () => {
  const { snackbarHanler, ToastContainer } = useSnackbar({
    autoClose: 2500,
    position: 'bottom-right'
  })
  const [value, setValue] = useState(0)
  const [details, setDetails] = useState<ProductDetailsResponse[]>([
    {
      id: 0,
      image: '',
      name: '',
      colour: '',
      characteristics: {
        ['s']: ''
      },
      quantity: 0,
      price: 0
    }
  ])
  const { productId } = useParams()
  const convertedProductId = Number(productId)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const [product, setProduct] = useState<ProductResponse>({
    productId: 0,
    subProductId: 0,
    logo: '',
    images: [],
    colours: [],
    name: '',
    quantity: 0,
    itemNumber: '',
    rating: 0,
    countOfReviews: 0,
    color: '',
    percentOfDiscount: 0,
    price: 0,
    oldPrice: 0,
    dateOfIssue: '',
    characteristics: {},
    description: '',
    video: ''
  })

  const navigate = useNavigate()

  const productName = product.name !== null ? product.name : 'Name Not Found!'

  const obj = {
    productId: convertedProductId,
    colour: ''
  }

  const getOneProduct = async (req: ProductIdRequestType) => {
    try {
      const { data } = await getProductByIdRequest(req)
      setProduct(data)
    } catch (e) {
      if (isAxiosError(e)) {
        return snackbarHanler({
          message: e.response?.data.message,
          linkText: '',
          type: 'error'
        })
      }
      return snackbarHanler({
        message: 'Что-то пошло не так',
        linkText: '',
        type: 'error'
      })
    }
  }

  const getProductDetails = async (req: number) => {
    try {
      const { data } = await getProductDetailsByIdRequest(req)

      setDetails(data)
    } catch (e) {
      if (isAxiosError(e)) {
        return snackbarHanler({
          message: e.response?.data.message,
          linkText: '',
          type: 'error'
        })
      }
      return snackbarHanler({
        message: 'Что-то пошло не так',
        linkText: '',
        type: 'error'
      })
    }
  }
  const deleteSubProductById = async (req: number[]) => {
    try {
      await deleteProductByIdRequest(req)
      getOneProduct(obj)
      snackbarHanler({
        message: 'Товар Успешно удален!',
        linkText: '',
        type: 'success'
      })
      navigate('/admin/products')
    } catch (e) {
      if (isAxiosError(e)) {
        return snackbarHanler({
          message: e.response?.data.message,
          linkText: '',
          type: 'error'
        })
      }
      return snackbarHanler({
        message: 'Что-то пошло не так',
        linkText: '',
        type: 'error'
      })
    }
  }

  useEffect(() => {
    getOneProduct(obj)
  }, [])

  return (
    <>
      <StyledMainBlock>
        {ToastContainer}
        <p style={{ fontSize: '14px' }}>
          <StyledTopLink href="/admin/products">Товары</StyledTopLink> » {productName}
        </p>
        <div style={{ borderBottom: '1px solid #CDCDCD' }}>
          <StyledProductLogo src={product.logo} alt="" />
        </div>

        <StyledTabsBlock>
          <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <StyledTab label="Товар" {...a11yProps(0)} />
            <StyledTab
              onClick={() => {
                getProductDetails(product.productId)
              }}
              label="Детали товара"
              {...a11yProps(1)}
            />
          </StyledTabs>
        </StyledTabsBlock>
        <TabPanel value={value} index={0}>
          <ProductInfo
            deleteSubProductById={deleteSubProductById}
            getOneProduct={getOneProduct}
            product={product}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ProductDetails
            getProductDetails={getProductDetails}
            productId={product.productId}
            deleteSubProductById={deleteSubProductById}
            details={details}
          />
        </TabPanel>
      </StyledMainBlock>
    </>
  )
}

export default ProductInnerPage
