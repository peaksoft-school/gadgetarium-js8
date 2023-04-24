import React, { ReactNode } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

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
