import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../../components/admin/AdminHeader'

type AdminLayoutProps = {
  children?: ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <>
      <AdminHeader />
      <main>
        {children}
        <Outlet />
      </main>
    </>
  )
}

export default AdminLayout
