import React, { ReactNode } from 'react'
import Header from '../../../components/user/header/Header'
import Footer from '../../../components/user/footer/Footer'
import { styled } from '@mui/material'

type MainLayoutProps = {
  children?: ReactNode
}
const Container = styled('div')(() => ({
  boxSizing: 'border-box',
  margin: '0',
  padding: '0'
}))

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}

export default MainLayout
