import React from 'react'
import { Link, styled, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { ReactComponent as DownloadIcon } from '../../../../assets/icons/admin-products/downloadIcon.svg'
import Banner from '../banners/Banner'

const StyledTab = styled(Tab)(() => ({
  backgroundColor: '#E0E2E7',
  padding: '0.5rem 1.25rem 0.5625rem 1.25rem',
  borderRadius: '0.25rem',
  color: '#384255',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '0.875rem',
  lineHeight: '1.1875rem',
  textTransform: 'none',
  marginRight: '1rem'
}))

const StyledTabPanel = styled(TabPanel)(() => ({
  padding: '1.875rem 0rem 0rem 0rem'
}))

const TabContainer = styled('div')(() => ({
  width: '100%'
}))

const DownloadLinkContainer = styled('div')(() => ({
  display: 'flex',
  textAlign: 'center',
  p: {
    marginTop: '2rem',
    color: '#384255',
    fontFamily: 'Inter, sans-serif',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '0.875rem',
    lineHeight: '1.0625rem',
    marginLeft: '0.4rem',
    textAlign: 'center'
  }
}))

const DownloadIconCont = styled('div')(() => ({
  marginTop: '1.7rem'
}))

const DownloadIconContainer = styled('div')(() => ({
  color: '#384255',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '0.875rem',
  lineHeight: '1.0625rem',
  marginLeft: '23rem'
}))

interface Product {
  id: number
  label: string
  value: string
  Component: React.ReactNode
}

interface ProductsTabProps {
  tabs: Product[]
  defaultValue: string
}

const FeedbackTab: React.FC<ProductsTabProps> = ({ tabs, defaultValue }) => {
  const [value, setValue] = React.useState(defaultValue)
  const [openModalBanner, setOpenModalBanner] = React.useState(false)
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  const openModalBannerHandler = () => {
    setOpenModalBanner(true)
  }
  const closeModalBannerHandler = () => {
    setOpenModalBanner(false)
  }
  return (
    <>
      <TabContainer>
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            TabIndicatorProps={{ style: { backgroundColor: 'transparent' } }}
            sx={{
              div: {
                '& button.Mui-selected': {
                  backgroundColor: '#384255',
                  color: '#fff'
                },
                '& .MuiTabs-indicator': {
                  display: 'none'
                }
              }
            }}
            aria-label="lab API tabs example"
          >
            {tabs?.map((el) => (
              <StyledTab key={el.id} label={el.label} value={el.value} />
            ))}

            <DownloadIconContainer>
              <Link href="#download" color="inherit" underline="none">
                <DownloadLinkContainer onClick={openModalBannerHandler}>
                  <DownloadIconCont>
                    <DownloadIcon />
                  </DownloadIconCont>
                  <p>Загрузить баннер</p>
                </DownloadLinkContainer>
              </Link>
            </DownloadIconContainer>
          </TabList>
          {tabs?.map((el) => {
            return (
              <StyledTabPanel key={el.id} value={el.value}>
                {el.Component}
              </StyledTabPanel>
            )
          })}
        </TabContext>
      </TabContainer>
      <Banner isOpen={openModalBanner} onClose={closeModalBannerHandler} />
    </>
  )
}

export default FeedbackTab
