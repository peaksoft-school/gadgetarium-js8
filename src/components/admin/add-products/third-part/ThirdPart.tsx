import React, { ChangeEvent, useState } from 'react'
import { Button, IconButton, InputAdornment, TextField, styled } from '@mui/material'
import { ReactComponent as ImportIcon } from '../../../../assets/icons/admin-add-products/importIcon.svg'
import TextEditor from './TextEditor'
import { useAppDispatch } from '../../../../hooks/redux/redux'
import { addProductActions } from '../../../../redux/store/addProduct/AddProduct'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'
import { addProducts } from '../../../../redux/store/addProduct/addProduct.thunk'
import { useNavigate } from 'react-router-dom'
import { uploadFileService } from '../../../../api/add-product/addProductService'
import { useSnackbar } from '../../../../hooks/snackbar/useSnackbar'

const StyledLabel = styled('label')`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #384255;
`

const ImportsContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '810px'
}))

const StyledTextField = styled(TextField)(() => ({
  width: '376px',
  height: '35px',
  marginTop: '0.5rem',
  '.css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input': {
    padding: '6px !important'
  }
}))

const StyledLabel2 = styled('p')`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #292929;
`

const StyledButton = styled(Button)(() => ({
  padding: '10px, 24px, 10px, 24px',
  gap: '10px',
  width: '126px',
  height: '43px',
  background: '#FFFFFF',
  borderRadius: '4px',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '19px',
  textTransform: 'none',
  color: '#CB11AB',
  border: '1px solid #CB11AB',
  marginRight: '34px',
  '&:hover': {
    backgroundColor: '#f6e7f3'
  }
}))

const StyledButton2 = styled(Button)(() => ({
  padding: '10px, 24px, 10px, 24px',
  gap: '10px',
  width: '126px',
  height: '43px',
  background: '#CB11AB',
  borderRadius: '4px',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '19px',
  textTransform: 'none',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#991984'
  }
}))

const StyledSpan = styled('span')(() => ({
  color: '#F10000',
  marginLeft: '0.3rem'
}))

const DescriptionContainer = styled('div')(() => ({
  marginTop: '48px'
}))

const ButtonsContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '812px',
  marginTop: '28px'
}))

const ThirdPart = () => {
  const dispatch = useAppDispatch()
  const [pdfFile, setPdfFile] = useState<File | null>(null)
  const [fileName, setFileName] = useState()
  const navigate = useNavigate()
  const { snackbarHanler, ToastContainer } = useSnackbar({
    autoClose: 2500,
    position: 'bottom-right'
  })

  const products = useSelector((state: RootState) => state.addNewProduct.products)

  const videoChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addProductActions.addVideoLinkToProducts({ videoLink: e.target.value }))
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pdfFileChangeHandler = (event: any) => {
    const file = event.target.files[0]
    setFileName(file.name)
    setPdfFile(file)
  }

  const postPdfFileHandler = async () => {
    if (!pdfFile) return undefined
    const formData = new FormData()
    formData.append('file', pdfFile)
    const fileResponse = await uploadFileService(formData)
    const fileUrl = fileResponse.data.link
    setPdfFile(fileUrl)
    return fileUrl
  }

  const descriptionChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addProductActions.addDescriptionToProducts({ description: e.target.value }))
  }

  const addProductHandler = async () => {
    try {
      if (!pdfFile) return null
      const fileResponse = await postPdfFileHandler()
      const [firstProduct] = products
      dispatch(addProducts({ ...firstProduct, PDF: fileResponse }))
      snackbarHanler({
        message: 'Товар успешно добавлен!',
        linkText: '',
        type: 'success'
      })
      navigate('/')
    } catch (e) {
      // console.log(e)
    }
  }

  return (
    <>
      <form>
        {ToastContainer}
        <ImportsContainer>
          <div>
            <StyledLabel>Загрузите видеообзор</StyledLabel>
            <StyledTextField
              value={products.videoLink}
              onChange={videoChangeHandler}
              placeholder="Вставьте ссылку на видеообзор"
              color="secondary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ImportIcon />
                  </InputAdornment>
                )
              }}
              variant="outlined"
            />
          </div>
          <div>
            <StyledLabel>Загрузите документ PDF</StyledLabel>
            <StyledTextField
              value={fileName}
              disabled
              placeholder="Вставьте документ в PDF файле"
              color="secondary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton color="primary" aria-label="upload picture" component="label">
                      <input hidden accept=".pdf" type="file" onChange={pdfFileChangeHandler} />
                      <ImportIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
              variant="outlined"
            />
          </div>
        </ImportsContainer>
        <DescriptionContainer>
          <StyledLabel2>
            Описание <StyledSpan>*</StyledSpan>
          </StyledLabel2>
          <TextEditor onChange={descriptionChangeHandler} value={products.description} />
        </DescriptionContainer>
        <ButtonsContainer>
          <StyledButton onClick={() => navigate('/addProducts')}>Отменить</StyledButton>
          <StyledButton2 onClick={addProductHandler}>Добавить</StyledButton2>
        </ButtonsContainer>
      </form>
    </>
  )
}

export default ThirdPart
