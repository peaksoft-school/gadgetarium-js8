import * as React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import { StepIconProps, StepLabel, Typography, styled } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const StyledStepButton = styled(StepLabel)`
  svg {
    &.Mui-active {
      fill: #cb11ab;
    }
    &.Mui-completed {
      fill: #cb11ab;
    }
  }
  span {
    &.Mui-active {
      color: #cb11ab;
    }
  }
`

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%'
    },
    step: {
      cursor: 'pointer'
    },
    largeCircle: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      backgroundColor: '#91969E',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    activeIcon: {
      backgroundColor: '#CB11AB',
      color: '#FFF'
    },
    completedIcon: {
      color: '#FFF'
    },
    completedCircle: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      backgroundColor: '#888888'
    }
  })
)

const CircleIcon: React.FC<StepIconProps> = ({ active, completed, icon }) => {
  const classes = useStyles()

  return (
    <div
      className={`${classes.largeCircle} ${active ? classes.activeIcon : ''} ${
        completed ? classes.completedIcon : ''
      }`}
    >
      {completed ? (
        <Typography color="inherit">{icon}</Typography>
      ) : (
        <Typography color="inherit">{icon}</Typography>
      )}
    </div>
  )
}
interface StepperTabsProps {
  steps: string[]
  activeStep: number
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
}

const HorizontalNonLinearStepper: React.FC<StepperTabsProps> = ({
  steps,
  activeStep,
  setActiveStep
}) => {
  const handleStepClick = (stepIndex: number) => {
    setActiveStep(stepIndex)
  }

  return (
    <Box sx={{ width: '850px', marginBottom: '1rem' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} onClick={() => handleStepClick(index)} completed={index < activeStep}>
            <StyledStepButton StepIconComponent={CircleIcon}>{step}</StyledStepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default HorizontalNonLinearStepper
