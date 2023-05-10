import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
  Typography
} from '@mui/material'
import { ReactComponent as Vector } from '../../../assets/icons/fag-icons/Vector 2.svg'

type AccordionProps = {
  expanded: boolean | string
  onChange?: () => void
  background: string
  number: number
  questions: string
  information?: string
  className?: string
}

const AccordionStyled = styled(Accordion)(() => ({
  boxShadow: '0px 2px 10px rgba(48, 60, 51, 0.05)'
}))

const AccordionSummaryStyled = styled(AccordionSummary)(() => ({
  fontFamily: 'Inter',
  height: '80px',
  borderRadius: '100px',
  '&.summary div': {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  '& .expandIconWrapper.expanded': {
    transform: 'rotate(-90deg)'
  },
  '&.Mui-expanded': {
    '& .icon-background.close': {
      backgroundColor: '#CB11AB',
      color: ' #fff'
    }
  },
  '& .title': {
    fontWeight: '600',
    fontSize: '18px',
    fontFamily: 'Inter'
  },
  '& .icon-background': {
    width: '42px',
    height: '40px',
    borderRadius: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: '700'
  },
  '& .icon-background.close': {
    backgroundColor: '#fae8f7',
    color: ' #CB11AB'
  },

  '& .icon-background.open': {
    backgroundColor: ' #CB11AB',
    color: '#FFFFFF'
  }
}))
const AccordionDetailsStyled = styled(AccordionDetails)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  '& .text': {
    width: '92%'
  }
}))

const FaqAccordion = ({
  expanded,
  onChange,
  background,
  number,
  questions,
  information,
  className,
  ...props
}: AccordionProps) => {
  return (
    <AccordionStyled {...props}>
      <AccordionSummaryStyled
        classes={{
          root: 'summary',
          expanded: 'expanded',
          expandIconWrapper: 'expandIconWrapper'
        }}
        expandIcon={<Vector />}
      >
        <Box className={expanded === background ? 'icon-background open' : 'icon-background close'}>
          {number}
        </Box>
        <Typography className="title" component="span">
          {questions}
        </Typography>
      </AccordionSummaryStyled>
      <AccordionDetailsStyled>
        <Typography className="text" component="p">
          {information}
        </Typography>
      </AccordionDetailsStyled>
    </AccordionStyled>
  )
}

export default FaqAccordion
