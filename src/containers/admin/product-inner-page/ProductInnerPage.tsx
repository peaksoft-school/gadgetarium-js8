import { useEffect, useState } from 'react'
import {
  ProductDetailsResponse,
  ProductIdRequestType,
  ProductResponse,
  getProductByIdRequest,
  getProductDetailsByIdRequest
} from '../../../api/product-id/product_idService'
import { Box, Tab, Tabs, Typography, styled } from '@mui/material'
import ProductInfo from './ProductInfo'
import { useParams } from 'react-router-dom'
import ProductDetails from './ProductDetails'

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
  const [value, setValue] = useState(0)
  const [details, setDetails] = useState([
    {
      id: 0,
      image: '',
      name: '',
      colour: '',
      characteristics: {
        da: 'ss'
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

  const obj = {
    productId: convertedProductId,
    colour: ''
  }
  const getOneProduct = async (req: ProductIdRequestType) => {
    try {
      const { data } = await getProductByIdRequest(req)

      setProduct(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getProductDetails = async (req: number) => {
    try {
      const { data } = await getProductDetailsByIdRequest(req)
      console.log(data)
      // setDetails(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getOneProduct(obj)
  }, [])

  return (
    <main style={{ width: '90%', margin: '7rem auto' }}>
      <p style={{ fontSize: '14px' }}>
        <StyledTopLink href="/admin">Товары</StyledTopLink> » {product.name}
      </p>
      <div style={{ borderBottom: '1px solid #CDCDCD' }}>
        <img style={{ width: '10rem' }} src={product.logo} alt="" />
      </div>

      <div style={{ padding: '2.5rem 0 1rem' }}>
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
      </div>
      <TabPanel value={value} index={0}>
        <ProductInfo getOneProduct={getOneProduct} product={product} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProductDetails />
      </TabPanel>
    </main>
  )
}

export default ProductInnerPage
