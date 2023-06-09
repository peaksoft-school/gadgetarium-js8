import { useState } from 'react'
import { Box, styled } from '@mui/material'
import Input from '../../UI/inputs/Input'
import { DiscountType, postDiscountRequest } from '../../../api/discount/discountService'
import Button from '../../UI/buttons/Button'
import Modal from '../../UI/modals/Modal'
import { isAxiosError } from 'axios'
import { useSnackbar } from '../../../hooks/snackbar/useSnackbar'

const StyledModal = styled(Box)(() => ({
  width: '34rem',
  height: '357',
  padding: '1.5rem 1rem',
  background: '#ffff',
  borderRadius: '.25rem',
  display: 'grid'
}))

const TextStyled = styled('p')(() => ({
  paddingTop: '1rem',
  paddingBottom: '2.25rem',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '24px',
  lineHeight: '32px',
  textAlign: 'center',
  color: '#292929'
}))

const InputData = styled('div')(() => ({
  display: 'flex',
  paddingBottom: '2rem',
  paddingTop: '1.25rem'
}))

const InputStyled = styled(Input)(() => ({
  width: '30rem',
  height: '2.1875rem'
}))

const DataInput = styled(Input)(() => ({
  width: '232px',
  height: '2.1875rem',
  color: '#91969E'
}))

const CommonButton = styled('div')(() => ({
  display: 'flex',
  gap: '1.25rem'
}))

const ButtonStyled = styled(Button)(() => ({
  width: '14.375rem',
  border: '.0625rem solid #CB11AB',
  color: '#CB11AB',
  background: '#fff',
  '&:hover': {
    color: '#ffff'
  }
}))

const LabelStyled = styled('label')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '17px',
  color: '#384255'
}))

const PStyled = styled('span')`
  color: red;
`

type PropsDiscount = {
  onClose: () => void
  open: boolean
  selectedIds: number[]
}

const CreateDiscount = ({ open, onClose, selectedIds }: PropsDiscount) => {
  const [amountOfDiscount, setAmountOfDiscount] = useState<number>()
  const [discountStartDate, setDiscountStartDate] = useState<string>('')
  const [discountEndDate, setDiscountEndDate] = useState<string>('')

  const { snackbarHanler } = useSnackbar({
    autoClose: 2500,
    position: 'bottom-right'
  })

  const addDiscount = async (req: DiscountType) => {
    try {
      await postDiscountRequest(req)
      onClose()
    } catch (e) {
      if (isAxiosError(e)) {
        return snackbarHanler({
          message: e.response?.data.message,
          linkText: '',
          type: 'error'
        })
      }
      return snackbarHanler({
        message: 'Что-то пошло не так',
        linkText: '',
        type: 'error'
      })
    }
  }

  const addHandler = () => {
    const productData = {
      productsId: selectedIds,
      percentOfDiscount: amountOfDiscount,
      dateOfStart: discountStartDate,
      dateOfFinish: discountEndDate
    }
    addDiscount(productData)
  }

  const setAmountOfDiscountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = +event.target.value
    if (value === 0) {
      setAmountOfDiscount(undefined)
    } else {
      setAmountOfDiscount(value)
    }
  }

  const setDiscountStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountStartDate(event.target.value)
  }

  const setDiscountEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountEndDate(event.target.value)
  }

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <StyledModal>
          <TextStyled>Создать скидку</TextStyled>
          <LabelStyled htmlFor="">
            Размер скидки <PStyled>*</PStyled>
            <InputStyled
              type="number"
              value={amountOfDiscount}
              placeholder="0%"
              onChange={setAmountOfDiscountChange}
            />
          </LabelStyled>
          <InputData>
            <LabelStyled htmlFor="">
              Дата начала скидки <PStyled>*</PStyled>
              <DataInput
                value={discountStartDate}
                placeholder="04.07.22"
                type="date"
                onChange={setDiscountStartDateChange}
              />
            </LabelStyled>
            <LabelStyled>
              Дата окончания скидки <PStyled>*</PStyled>
              <DataInput
                value={discountEndDate}
                placeholder="Выберите дату"
                type="date"
                onChange={setDiscountEndDateChange}
              />
            </LabelStyled>
          </InputData>
          <CommonButton>
            <ButtonStyled onClick={onClose}>Отменить</ButtonStyled>
            <ButtonStyled onClick={addHandler}>Добавить</ButtonStyled>
          </CommonButton>
        </StyledModal>
      </Modal>
    </>
  )
}

export default CreateDiscount
