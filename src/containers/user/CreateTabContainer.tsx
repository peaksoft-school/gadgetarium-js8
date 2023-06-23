import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { styled } from '@mui/material'
import Profile from '../../layout/user/personalAccount/Profile'
import HistoryOrders from '../../layout/user/personalAccount/HistoryOrders'
import Favorites from '../../layout/user/personalAccount/Favorites'
import { useLocation } from 'react-router-dom'
type Props = {
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
}

const StyledTabs = styled(Tabs)(() => ({
  backgroundColor: 'none',
  '& .MuiTabs-indicator': {
    display: 'none'
  }
}))

const StyledTab = styled(Tab)(() => ({
  background: '#E0E2E7',
  color: '#384255',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '19px',
  margin: '0 0.4rem',
  padding: '.5rem 1.25rem .5625rem',
  borderRadius: '4px',
  '&.Mui-selected': {
    background: '#384255',
    color: '#FFFFFF'
  }
}))
interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

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
        <Box sx={{ p: 3 }}>
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

export default function CreateTabContainer({ value, setValue }: Props) {
  const { state } = useLocation()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  React.useEffect(() => {
    setValue(state.tab)
  }, [state.tab])

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ paddingTop: '2.5rem' }}>
          <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <StyledTab label="История заказов" {...a11yProps(0)} />
            <StyledTab label="Избранное" {...a11yProps(1)} />
            <StyledTab label="Профиль" {...a11yProps(2)} />
          </StyledTabs>
        </Box>
        <TabPanel value={value} index={0}>
          <HistoryOrders />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Favorites />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Profile />
        </TabPanel>
      </Box>
    </>
  )
}
