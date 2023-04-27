import React, { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

type AdminLayoutProps = {
  children?: ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div>
      <p>AdminLayout</p>
      <div>
        {children}
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
