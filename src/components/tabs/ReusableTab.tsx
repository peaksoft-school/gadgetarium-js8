import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { styled } from '@mui/material'
import { ReactComponent as ShortLine } from '../../assets/icons/tabs-icons/tabicon2.svg'
import { ReactComponent as LongLine } from '../../assets/icons/tabs-icons/tabsicon3svg.svg'
import IconButtons from '../UI/IconButtons'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const StyledBoxContainer = styled(Box)(() => ({
  width: '100%'
}))
const StyledBox = styled(Box)(() => ({
  borderBottom: ' 1px solid #CDCDCD',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}))
const StyledContainerTab = styled(Tabs)(() => ({}))
const StyledTab = styled(Tab)(() => ({
  '&.Mui-selected': {
    color: '#CB11AB',
    borderBottom: '2px solid #CB11AB',
    paddingBottom: '6px'
  },
  paddingBottom: '8px',
  paddingRight: '16px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '22px',
  color: '#292929'
}))
const StyledBorder = styled('div')(() => ({
  width: '24px',
  height: '26px',
  border: '2px solid #384255',
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0  2px',
  paddingTop: '2px'
}))
const StyledSpanOne = styled('span')(() => ({
  display: 'flex',
  flexDirection: 'column'
}))
const StyledSpanTwo = styled('span')(() => ({
  display: 'flex',
  flexDirection: 'column'
}))
const StyledShortLine = styled(ShortLine)(() => ({
  marginBottom: '1.5px'
}))
const StyledLongLine = styled(LongLine)(() => ({
  marginBottom: '1.5px'
}))
const ContainerDocumentStyled = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center'
}))
const DocumentTitle = styled('span')(() => ({
  marginLeft: '8px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: ' 150%',
  color: '#384255'
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
const Icon = () => {
  return (
    <StyledBorder>
      <StyledSpanOne>
        <StyledShortLine />
        <StyledShortLine />
        <StyledShortLine />
      </StyledSpanOne>
      <StyledSpanTwo>
        <StyledLongLine />
        <StyledLongLine />
        <StyledLongLine />
      </StyledSpanTwo>
    </StyledBorder>
  )
}
export default function BasicTabs() {
  const [value, setValue] = React.useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <StyledBoxContainer>
      <StyledBox>
        <StyledContainerTab
          TabIndicatorProps={{ style: { borderBottom: '2px solid #CB11AB' } }}
          value={value}
          onChange={handleChange}
        >
          <StyledTab label="Описание" {...a11yProps(0)} />
          <StyledTab label="Характеристики" {...a11yProps(1)} />
          <StyledTab label="Отзывы" {...a11yProps(2)} />
          <StyledTab label="Доставка и оплата" {...a11yProps(3)} />
        </StyledContainerTab>
        <ContainerDocumentStyled>
          <IconButtons icon={<Icon />} />
          <DocumentTitle>Скачать документ.pdf</DocumentTitle>
        </ContainerDocumentStyled>
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
