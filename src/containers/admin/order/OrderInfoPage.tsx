import { useParams } from 'react-router-dom'
import OrderInfoItem from './OrderInfoItem'
import { getByIdProductOrderRequest } from '../../../api/order/orderService'
import { useEffect, useState } from 'react'
import Loading from '../../../components/UI/loading/Loading'
export type OrderDataType = {
  address: string
  customerName: string
  orderId: number
  orderNumber: number
  phoneNumber: string
  products: OrderProductType
  quantity: number
  status:
    | 'PENDING'
    | 'READY_FOR_DELIVERY'
    | 'COURIER_ON_THE_WAY'
    | 'DELIVERED'
    | 'RECEIVED'
    | 'CANCEL'
  totalPrice: number
}
type OrderProductItemType = {
  name: string
  percentOfDiscount: number
  sumOfDiscount: number
  totalPrice: number
}
type OrderProductType = OrderProductItemType[]
const OrderInfoPage = () => {
  const { orderId = null } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const orderIdNumber: number | null = Number(orderId)
  const [getInfoOrder, setGetInfoOrder] = useState<OrderDataType | null>(null)
  const getOrderProduct = async () => {
    try {
      setIsLoading(true)

      const { data } = await getByIdProductOrderRequest(orderIdNumber)
      if (data !== null) {
        setGetInfoOrder(data)
      }
    } catch (e) {
      setIsLoading(true)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getOrderProduct()
  }, [])
  return <>{isLoading ? <Loading /> : <OrderInfoItem getInfoOrder={getInfoOrder} />}</>
}

export default OrderInfoPage
