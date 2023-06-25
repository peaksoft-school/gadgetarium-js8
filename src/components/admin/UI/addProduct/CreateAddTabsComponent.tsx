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
  const [completed] = useState<{
    [k: number]: boolean
  }>({})

  const steps = [
    {
      label: 'Добавление товара',
      key: 'add'
    },
    {
      label: 'Установка цены и количества товара',
      key: 'price'
    },
    {
      label: 'Описание и обзор',
      key: 'description'
    }
  ]

  const totalSteps = () => {
    return steps.length
  }

  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const isLastStep = () => {
    return activeTab === totalSteps() - 1
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
  }

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeTab + 1
    setActiveTab(newActiveStep)
  }

  return (
    <Box sx={{ with: '100%', marginTop: '30px' }}>
      <HorizontalNonLinearStepper
        steps={steps}
        activeStep={activeTab}
        setActiveStep={setActiveTab}
      />
      <TabPanel value={activeTab} index={0}>
        <AddTabComponent handleNext={handleNext} />
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <SecondPart handleNext={handleNext} />
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
        <ThirdPart />
      </TabPanel>
    </Box>
  )
}
