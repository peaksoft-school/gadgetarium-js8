import React, { useEffect, useState } from 'react'
import { StyledFormLable } from '../../mailingList/MailingList'
import { styled, SelectChangeEvent } from '@mui/material'
import { ReusableSelect as Select } from '../../../../../components/ReusableSelect'
import ImagePicker from '../../../../../components/admin/UI/mailingList/ImagePicker'
import { ColorResult } from 'react-color'
import {
  ScreenResolution,
  Purpose,
  VideoMemory,
  RAM,
  ScreenSize,
  laptopProcessor
} from '../../../../../utils/constants/optionsCategorie'
import { ProductType, StyledInputContainer } from '../AddTabComponent'
import ReusableColorPicker from '../../../../ReusableColorPicker'

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

const CreateLaptopCategorie = ({ selectedValueFirst, setSubProducts, saveProduct }: Props) => {
  const [laptopProcessor1, setLeptopProcessor] = useState('')
  const [srcean, setScrean] = useState('')
  const [purpose, setPurpose] = useState('')
  const [sizeScrean, setSizeScrean] = useState('')
  const [video, setVideo] = useState('')
  const [select, setSelect] = useState('')

  const [image, setImage] = useState<string>('')
  const [colorLaptop, setLaptopColor] = useState<string>('')
  const [openColorPicker, setOpenColorPicker] = useState<boolean>(false)

  const colorPickerHandler = (colorResult: ColorResult | any) => {
    setLaptopColor(colorResult.hex)
  }
  const openColorHandler = () => {
    setOpenColorPicker((prevState) => !prevState)
  }
  useEffect(() => {
    setSubProducts({
      image,
      purpose,
      colorLaptop,
      laptopProcessor1,
      srcean,
      sizeScrean,
      video,
      select
    })
  }, [image, purpose, colorLaptop, laptopProcessor1, srcean, sizeScrean, video, select])

  useEffect(() => {
    setLeptopProcessor('')
    setScrean('')
    setPurpose('')
    setSizeScrean('')
    setVideo('')
    setSelect('')
    setImage('')
    setLaptopColor('')
  }, [saveProduct])

  const changeOptions = () => {
    if (selectedValueFirst === 3) {
      return {
        item1: laptopProcessor,
        item2: ScreenResolution,
        item3: Purpose,
        item4: ScreenSize,
        item5: RAM,
        item6: VideoMemory
      }
    } else {
      return { item1: [], item2: [], item3: [], item4: [], item5: [], item6: [] }
    }
  }
  const videoHandler = (event: SelectChangeEvent<typeof video>) => {
    setVideo(event.target.value)
  }
  const purposeHandler = (event: SelectChangeEvent<typeof purpose>) => {
    setPurpose(event.target.value)
  }
  const sizeScreanHandler = (event: SelectChangeEvent<typeof sizeScrean>) => {
    setSizeScrean(event.target.value)
  }
  const screanHandler = (event: SelectChangeEvent<typeof srcean>) => {
    setScrean(event.target.value)
  }
  const selectHandler = (event: SelectChangeEvent<typeof select>) => {
    setSelect(event.target.value)
  }
  const laptopProssesorHandler = (event: SelectChangeEvent<typeof laptopProcessor1>) => {
    setLeptopProcessor(event.target.value)
  }

  const handlerImage = (imageUrl: string) => {
    setImage(imageUrl)
  }

  return (
    <>
      <StyledInputContainer>
        <StyledFormLable htmlFor="Основной цвет">Основной цвет</StyledFormLable>

        <ReusableColorPicker
          color={colorLaptop}
          colorPickerHandler={colorPickerHandler}
          openColorHandler={openColorHandler}
          openColorPicker={openColorPicker}
        />
      </StyledInputContainer>

      <StyledInputContainer>
        <StyledFormLable htmlFor="Процессор ноутбука">Процессор ноутбука</StyledFormLable>

        <Select
          id="Процессор ноутбука"
          name="Процессор ноутбука"
          placeholder="Процессор ноутбука"
          options={changeOptions().item1}
          value={laptopProcessor1}
          onChange={laptopProssesorHandler}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledFormLable htmlFor="Разрешение экрана">Разрешение экрана</StyledFormLable>

        <Select
          id="Разрешение экрана"
          name="Разрешение экрана"
          placeholder="Разрешение экрана"
          options={changeOptions().item2}
          value={srcean}
          onChange={screanHandler}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledFormLable htmlFor="Назначение">Назначение</StyledFormLable>

        <Select
          id="Назначение"
          name="Назначение"
          placeholder="Назначение"
          options={changeOptions().item3}
          value={purpose}
          onChange={purposeHandler}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledFormLable htmlFor="Размер экрана (дюйм)">Размер экрана (дюйм)</StyledFormLable>

        <Select
          id="Размер экрана (дюйм)"
          name="Размер экрана (дюйм)"
          placeholder="Размер экрана (дюйм)"
          options={changeOptions().item4}
          value={sizeScrean}
          onChange={sizeScreanHandler}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledFormLable htmlFor="Объем видеопамяти (GB) ">Объем видеопамяти (GB)</StyledFormLable>

        <Select
          id="Объем видеопамяти (GB) "
          name="Объем видеопамяти (GB) "
          placeholder="Объем видеопамяти (GB) "
          options={changeOptions().item5}
          value={video}
          onChange={videoHandler}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledInputContainer>
          <StyledFormLable htmlFor="Объем оперативной памяти (GB) ">
            Объем оперативной памяти (GB)
          </StyledFormLable>

          <Select
            id="Объем оперативной памяти (GB) "
            name="Объем оперативной памяти (GB) "
            placeholder="Объем оперативной памяти (GB) "
            options={changeOptions().item6}
            value={select}
            onChange={selectHandler}
          />
        </StyledInputContainer>
        <StyledFormLable htmlFor="Добавьте фото">Добавьте фото</StyledFormLable>
        <ImagePicker onSelectImage={handlerImage} />
      </StyledInputContainer>
    </>
  )
}

export default CreateLaptopCategorie
