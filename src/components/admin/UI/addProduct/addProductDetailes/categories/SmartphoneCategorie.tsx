import { ColorResult } from 'react-color'
import React, { useEffect, useState } from 'react'
import { StyledInputContainer } from '../../AddTabComponent'
import { StyledFormLable } from '../../../mailingList/MailingList'
import ReusableColorPicker from '../../../../ReusableColorPicker'
import { styled, SelectChangeEvent } from '@mui/material'
import { ReusableSelect as Select } from '../../../../ReusableSelect'
import {
  additionalProp1,
  additionalProp2,
  additionalProp3
} from '../../../../../../utils/constants/optionsCategorie'
import ImagePickerAddProduct from '../../ImagePicker'
import { useBanner } from '../../../../../../hooks/banner/useBanner'
import { addProductActions } from '../../../../../../redux/store/addProduct/AddProduct'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../../../../redux/store'
import { getAllProductsColors } from '../../../../../../redux/store/color/productColor.thunk'

type Props = {
  selectedValueFirst: string | number
}

export const StyledInputPalette = styled('input')(() => ({
  background: 'none',
  color: '#d10e0e',
  width: '50%',
  height: '18px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  outline: 'none',
  flex: 'none',
  border: 'none',
  order: '0',
  flexRow: '0'
}))

const SmartphoneCategorie = ({ selectedValueFirst }: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const { products } = useSelector((state: RootState) => state.addNewProduct)
  const { colors } = useSelector((state: RootState) => state.productsColor)

  const [memorySize, setMemorySize] = useState('')
  const [ram, setRam] = useState('')
  const [simCard, setSIMcard] = useState('')

  const { imagesClassname, bannerImages, handleImageUpload, setBannerImages, deleteImage } =
    useBanner()

  const [colour, setColor] = useState<string>('')
  const [openColorPicker, setOpenColorPicker] = useState<boolean>(false)

  useEffect(() => {
    dispatch(
      addProductActions.addSubProduct({
        colour: colour,
        images: bannerImages,
        characteristics: {
          память: memorySize,
          'Оперативная память': ram,
          'Кол-во SIM-карт': simCard
        }
      })
    )
  }, [memorySize, bannerImages, colour, ram, simCard])

  useEffect(() => {
    setBannerImages([])
    setColor('')
    setMemorySize('')
    setRam('')
    setSIMcard('')
  }, [products])

  const changeOptions = () => {
    if (selectedValueFirst === 1) {
      return { item1: additionalProp2, item2: additionalProp3, item3: additionalProp1 }
    } else {
      return { item1: [], item2: [], item3: [] }
    }
  }

  const colorPickerHandler = (colorResult: string) => {
    setColor(colorResult)
  }
  const openColorHandler = () => {
    setOpenColorPicker((prevState) => !prevState)
  }
  const memorySizeHandler = (event: SelectChangeEvent<typeof memorySize>) => {
    setMemorySize(event.target.value)
  }
  const RAMHandler = (event: SelectChangeEvent<typeof ram>) => {
    setRam(event.target.value)
  }
  const SimCardHandler = (event: SelectChangeEvent<typeof simCard>) => {
    setSIMcard(event.target.value)
  }

  useEffect(() => {
    dispatch(getAllProductsColors())
  }, [])

  return (
    <>
      <StyledInputContainer>
        <StyledFormLable htmlFor="Основной цвет">Основной цвет</StyledFormLable>
        <ReusableColorPicker
          colors={colors}
          colour={colour}
          colorPickerHandler={colorPickerHandler}
          openColorHandler={openColorHandler}
          openColorPicker={openColorPicker}
        />
      </StyledInputContainer>

      <StyledInputContainer>
        <StyledFormLable htmlFor="Объем памяти">Объем памяти</StyledFormLable>

        <Select
          id="Выберите категорию *"
          name="Выберите категорию *"
          placeholder="Выберите объем памяти"
          options={changeOptions().item1}
          value={memorySize}
          onChange={memorySizeHandler}
          getOptionValue={(option) => option}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledFormLable htmlFor="Оперативная память">Оперативная память</StyledFormLable>
        <Select
          id="Оперативная память"
          name="Оперативная память"
          placeholder="Выберите оперативную память"
          options={changeOptions().item2}
          value={ram}
          onChange={RAMHandler}
          getOptionValue={(option) => option}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledFormLable htmlFor="Кол-во SIM-карт">Кол-во SIM-карт</StyledFormLable>

        <Select
          id="Кол-во SIM-карт"
          name="Выберите категорию *"
          placeholder="Выберите SIM-карты"
          options={changeOptions().item3}
          value={simCard}
          onChange={SimCardHandler}
          getOptionValue={(option) => option}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledFormLable htmlFor="Добавьте фото">Добавьте фото</StyledFormLable>
        <ImagePickerAddProduct
          imagesClassname={imagesClassname}
          bannerImages={bannerImages}
          handleImageUpload={handleImageUpload}
          deleteImage={deleteImage}
        />
      </StyledInputContainer>
    </>
  )
}

export default SmartphoneCategorie
