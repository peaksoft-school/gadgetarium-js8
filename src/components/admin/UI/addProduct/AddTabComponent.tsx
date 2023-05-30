import React, { useEffect, useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import { StyledFormLable } from '../mailingList/MailingList'
import { ReusableSelect as SelectComponent, StyledSelect } from '../../../ReusableSelect'
import { styled, SelectChangeEvent } from '@mui/material'
import Input from '../../../UI/inputs/Input'
import AddbrandModal from './AddbrandModal'
import { ReactComponent as PlusIcon } from '../../../../assets/icons/Plus.svg'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../../redux/store'
import { getProductCategorieService } from '../../../../api/addProductService'
import { getProductBrandAndSubCategories } from '../../../../redux/store/addProduct/getCategories.thunk'
import SmartWatchCategorie from './addProductDetailes/categories/SmartWatchCategorie'
import AddDetailsProduct from './addProductDetailes/categories/SmartphoneCategorie'
import CreatePlanshetCategorie from './addProductDetailes/categories/Planshet'
import CreateLaptopCategorie from './addProductDetailes/CreateLaptopCategorie'
import Button from '../../../UI/buttons/Button'
import { NavLink } from 'react-router-dom'
import IconButtons from '../../../UI/buttons/IconButtons'
import { addProductActions } from '../../../../redux/store/addProduct/AddProduct'

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
  margin: '.3125rem',

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
const StyledForm = styled('form')`
  display: flex;
  gap: 1.25rem;
`
export const StyledInput = styled(Input)(() => ({
  border: ' .0625rem solid #CDCDCD',
  borderRadius: '.375rem',
  width: '20.75rem',

  color: '#272525',

  height: '3.1875rem',
  '&.MuiInputBase-root': {
    margin: '.3125rem'
  },
  '&.input.focused': {
    border: '.125rem solid #50a3e7',
    background: '#F4F4F4',
    color: '#272525'
  },
  '&.input.error': {
    border: '.0625rem solid red'
  },
  '&:hover': {
    border: '.125rem solid #0a0a0a',
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
  width: '1.5625rem',
  height: '1.5625rem'
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
  marginLeft: '20rem'
}))

export type ProductType = {
  name: string | number
  brandId: string | number
  subCategoryId: string | number
  dateOfIssue: string
  subProducts: any
}[]

const AddTabComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { options, products, subProduct } = useSelector((state: RootState) => state.addNewProduct)
  const [selectedValueFirst, setSelectedValueFirst] = useState<string | number>('')
  const [selectedValueSecond, setSelectedValueSecond] = useState<string | number>('')
  const [selectedValueThird, setSelectedValueThird] = useState<string | number>(0)
  const [garanteeProduct, setgaranteeProduct] = useState<string>('')
  const [dateOfIssue, setdateOfIssueProduct] = useState<string>('')
  const [nameProduct, setnameProduct] = useState<string>('')

  const [openModal, setOpenModal] = useState<boolean>(false)
  const [categories, setCategories] = useState([])
  console.log(products)

  const saveHandler = () => {
    const newProduct = {
      name: selectedValueFirst,
      brandId: selectedValueSecond,
      subCategoryId: selectedValueThird,
      dateOfIssue,
      subProducts: [subProduct]
    }
    dispatch(addProductActions.addProduct(newProduct))
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
    setgaranteeProduct(event.target.value)
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
    } catch (error) {}
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
      <StyledForm>
        <StyledInputContainer>
          <StyledInputContainer>
            <StyledFormLable required htmlFor="Выберите категорию *">
              Выберите категорию
            </StyledFormLable>

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
                  <StyledImage src={option.logo} alt="" />
                  {option.name}
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
            <StyledContainerAddProduct onClick={saveHandler}>
              <IconButtons icon={<PlusIcon />} />
              <StyledTextAddProduct>Добавить продукт</StyledTextAddProduct>
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
          <StyledLinkContainer>
            <NavLink to={'/'}>
              <StyledMuiButton>Далее</StyledMuiButton>
            </NavLink>
          </StyledLinkContainer>
        </>
      )}
    </>
  )
}
export default AddTabComponent
