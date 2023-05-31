import React, { useState } from 'react'
import { Button, IconButton, InputAdornment, TextField, styled } from '@mui/material'
import { ReactComponent as ImportIcon } from '../../../../assets/icons/admin-add-products/importIcon.svg'
import TextEditor from './TextEditor'

const StyledLabel = styled('p')`
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

type PdfType = {
  name: ''
}

const ThirdPart = () => {
  const [description, setDescription] = useState('')
  const [pdfFile, setPdfFile] = useState<PdfType | null>()
  const [video, setVideo] = useState('')

  const videoChangeHandler = (event: any) => {
    setVideo(event.target.value)
  }

  const pdfFileChangeHandler = (event: any) => {
    const file = event.target.files[0]
    setPdfFile(file || null)
  }

  const descriptionChangeHandler = (event: any) => {
    setDescription(event.target.value)
  }
  return (
    <>
      <main>
        <ImportsContainer>
          <div>
            <StyledLabel>Загрузите видеообзор</StyledLabel>
            <StyledTextField
              value={video}
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
              value={pdfFile?.name}
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
          <TextEditor onChange={descriptionChangeHandler} value={description} />
        </DescriptionContainer>
        <ButtonsContainer>
          <StyledButton>Отменить</StyledButton>
          <StyledButton2>Добавить</StyledButton2>
        </ButtonsContainer>
      </main>
    </>
  )
}

export default ThirdPart
