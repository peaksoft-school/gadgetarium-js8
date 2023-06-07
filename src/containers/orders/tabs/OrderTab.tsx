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
}

const OrderTab: React.FC<OrderTabProps> = ({ tabs, defaultValue }) => {
  const [value, setValue] = React.useState(defaultValue)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
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
              }
            }
          }}
          aria-label="lab API tabs example"
        >
          {tabs?.map((el) => (
            <StyledTab key={el.id} label={el.label} value={el.value} />
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
