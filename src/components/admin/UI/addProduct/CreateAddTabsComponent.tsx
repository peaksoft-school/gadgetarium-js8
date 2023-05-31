import { useState } from 'react'
import { Box } from '@mui/material'
import AddTabComponent from './AddTabComponent'
import SecondPart from '../../add-products/second-part/SecondPart'
import ThirdPart from '../../add-products/third-part/ThirdPart'
import HorizontalNonLinearStepper from '../Stepper'

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

export function MyComponent() {
  const [activeTab, setActiveTab] = useState(0)

  const steps = ['Добавление товара', 'Установка цены и количества товара', 'Описание и обзор']

  return (
    <Box sx={{ with: '100%', marginTop: '30px' }}>
      <HorizontalNonLinearStepper
        steps={steps}
        activeStep={activeTab}
        setActiveStep={setActiveTab}
      />
      <TabPanel value={activeTab} index={0}>
        <AddTabComponent />
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <SecondPart />
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
        <ThirdPart />
      </TabPanel>
    </Box>
  )
}
