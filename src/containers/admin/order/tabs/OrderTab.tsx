import React from 'react'
import { Link, styled, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

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

const DownloadIconContainer = styled('div')(() => ({
  color: '#384255',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '0.875rem',
  lineHeight: '1.0625rem',
  marginLeft: '15rem'
}))

interface Order {
  id: number
  label: string
  value: string
  Component?: React.ReactNode
}

interface OrderTabProps {
  tabs: Order[]
  defaultValue: string
  setQueryParams?: React.Dispatch<
    React.SetStateAction<{
      keyWord: string
      status: string
      page: number
      pageSize: number
      from: null
      before: null
    }>
  >
}

const OrderTab: React.FC<OrderTabProps> = ({ tabs, defaultValue, setQueryParams }) => {
  const [value, setValue] = React.useState(defaultValue)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  const changeTabHandler = (tabId: number) => {
    if (tabId === 1) {
      if (setQueryParams) {
        setQueryParams({
          keyWord: '',
          status: 'PENDING',
          page: 1,
          pageSize: 7,
          from: null,
          before: null
        })
      }
    } else if (tabId === 2) {
      if (setQueryParams) {
        setQueryParams({
          keyWord: '',
          status: 'READY_FOR_DELIVERY',
          page: 1,
          pageSize: 7,
          from: null,
          before: null
        })
      }
    } else if (tabId === 3) {
      if (setQueryParams) {
        setQueryParams({
          keyWord: '',
          status: 'COURIER_ON_THE_WAY',
          page: 1,
          pageSize: 7,
          from: null,
          before: null
        })
      }
    } else if (tabId === 4) {
      if (setQueryParams) {
        setQueryParams({
          keyWord: '',
          status: 'DELIVERED',
          page: 1,
          pageSize: 7,
          from: null,
          before: null
        })
      }
    } else if (tabId === 5) {
      if (setQueryParams) {
        setQueryParams({
          keyWord: '',
          status: 'RECEIVED',
          page: 1,
          pageSize: 7,
          from: null,
          before: null
        })
      }
    } else if (tabId === 6) {
      if (setQueryParams) {
        setQueryParams({
          keyWord: '',
          status: 'CANCEL',
          page: 1,
          pageSize: 7,
          from: null,
          before: null
        })
      }
    }
  }
  return (
    <TabContainer>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          TabIndicatorProps={{ style: { backgroundColor: '#fff' } }}
          sx={{
            div: {
              '& button.Mui-selected': {
                backgroundColor: '#CB11AB',
                color: '#fff'
              },
              '& .MuiTabs-indicator': {
                display: 'none'
              }
            }
          }}
        >
          {tabs?.map((el) => (
            <StyledTab
              key={el.id}
              label={el.label}
              value={el.value}
              onClick={() => changeTabHandler(el.id)}
            />
          ))}

          <DownloadIconContainer>
            <Link href="#download" color="inherit" underline="none"></Link>
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
  )
}

export default OrderTab
