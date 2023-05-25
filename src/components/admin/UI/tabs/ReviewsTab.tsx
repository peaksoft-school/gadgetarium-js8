import React from 'react'
import { styled, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import FeedbackTable from '../../reviews/ReviewsTable'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'

const StyledTab = styled(Tab)(() => ({
  backgroundColor: '#E0E2E7',
  padding: '.5rem 1.25rem .5625rem 1.25rem',
  borderRadius: '.25rem',
  color: '#384255',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '.875rem',
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

interface ProductsTabProps {
  defaultValue: string
  handlerChangePage: (value: string) => void
  page: string
}

const MyCustomLabel = ({ text, count }: { text: string; count: number }) => {
  return (
    <div>
      {text}
      <span style={{ color: '#1adc20', marginLeft: '5px' }}>
        {count === 0 ? null : `+${count}`}
      </span>
    </div>
  )
}

const ReviewsTab: React.FC<ProductsTabProps> = ({ defaultValue, handlerChangePage, page }) => {
  const [value, setValue] = React.useState(defaultValue)
  const { count } = useSelector((state: RootState) => state.reviews)
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  const tabs = [
    {
      id: 1,
      label: 'Все отзывы',
      value: 'Все отзывы',
      Component: <FeedbackTable page={page} />
    },
    {
      id: 2,
      label: 'Неотвеченные',
      value: 'Неотвеченные',
      Component: <FeedbackTable page={page} />
    },
    {
      id: 3,
      label: 'Отвеченные',
      value: 'Отвеченные',
      Component: <FeedbackTable page={page} />
    }
  ]
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
          <StyledTab
            label={'Все отзывы'}
            value={'Все отзывы'}
            onClick={() => handlerChangePage('AllReviews')}
          />
          <StyledTab
            label={<MyCustomLabel text="Неотвеченные" count={count} />}
            value={'Неотвеченные'}
            onClick={() => handlerChangePage('Unanswered')}
          />

          <StyledTab
            label={'Отвеченные'}
            value={'Отвеченные'}
            onClick={() => handlerChangePage('Answered')}
          />
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

export default ReviewsTab
