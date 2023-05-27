import React, { useEffect, useState } from 'react'
import { ProductType, StyledInputContainer } from '../../AddTabComponent'
import { StyledFormLable } from '../../../mailingList/MailingList'
import ReusableColorPicker from '../../../../../ReusableColorPicker'
import { styled, SelectChangeEvent } from '@mui/material'
import { ReusableSelect as Select } from '../../../../../ReusableSelect'
import ImagePicker from '../../../mailingList/ImagePicker'
import { ColorResult } from 'react-color'
import {
  additionalProp1,
  additionalProp2,
  additionalProp3
} from '../../../../../../utils/constants/optionsCategorie'

type Props = {
  selectedValueFirst: string | number
  setSubProducts: (data: any) => void
  saveProduct: ProductType
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

const SmartphoneCategorie = ({ selectedValueFirst, setSubProducts, saveProduct }: Props) => {
  const [memorySize, setMemorySize] = useState('')
  const [ram, setRam] = useState('')
  const [simCart, setSIMcart] = useState('')

  const [image, setImage] = useState<string>('')
  const [color, setColor] = useState<string>('')
  const [openColorPicker, setOpenColorPicker] = useState<boolean>(false)

  useEffect(() => {
    setSubProducts({ image, colour: color, memorySize, ram, simCart })
  }, [memorySize, image, color, ram, simCart])

  useEffect(() => {
    setImage('')
    setColor('')
    setMemorySize('')
    setRam('')
    setSIMcart('')
  }, [saveProduct])

  const changeOptions = () => {
    if (selectedValueFirst === 1) {
      return { item1: additionalProp2, item2: additionalProp3, item3: additionalProp1 }
    } else {
      return { item1: [], item2: [], item3: [] }
    }
  }

  const colorPickerHandler = (colorResult: ColorResult | any) => {
    setColor(colorResult.hex)
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
  const SimCartHandler = (event: SelectChangeEvent<typeof simCart>) => {
    setSIMcart(event.target.value)
  }

  const handlerImage = (imageUrl: string) => {
    setImage(imageUrl)
  }

  return (
    <>
      <StyledInputContainer>
        <StyledFormLable htmlFor="Основной цвет">Основной цвет</StyledFormLable>
        <ReusableColorPicker
          color={color}
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
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledFormLable htmlFor="Кол-во SIM-карт">Кол-во SIM-карт</StyledFormLable>

        <Select
          id="Кол-во SIM-карт"
          name="Выберите категорию *"
          placeholder="Выберите SIM-карты"
          options={changeOptions().item3}
          value={simCart}
          onChange={SimCartHandler}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledFormLable htmlFor="Добавьте фото">Добавьте фото</StyledFormLable>
        <ImagePicker onSelectImage={handlerImage} />
      </StyledInputContainer>
    </>
  )
}

export default SmartphoneCategorie
