import React, { FormEvent, useEffect, useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import { StyledFormLable } from '../mailingList/MailingList'
import { ReusableSelect as SelectComponent, StyledSelect } from '../../ReusableSelect'
import { styled, SelectChangeEvent } from '@mui/material'
import Input from '../../../UI/inputs/Input'
import AddbrandModal from './AddbrandModal'
import { ReactComponent as PlusIcon } from '../../../../assets/icons/Plus.svg'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../../redux/store'
import { getProductCategorieService } from '../../../../api/addProduct/addProductService'
import { getProductBrandAndSubCategories } from '../../../../redux/store/addProduct/getCategories.thunk'
import SmartWatchCategorie from './addProductDetailes/categories/SmartWatchCategorie'
import AddDetailsProduct from './addProductDetailes/categories/SmartphoneCategorie'
import CreatePlanshetCategorie from './addProductDetailes/categories/Planshet'
import CreateLaptopCategorie from './addProductDetailes/CreateLaptopCategorie'
import Button from '../../../UI/buttons/Button'
import IconButtons from '../../../UI/buttons/IconButtons'
import { addProductActions } from '../../../../redux/store/addProduct/AddProduct'
import { isAxiosError } from 'axios'
import { useSnackbar } from '../../../../hooks/snackbar/useSnackbar'

interface Brand {
  name: string
  id: number
  logo: string
}

export const Container = styled('div')(() => ({
  border: ' .0625rem solid #CDCDCD',
  borderRadius: '.375rem',
  width: '24.75rem',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '.5rem 1.125rem',
  background: '#F7F7F7',
  margin: '.2125rem',

  '&:hover': {
    border: '.125rem solid #0a0a0a',
    background: '#F4F4F4',
    color: '#292929',
    path: {
      fill: '#969696'
    }
  },
  '&:focus': {
    border: '.125rem solid #0a0a0a',
    background: '#F4F4F4',
    color: '#292929'
  },
  '&:active': {
    path: {
      fill: '#CB11AB'
    }
  }
}))

const StyledItemMenu = styled(MenuItem)(() => ({
  display: 'flex',
  gap: '.5625rem'
}))
const StyledForm = styled('div')`
  display: flex;
  gap: 1.25rem;
`
export const StyledInput = styled(Input)(() => ({
  border: ' .0625rem solid #CDCDCD',
  borderRadius: '.375rem',
  width: '20.75rem',
  color: '#272525',

  height: '2.3rem',
  '&.MuiInputBase-root': {
    margin: '.3125rem'
  },
  '&.input.focused': {
    border: '.125rem solid #CB11AB',
    background: '#F4F4F4',
    color: '#272525'
  },
  '&.input.error': {
    border: '.0625rem solid red'
  },
  '&:hover': {
    border: '0.5px solid #CB11AB',
    background: '#F4F4F4',
    color: '#272525'
  }
}))

export const StyledInputContainer = styled('div')(() => ({
  marginBottom: '1rem'
}))

const StyledContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '2.4375rem',
  marginBottom: '2.8125rem'
}))

const StyledContainerAddProduct = styled('div')(() => ({
  display: 'flex',
  width: '12.5rem',
  height: '1.1875rem'
}))

const StyledTextAddProduct = styled('span')(() => ({
  width: '9.1875rem',
  height: '1.1875rem',
  left: '2.625rem',
  top: ' .5313rem',

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '1rem',
  lineHeight: '1.1875rem',
  display: 'flex',
  alignItems: 'center',

  color: '#CB11AB'
}))

const StyledImage = styled('img')(() => ({
  height: '1.1625rem',
  paddingRight: '8px'
}))

const StyledMuiButton = styled(Button)(() => ({
  color: '#ffff'
}))

const StyledQuantityProduct = styled('div')(() => ({
  width: '131.2px',
  height: '41.6px',
  borderRadius: '.3125rem',
  border: '.125rem solid #91969E',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '300',
  fontSize: '1rem',
  lineHeight: '1.1875rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#91969E',
  gap: '.375rem'
}))

const StyledButton = styled('li')(() => ({
  backgroundColor: '#ffff',
  border: '0px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  lineHeight: '24px',
  marginLeft: '15px',
  color: '#CB11AB',
  cursor: 'pointer',
  position: 'relative',
  zIndex: 11
}))
const StyledLinkContainer = styled('div')(() => ({
  marginLeft: '17.8rem'
}))

export type ProductType = {
  name: string | number
  brandId: string | number
  subCategoryId: string | number
  dateOfIssue: string
  subProducts: any
  price?: number
  quantity?: number
  id?: string
  video?: string
  pdfFile?: string
  guarantee?: number
  characteristics?: {
    [key: string]: string
  }
}

type Props = {
  handleNext: () => void
}

const AddTabComponent = ({ handleNext }: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const { options, products, subProduct } = useSelector((state: RootState) => state.addNewProduct)

  const [selectedValueFirst, setSelectedValueFirst] = useState<string | number>('')
  const [selectedValueSecond, setSelectedValueSecond] = useState<string | number>('')
  const [selectedValueThird, setSelectedValueThird] = useState<string | number>(0)
  const [garanteeProduct, setgaranteeProduct] = useState<number>()
  const [dateOfIssue, setdateOfIssueProduct] = useState<string>('')
  const [nameProduct, setnameProduct] = useState<string>('')

  const [openModal, setOpenModal] = useState<boolean>(false)
  const [categories, setCategories] = useState([])

  const [quantity] = useState<number>(1)
  const { snackbarHanler, ToastContainer } = useSnackbar({
    autoClose: 2500,
    position: 'bottom-right'
  })

  const saveHandler = (e: FormEvent) => {
    e.preventDefault()

    const subProducts = products[0]?.subProducts || []
    const newProduct = {
      name: nameProduct,
      brandId: selectedValueSecond,
      guarantee: garanteeProduct,
      subCategoryId: selectedValueThird,
      dateOfIssue,
      subProducts: [
        ...subProducts.map((v: any) => ({ ...v, id: Date.now().toString() })),
        { ...subProduct, subProduct, id: Date.now().toString() }
      ]
    }
    if (
      newProduct.brandId !== undefined &&
      newProduct.name.length !== 0 &&
      newProduct.guarantee !== null &&
      newProduct.subCategoryId !== null &&
      newProduct.dateOfIssue !== null &&
      newProduct.subProducts !== null
    ) {
      dispatch(addProductActions.addProduct(newProduct))
      handleNext()
    } else {
      return snackbarHanler({
        message: 'Все поля должны быть заполнены!',
        linkText: '',
        type: 'error'
      })
    }
  }

  const saveHandler2 = () => {
    // e.preventDefault()

    const subProducts = products[0]?.subProducts || []
    const newProduct = {
      name: nameProduct,
      brandId: selectedValueSecond,
      guarantee: garanteeProduct,
      subCategoryId: selectedValueThird,
      dateOfIssue,
      subProducts: [
        ...subProducts.map((v: any) => ({ ...v, id: Date.now().toString() })),
        { ...subProduct, subProduct, id: Date.now().toString() }
      ]
    }
    if (
      newProduct.brandId !== undefined &&
      newProduct.name.length !== 0 &&
      newProduct.guarantee !== null &&
      newProduct.subCategoryId !== null &&
      newProduct.dateOfIssue !== null &&
      newProduct.subProducts !== null
    ) {
      dispatch(addProductActions.addProduct(newProduct))
    } else {
      return snackbarHanler({
        message: 'Все поля должны быть заполнены!',
        linkText: '',
        type: 'error'
      })
    }
  }

  const quantityChangeHandler = () => {
    dispatch(addProductActions.addQuantityToAllProducts(quantity))
  }

  const handleModal = () => {
    setOpenModal((prevState) => !prevState)
  }
  const firstHandleSelectChange = (event: SelectChangeEvent<typeof selectedValueFirst>) => {
    setSelectedValueFirst(event.target.value)
  }
  const nameProductHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setnameProduct(event.target.value)
  }
  const garanteeProductHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setgaranteeProduct(+event.target.value)
  }
  const dataProductHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setdateOfIssueProduct(event.target.value)
  }
  const secondHandleSelectChange = (event: any) => {
    setSelectedValueSecond(event.target.value)
  }
  const thirdHandleSelectChange = (event: SelectChangeEvent<typeof selectedValueThird>) => {
    setSelectedValueThird(event.target.value)
  }

  const getCategories = async () => {
    try {
      const { data } = await getProductCategorieService()
      setCategories(data)
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

  const getSubCategories = async () => {
    dispatch(getProductBrandAndSubCategories(selectedValueFirst))
  }

  useEffect(() => {
    getCategories()
  }, [])

  useEffect(() => {
    getSubCategories()
  }, [selectedValueFirst])

  return (
    <>
      {ToastContainer}
      <form onSubmit={saveHandler}>
        <StyledForm>
          <StyledInputContainer>
            <StyledInputContainer>
              <StyledFormLable htmlFor="Выберите категорию *">Выберите категорию</StyledFormLable>

              <SelectComponent
                id="Выберите категорию *"
                name="Выберите категорию *"
                placeholder="Выбрать"
                options={categories}
                value={selectedValueFirst}
                onChange={firstHandleSelectChange}
              />
            </StyledInputContainer>

            <StyledInputContainer>
              <StyledFormLable required htmlFor="Бренд *">
                Бренд
              </StyledFormLable>{' '}
              <StyledSelect
                displayEmpty
                value={selectedValueSecond}
                onChange={secondHandleSelectChange}
              >
                {options.brands.map((option: Brand) => (
                  <StyledItemMenu key={option.id} value={option.id}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <StyledImage src={option.logo} alt="" />
                      <p>{option.name}</p>
                    </div>
                  </StyledItemMenu>
                ))}
                <StyledItemMenu>
                  <StyledButton onClick={handleModal}> + Создать новый бренд</StyledButton>
                </StyledItemMenu>
              </StyledSelect>
              <AddbrandModal
                modal={openModal}
                modalHandler={handleModal}
                getSubCategories={getSubCategories}
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledFormLable required htmlFor="Название товара *">
                Название товара
              </StyledFormLable>
              <StyledInput
                required
                onChange={nameProductHandle}
                value={nameProduct}
                id="Название товара *"
                placeholder="Введите название товара"
              />
            </StyledInputContainer>
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledInputContainer>
              <StyledFormLable required htmlFor="Выберите подкатегорию">
                Выберите подкатегорию
              </StyledFormLable>

              <SelectComponent
                id="Выберите подкатегорию"
                name="Выберите категорию"
                placeholder="Выбрать"
                options={options.subCategories}
                value={selectedValueThird}
                onChange={thirdHandleSelectChange}
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledFormLable required htmlFor="Гарантия (месяцев) * ">
                Гарантия (месяцев)
              </StyledFormLable>
              <StyledInput
                required
                value={garanteeProduct}
                onChange={garanteeProductHandle}
                id="Гарантия (месяцев) * "
                placeholder="Введите гарантию товара"
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledFormLable required htmlFor="Дата выпуска *">
                Дата выпуска
              </StyledFormLable>
              <StyledInput
                onChange={dataProductHandle}
                value={dateOfIssue}
                type="date"
                id="Дата выпуска *"
                placeholder="Введите дату выпуска"
              />
            </StyledInputContainer>
          </StyledInputContainer>
        </StyledForm>
        {selectedValueFirst === '' ? null : (
          <>
            <StyledContainer>
              <StyledQuantityProduct>
                Продукт <span>{products.length}</span>
              </StyledQuantityProduct>
              <StyledContainerAddProduct>
                <IconButtons icon={<PlusIcon />} onClick={saveHandler2} />
                <StyledTextAddProduct onClick={saveHandler2} style={{ cursor: 'pointer' }}>
                  Добавить продукт
                </StyledTextAddProduct>
              </StyledContainerAddProduct>
            </StyledContainer>
            {selectedValueFirst === 1 ? (
              <AddDetailsProduct selectedValueFirst={selectedValueFirst} />
            ) : null}
            {selectedValueFirst === 4 ? <SmartWatchCategorie /> : null}
            {selectedValueFirst === 2 ? (
              <CreatePlanshetCategorie selectedValueFirst={selectedValueFirst} />
            ) : null}
            {selectedValueFirst === 3 ? (
              <CreateLaptopCategorie selectedValueFirst={selectedValueFirst} />
            ) : null}
            <div style={{ marginLeft: '17.8rem' }}>
              <StyledMuiButton type="submit">Далее</StyledMuiButton>
            </div>
          </>
        )}
      </form>
    </>
  )
}
export default AddTabComponent
