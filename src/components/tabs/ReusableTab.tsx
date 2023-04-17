import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { styled } from '@mui/material'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}
const StyledBoxContainer = styled(Box)(() => ({
  width: '100%'
}))
const StyledBox = styled(Box)(() => ({
  borderBottom: ' 1px solid #CDCDCD'
}))
const StyledTab = styled(Tab)(() => ({
  '&.Mui-selected': {
    color: '#CB11AB',
    borderBottom: '2px solid #CB11AB',
    paddingBottom: '6px'
  },
  paddingBottom: '8px',
  paddingRight: '16px'
}))

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <StyledBoxContainer>
      <StyledBox>
        <Tabs
          TabIndicatorProps={{ style: { borderBottom: '2px solid #CB11AB' } }}
          value={value}
          onChange={handleChange}
        >
          <StyledTab label="Описание" {...a11yProps(0)} />
          <StyledTab label="Характеристики" {...a11yProps(1)} />
          <StyledTab label="Отзывы" {...a11yProps(2)} />
          <StyledTab label="Доставка и оплата" {...a11yProps(3)} />
        </Tabs>
      </StyledBox>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </StyledBoxContainer>
  )
}
