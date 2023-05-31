import { useState } from 'react'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import { Circle as CircleIcon } from '@mui/icons-material'
import { styled } from '@mui/material'
import AddTabComponent from './AddTabComponent'

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
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  )
}

const StyledText = styled(Typography)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '22px',

  display: 'flex',
  alignItems: 'center',
  letterSpacing: '0.2px',

  color: '#CB11AB'
}))

export function MyComponent() {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = (event: React.SyntheticEvent, newTab: number) => {
    setActiveTab(newTab)
  }

  return (
    <Box sx={{ with: '100%' }}>
      <Tabs sx={{ with: '100%' }} onChange={handleTabChange}>
        <Tab
          sx={{ with: '100%' }}
          icon={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CircleIcon
                sx={{
                  color: activeTab === 0 ? '#cb11ab' : 'action.disabled',
                  fontSize: 50,
                  marginRight: 1
                }}
              />
              <StyledText
                variant="body1"
                sx={{ color: activeTab === 0 ? '#cb11ab' : 'action.disabled' }}
              >
                Добавление товара
              </StyledText>
            </Box>
          }
        />

        <Tab
          sx={{ with: '100%' }}
          icon={
            <Box sx={{ display: 'flex', alignItems: 'center', width: '80rem' }}>
              <CircleIcon
                sx={{
                  color: activeTab === 1 ? '#cb11ab' : 'action.disabled',
                  fontSize: 50,
                  marginRight: 1
                }}
              />
              <StyledText
                variant="body1"
                sx={{ color: activeTab === 1 ? '#cb11ab' : 'action.disabled' }}
              >
                Установка цены и количества товара
              </StyledText>
            </Box>
          }
        />
        <Tab
          icon={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CircleIcon
                sx={{
                  color: activeTab === 2 ? '#cb11ab' : 'action.disabled',
                  fontSize: 50,
                  marginRight: 1
                }}
              />
              <StyledText
                variant="body2"
                sx={{ color: activeTab === 2 ? '#cb11ab' : 'action.disabled' }}
              >
                Описание и обзор{' '}
              </StyledText>
            </Box>
          }
        />
      </Tabs>
      <TabPanel value={activeTab} index={0}>
        <AddTabComponent />
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        Content for Tab 2
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
        Content for Tab 3
      </TabPanel>
    </Box>
  )
}
