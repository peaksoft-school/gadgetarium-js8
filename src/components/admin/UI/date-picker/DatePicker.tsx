import { forwardRef } from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker'
import { ru } from 'date-fns/locale'
import { styled } from '@mui/material'
import { PickerChangeHandlerContext } from '@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types'
import { DateValidationError } from '@mui/x-date-pickers'

// ...

const Container = styled('div')(() => ({
  width: '8.6875rem',
  height: '2.1875rem',
  marginTop: '1.5rem'
}))
const StyledDatePicker = styled(MuiDatePicker)(() => ({
  borderRadius: '6px',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '0.75rem',
  color: '#292929',
  outline: 'none',
  input: {
    width: '5.625rem',
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
    paddingLeft: '1rem'
  },
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: '#909CB5'
  }
}))
interface Props {
  value: Date | null
  placeholder: string
  onChange:
    | ((value: unknown, context: PickerChangeHandlerContext<DateValidationError>) => void)
    | undefined
}
const ProductsDatePicker = forwardRef(
  ({ value, onChange, placeholder }: Props, ref?: React.Ref<HTMLDivElement> | undefined) => {
    return (
      <LocalizationProvider adapterLocale={ru} dateAdapter={AdapterDateFns} ref={ref}>
        <Container>
          <StyledDatePicker
            format="dd.MM.yy"
            views={['day']}
            value={value}
            sx={{
              '& button.Mui-selected': {
                backgroundColor: '#000'
              }
            }}
            onChange={onChange}
            // popperProps={{ strategy: 'fixed' }}
            // onChange={onChange}

            slotProps={{ textField: { variant: 'outlined', placeholder } }}
            disableFuture={true}
          />
        </Container>
      </LocalizationProvider>
    )
  }
)
export default ProductsDatePicker
