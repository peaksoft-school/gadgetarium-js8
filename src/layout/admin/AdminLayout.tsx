import React, { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import OrderPage from '../../containers/orders/OrderPage'

type AdminLayoutProps = {
  children?: ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div>
      <OrderPage />
      <div>
        {children}
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
