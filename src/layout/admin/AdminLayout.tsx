import { ReactNode } from 'react'
import AdminHeader from '../../components/admin/AdminHeader'

type AdminLayoutProps = {
  children?: ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <>
      <AdminHeader />
      <main>{children}</main>
    </>
  )
}

export default AdminLayout
