import { useParams } from 'react-router-dom'
import OrderInfoItem from './OrderInfoItem'
import { getByIdProductOrderRequest } from '../../../api/order/orderService'
import { useEffect, useState } from 'react'
import Loading from '../../../components/UI/loading/Loading'

const OrderInfoPage = () => {
  const { orderId = null } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const getOrderProduct = async () => {
    try {
      setIsLoading(true)
      const response = await getByIdProductOrderRequest(orderId)
    } catch (e) {
      setIsLoading(true)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getOrderProduct()
  }, [])
  return <>{isLoading ? <Loading /> : <OrderInfoItem />}</>
}

export default OrderInfoPage
