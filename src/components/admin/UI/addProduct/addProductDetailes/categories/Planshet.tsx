import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, StyledInput, StyledInputContainer } from '../../AddTabComponent'
import { StyledFormLable } from '../../../mailingList/MailingList'
import { styled, SelectChangeEvent } from '@mui/material'
import IconButtons from '../../../../../UI/IconButtons'
import { ReusableSelect as Select, StyledSelect } from '../../../../../ReusableSelect'
import ImagePicker from '../../../mailingList/ImagePicker'
import { ColorResult } from 'react-color'
import {
  MemoryСapacityForPlanshet,
  RAMForPlanshet,
  ScreenDiagonalForPlanshet,
  ScreenResolutioForPlanshet,
  ScreenSizeForPlanshet,
  batteryСapacityForPlanshet
} from '../../../../../../utils/constants/optionsCategorie'
import ReusableColorPicker from '../../../../../ReusableColorPicker'

type Props = {
  selectedValueFirst: string | number
  setSubProducts: (data: any) => void
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

const CreatePlanshetCategorie = ({ selectedValueFirst, setSubProducts }: Props) => {
  const [additionalProp1, setAdditionalProp1] = useState('')
  const [additionalProp2, setAdditionalProp2] = useState('')
  const [additionalProp3, setAdditionalProp3] = useState('')

  const [image, setImage] = useState<string>('')
  const [colorPlanshet, setPlanshetColor] = useState<string>('')
  const [openColorPicker, setOpenColorPicker] = useState<boolean>(false)
  useEffect(() => {
    setSubProducts({ additionalProp3, additionalProp2, image, colorPlanshet, additionalProp1 })
  }, [additionalProp3, image, colorPlanshet, additionalProp1, additionalProp2])

  const changeOptions = () => {
    if (selectedValueFirst === 2) {
      return {
        item1: MemoryСapacityForPlanshet,
        item2: RAMForPlanshet,
        item3: ScreenResolutioForPlanshet,
        item4: ScreenSizeForPlanshet,
        item5: ScreenDiagonalForPlanshet,
        item6: batteryСapacityForPlanshet
      }
    } else {
      return { item1: [], item2: [], item3: [], item4: [], item5: [], item6: [] }
    }
  }

  const handlerSelect = (event: SelectChangeEvent<typeof additionalProp3>) => {
    setAdditionalProp3(event.target.value)
  }
  const additionalProp2Handler = (event: SelectChangeEvent<typeof additionalProp2>) => {
    setAdditionalProp2(event.target.value)
  }
  const memoryHandler = (event: SelectChangeEvent<typeof additionalProp1>) => {
    setAdditionalProp1(event.target.value)
  }

  const handlerImage = (imageUrl: string) => {
    setImage(imageUrl)
  }
  const colorPickerHandler = (colorResult: ColorResult | any) => {
    setPlanshetColor(colorResult.hex)
  }
  const openColorHandler = () => {
    setOpenColorPicker((prevState) => !prevState)
  }
  return (
    <>
      <StyledInputContainer>
        <StyledFormLable htmlFor="Основной цвет">Основной цвет</StyledFormLable>

        <ReusableColorPicker
          color={colorPlanshet}
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
          value={additionalProp1}
          onChange={memoryHandler}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledFormLable htmlFor="Оперативная память">Оперативная память</StyledFormLable>

        <Select
          id="Оперативная память"
          name="Оперативная память"
          placeholder="Выберите оперативную память"
          options={changeOptions().item2}
          value={additionalProp2}
          onChange={additionalProp2Handler}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledFormLable htmlFor="Разрешение экрана-карт">Разрешение экрана</StyledFormLable>

        <Select
          id="Разрешение экрана"
          name="Разрешение экрана"
          placeholder="Разрешение экрана"
          options={changeOptions().item3}
          value={additionalProp3}
          onChange={handlerSelect}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledFormLable htmlFor="Добавьте фото">Добавьте фото</StyledFormLable>
        <ImagePicker onSelectImage={handlerImage} />
      </StyledInputContainer>
    </>
  )
}

export default CreatePlanshetCategorie
