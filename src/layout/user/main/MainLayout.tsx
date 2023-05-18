import React, { ReactNode } from 'react'
import Header from '../../../components/user/header/Header'
import Footer from '../../../components/user/footer/Footer'

type MainLayoutProps = {
  children?: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
