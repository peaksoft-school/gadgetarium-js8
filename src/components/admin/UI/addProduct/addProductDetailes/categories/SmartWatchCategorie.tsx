import { ColorResult } from 'react-color'
import { ChangeEvent, useEffect, useState } from 'react'
import { SelectChangeEvent } from '@mui/material'
import { StyledInputContainer } from '../../AddTabComponent'
import { StyledFormLable } from '../../../mailingList/MailingList'
import { ReusableSelect as Select } from '../../../../../ReusableSelect'
import { additionalProp2 } from '../../../../../../utils/constants/optionsCategorie'
import ReusableColorPicker from '../../../../../ReusableColorPicker'
import { RadioButton } from '../../../../../UI/RadioButton'
import ImagePickerAddProduct from '../../ImagePicker'
import { useBanner } from '../../../../../../hooks/banner/useBanner'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../../../../redux/store'
import { addProductActions } from '../../../../../../redux/store/addProduct/AddProduct'

const SmartWatchCategorie = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { products } = useSelector((state: RootState) => state.addNewProduct)

  const [memory1, setMemory1] = useState('')
  const [material, setMaterial] = useState('')
  const [size, setSize] = useState('')
  const [size2, setSize2] = useState('')
  const [display, setDisplay] = useState('')
  const [gender, setGender] = useState<string>('')
  const [waterproof, setWaterproof] = useState<string>('')
  const [wireless, setWireless] = useState('')
  const [shape, setShape] = useState('')
  const { imagesClassname, bannerImages, handleImageUpload, setBannerImages, deleteImage } =
    useBanner()

  const [colorSmartWatch, setSmartWatchColor] = useState<string>('')
  const [openColorPicker, setOpenColorPicker] = useState<boolean>(false)

  useEffect(() => {
    dispatch(
      addProductActions.addSubProduct({
        shape,
        colorSmartWatch,
        memory1,
        material,
        size,
        gender,
        waterproof,
        bannerImages,
        size2,
        display,
        wireless
      })
    )
  }, [
    colorSmartWatch,
    memory1,
    material,
    size,
    gender,
    waterproof,
    bannerImages,
    size2,
    display,
    wireless,
    shape
  ])
  useEffect(() => {
    setMemory1('')
    setMaterial('')
    setSize('')
    setSize2('')
    setDisplay('')
    setGender('')
    setWaterproof('')
    setWireless('')
    setShape('')
    setBannerImages([])
    setSmartWatchColor('')
  }, [products])

  const memory1Handler = (event: SelectChangeEvent<typeof memory1>) => {
    setMemory1(event.target.value)
  }
  const materialHandler = (event: SelectChangeEvent<typeof material>) => {
    setMaterial(event.target.value)
  }
  const sizeHandler = (event: SelectChangeEvent<typeof size>) => {
    setSize(event.target.value)
  }
  const sizeHandler2 = (event: SelectChangeEvent<typeof size2>) => {
    setSize2(event.target.value)
  }
  const displayHandler = (event: SelectChangeEvent<typeof display>) => {
    setDisplay(event.target.value)
  }
  const genderHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value)
  }
  const waterproofHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setWaterproof(event.target.value)
  }
  const wirelessHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setWireless(event.target.value)
  }

  const shapeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setShape(event.target.value)
  }

  const colorPickerHandler = (colorResult: ColorResult | any) => {
    setSmartWatchColor(colorResult.hex)
  }
  const openColorHandler = () => {
    setOpenColorPicker((prevState) => !prevState)
  }

  return (
    <form>
      <StyledInputContainer>
        <StyledFormLable htmlFor="Основной цвет">Основной цвет</StyledFormLable>
        <ReusableColorPicker
          color={colorSmartWatch}
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
          options={additionalProp2}
          value={memory1}
          onChange={memory1Handler}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledFormLable htmlFor="Выберите материал браслета/ремешка">
          Материал браслета/ремешка
        </StyledFormLable>
        <Select
          id="Выберите материал браслета/ремешка"
          name="Выберите материал браслета/ремешка"
          placeholder="Выберите материал браслета/ремешка"
          options={additionalProp2}
          value={material}
          onChange={materialHandler}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledFormLable htmlFor="Материал корпуса">Материал корпуса</StyledFormLable>
        <Select
          id="Материал корпуса"
          name="Материал корпуса"
          placeholder="Выберите материал корпуса"
          options={additionalProp2}
          value={size}
          onChange={sizeHandler}
        />
      </StyledInputContainer>{' '}
      <StyledInputContainer>
        <StyledFormLable htmlFor="Размер смарт часов (mm)">Размер смарт часов (mm)</StyledFormLable>
        <Select
          id="Размер смарт часов (mm)"
          name="Размер смарт часов (mm)"
          placeholder="Введите размер продукта"
          options={additionalProp2}
          value={size2}
          onChange={sizeHandler2}
        />
      </StyledInputContainer>{' '}
      <StyledInputContainer>
        <StyledFormLable htmlFor="Диагональ дисплея (дюйм)">
          Диагональ дисплея (дюйм)
        </StyledFormLable>
        <Select
          id="Диагональ дисплея (дюйм)"
          name="Диагональ дисплея (дюйм)"
          placeholder="Выберите диагональ дисплея"
          options={additionalProp2}
          value={display}
          onChange={displayHandler}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledFormLable htmlFor="Пол">Пол</StyledFormLable>
        <div>
          <RadioButton
            checked={gender === 'Унисекс'}
            onChange={genderHandler}
            value="Унисекс"
            name="Унисекс"
            label="Унисекс"
          />
          <RadioButton
            checked={gender === 'Женский'}
            onChange={genderHandler}
            value="Женский"
            name="Женский"
            label="Женский"
          />
          <RadioButton
            checked={gender === 'Мужской'}
            onChange={genderHandler}
            value="Мужской"
            name="Мужской"
            label="Мужской"
          />
        </div>
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledFormLable htmlFor="Пол">Водонепроницаемые</StyledFormLable>
        <div>
          <RadioButton
            checked={waterproof === 'Да'}
            onChange={waterproofHandler}
            value="Да"
            name="Да"
            label="Да"
          />
          <RadioButton
            checked={waterproof === 'Нет'}
            onChange={waterproofHandler}
            value="Нет"
            name="Нет"
            label="Нет"
          />
        </div>
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledFormLable htmlFor="Пол">Беспроводные интерфейсы</StyledFormLable>
        <div>
          <RadioButton
            checked={wireless === 'Bluetooth'}
            onChange={wirelessHandler}
            value="Bluetooth"
            name="Bluetooth"
            label="Bluetooth"
          />
          <RadioButton
            checked={wireless === 'Wi-Fi'}
            onChange={wirelessHandler}
            value="Wi-Fi"
            name="Wi-Fi"
            label="Wi-Fi"
          />
          <RadioButton
            checked={wireless === 'GPS'}
            onChange={wirelessHandler}
            value="GPS"
            name="GPS"
            label="GPS"
          />
          <RadioButton
            checked={wireless === 'NFC'}
            onChange={wirelessHandler}
            value="NFC"
            name="NFC"
            label="NFC"
          />
        </div>
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledFormLable htmlFor="Пол">Форма корпуса</StyledFormLable>
        <div>
          <RadioButton
            checked={shape === 'Квадратная'}
            onChange={shapeHandler}
            value="Квадратная"
            name="Квадратная"
            label="Квадратная"
          />
          <RadioButton
            checked={shape === 'Круглая'}
            onChange={shapeHandler}
            value="Круглая"
            name="Круглая"
            label="Круглая"
          />
          <RadioButton
            checked={shape === 'Овальная'}
            onChange={shapeHandler}
            value="Овальная"
            name="Овальная"
            label="Овальная"
          />
          <RadioButton
            checked={shape === 'Прямоугольная'}
            onChange={shapeHandler}
            value="Прямоугольная"
            name="Прямоугольная"
            label="Прямоугольная"
          />
        </div>
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
    </form>
  )
}

export default SmartWatchCategorie
