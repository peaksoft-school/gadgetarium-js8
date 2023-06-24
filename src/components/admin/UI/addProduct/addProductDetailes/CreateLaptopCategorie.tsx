import React, { useEffect, useState } from 'react'
import { StyledFormLable } from '../../mailingList/MailingList'
import { styled, SelectChangeEvent } from '@mui/material'
import { ReusableSelect as Select } from '../../../ReusableSelect'
import {
  ScreenResolution,
  Purpose,
  VideoMemory,
  RAM,
  ScreenSize,
  laptopProcessor
} from '../../../../../utils/constants/optionsCategorie'
import { StyledInputContainer } from '../AddTabComponent'
import ReusableColorPicker from '../../../ReusableColorPicker'
import ImagePickerAddProduct from '../ImagePicker'
import { useBanner } from '../../../../../hooks/banner/useBanner'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../../../redux/store'
import { addProductActions } from '../../../../../redux/store/addProduct/AddProduct'
import { getAllProductsColors } from '../../../../../redux/store/color/productColor.thunk'

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

const CreateLaptopCategorie = ({ selectedValueFirst }: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const { products } = useSelector((state: RootState) => state.addNewProduct)
  const { colors } = useSelector((state: RootState) => state.productsColor)

  const [laptopProcessor1, setLeptopProcessor] = useState('')
  const [srceen, setScreen] = useState('')
  const [purpose, setPurpose] = useState('')
  const [sizeScrean, setSizeScrean] = useState('')
  const [video, setVideo] = useState('')
  const [select, setSelect] = useState('')

  const { imagesClassname, bannerImages, handleImageUpload, setBannerImages, deleteImage } =
    useBanner()
  const [colour, setLaptopColor] = useState<string>('')
  const [openColorPicker, setOpenColorPicker] = useState<boolean>(false)

  const colorPickerHandler = (colorResult: string) => {
    setLaptopColor(colorResult)
  }
  const openColorHandler = () => {
    setOpenColorPicker((prevState) => !prevState)
  }

  useEffect(() => {
    dispatch(getAllProductsColors())
  }, [])

  useEffect(() => {
    dispatch(
      addProductActions.addSubProduct({
        images: bannerImages,
        characteristics: {
          Назначение: purpose,
          'Процессор ноутбука': laptopProcessor1,
          'Разрешение экрана': srceen,
          'Размер экрана': sizeScrean,
          'Объем видеопамяти': video,
          память: select
        },
        colour
      })
    )
  }, [bannerImages, purpose, colour, laptopProcessor1, srceen, sizeScrean, video, select])

  useEffect(() => {
    setLeptopProcessor('')
    setScreen('')
    setPurpose('')
    setSizeScrean('')
    setVideo('')
    setSelect('')
    setBannerImages([])
    setLaptopColor('')
  }, [products])

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
  const screenHandler = (event: SelectChangeEvent<typeof srceen>) => {
    setScreen(event.target.value)
  }
  const selectHandler = (event: SelectChangeEvent<typeof select>) => {
    setSelect(event.target.value)
  }
  const laptopProssesorHandler = (event: SelectChangeEvent<typeof laptopProcessor1>) => {
    setLeptopProcessor(event.target.value)
  }

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
          value={srceen}
          onChange={screenHandler}
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

export default CreateLaptopCategorie
