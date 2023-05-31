import { useState } from 'react'
import { Box, styled, Tabs, Tab } from '@mui/material'
import { InfographicsTypes } from '../../../api/infographics/infographicsService'
import TabPanel from './InfograficsTabPanel'

const StyledBox = styled(Box)(() => ({
  width: '100%',
  marginTop: '38px'
}))

const StyledTab = styled(Tab)(() => ({
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '0.75rem',
  lineHeight: '0.9375rem',
  letterSpacing: '0.0625rem',
  textTransform: 'uppercase',
  color: '#292929',
  padding: '0.0625rem 1.25rem'
}))

const Info1 = styled('div')(() => ({
  background: 'rgba(21, 86, 222, 0.09)',
  borderRadius: '8px',
  padding: '0.875rem',
  width: '19.375rem',
  marginLeft: '-1.6825rem'
}))

const Info1Container = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1.1875rem'
}))

const Info1Title = styled('p')(() => ({
  color: '#384255',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '0.875rem',
  lineHeight: '1.0625rem',
  letterSpacing: '0.0625rem'
}))

const Price1 = styled('p')(() => ({
  color: '#2FC509',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '1.5rem',
  lineHeight: '1.8125rem',
  letterSpacing: '0.0625rem',
  span: {
    textDecorationLine: 'underline'
  }
}))

const Price2 = styled('p')(() => ({
  color: '#2FC509',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '1rem',
  lineHeight: '1.1875rem',
  letterSpacing: '0.0625rem',
  // marginLeft: '3.4rem',
  span: {
    textDecorationLine: 'underline'
  }
}))

const Description = styled('p')(() => ({
  color: '#384255',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '0.75rem',
  lineHeight: '0.9375rem',
  letterSpacing: '0.0625rem',
  marginTop: '0.25rem'
}))

const PricesContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between'
}))

const info = [
  {
    id: 0,
    value: 1
  },
  {
    id: 1,
    value: 2
  },
  {
    id: 2,
    value: 3
  }
]

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`
  }
}

type InfographicsPropTypes = {
  infographicsData: InfographicsTypes
}

const InfographicsTab = ({ infographicsData }: InfographicsPropTypes) => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <StyledBox>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '300px' }}>
        <Tabs
          textColor="inherit"
          TabIndicatorProps={{
            style: {
              backgroundColor: '#292929'
            }
          }}
          value={value}
          onChange={handleChange}
        >
          <StyledTab label="За день" {...a11yProps(0)} />
          <StyledTab label="За месяц" {...a11yProps(1)} />
          <StyledTab label="За год" {...a11yProps(2)} />
        </Tabs>
      </Box>
      {info.map((el) => (
        <TabPanel key={el.id} value={value} index={el.id}>
          <Info1>
            <Info1Title>Доставлено товаров на сумму</Info1Title>
            <Info1Container>
              <PricesContainer>
                <div>
                  <Price1>
                    {infographicsData.currentPeriod} <span>c</span>
                  </Price1>
                  <Description>Текущий период</Description>
                </div>
                <div>
                  <Price2>
                    {infographicsData.previousPeriod} <span>c</span>
                  </Price2>
                  <Description>Предыдущий период</Description>
                </div>
              </PricesContainer>
            </Info1Container>
          </Info1>
        </TabPanel>
      ))}
    </StyledBox>
  )
}

export default InfographicsTab
