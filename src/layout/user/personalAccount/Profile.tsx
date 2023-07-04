import React, { useEffect, useState } from 'react'
import ImagePickerProfil from '../../../components/user/profile/AvatarImg'
import { Button as MuiButton, styled } from '@mui/material'
import * as Yup from 'yup'
import Button from '../../../components/UI/buttons/Button'
import { StyledFormLable } from '../../../components/admin/UI/mailingList/MailingList'
import {
  getProfileDataRequest,
  postImage,
  updatePassword,
  updateProfile
} from '../../../api/personalAccount/profile/ProfileServer'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/store'
import { postProfileImg, postS3fileImage } from '../../../redux/store/mailingList/mailingList.thunk'
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('firstName is required'),
  phoneNumber: Yup.string().required('phoneNumber is required'),
  address: Yup.string().required('address is required'),
  // currentPassword: Yup.string().required('currentPassword is required'),
  // newPassword: Yup.string().required('newPassword is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  lastName: Yup.string().required('lastName is required')
})
export type ProfileDataType = {
  image: string
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  address: string
}

export type ImgUrl = {
  imageUrl: string
}
export type PasswordType = {
  currentPassword: string
  newPassword: string
}
export type Userdata = {
  firstName?: string
  lastName?: string
  phoneNumber?: string
  email?: string
  address?: string
}
const StyledMainContainer = styled('form')(() => ({
  display: 'flex'
}))
const StyledImgContainer = styled('div')(() => ({
  width: '9.375rem',
  height: '9.375rem',
  textAlign: 'center',
  marginRight: '10rem'
}))

export const StyledInputContainer = styled('div')`
  margin-bottom: 0.9375rem;
`
export const StyledButtonContainer = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 7px;
  margin-top: 20px;
`
const StyledContainer = styled('div')(() => ({
  display: 'flex',
  gap: '24px',
  width: '100%'
}))

const StyledH1 = styled('h1')(() => ({
  color: 'var(--black-292929, #292929)',
  fontSize: '24px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: ' 110%',
  marginBottom: '30px'
}))
const Styledp = styled('p')(() => ({
  color: 'var(--txt-91969-e, #91969E)',
  textAlign: 'center',
  fontSize: ' 12px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '130%'
}))
const StyledButton = styled(Button)(() => ({
  background: '#fff',
  border: '.0625rem solid #CB11AB',
  borderRadius: '.25rem',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '.875rem',
  lineHeight: '1.0625rem',
  textTransform: 'uppercase',
  '&:active': {
    border: 'none',
    color: '#fff'
  },
  '&:hover': {
    color: '#fff'
  },
  color: '#CB11AB',
  width: '21.125rem'
}))
const StyledMuiButton = styled(MuiButton)(() => ({
  color: 'var(--pink, #CB11AB)',
  fontSize: ' 16px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '150%',
  textDecoration: 'none',
  display: 'flex',
  justifyContent: 'flex-end',
  paddingLeft: '30.625rem',
  marginBottom: '1rem'
}))
const StyledInput = styled('input')(() => ({
  width: '100%',
  padding: ' 14px 18px',
  borderRadius: '6px',
  border: '1px solid var(--gray-input, #CDCDCD)',
  background: '#FFF',
  marginTop: '.375rem',
  '&:hover': {
    border: '1px solid  #CB11AB'
  },
  '&:focus': {
    border: '1px solid  #CB11AB'
  },
  require: {
    border: '.1875rem solid red'
  }
}))
const Profile = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [profile, setProfile] = useState<ProfileDataType>()
  const { dataProfile } = useSelector((state: RootState) => state.dataProfile)
  const [image, setImage] = useState<string | File>('')

  const [changePassword, setChangePassword] = useState(false)

  const handleImageSelect = (imageUrl: File) => {
    setImage(imageUrl)
  }
  const changePasswordHandler = () => {
    setChangePassword((prevState) => !prevState)
  }

  const newImgHandler = async () => {
    const formData = new FormData()
    formData.append('file', image)
    dispatch(postS3fileImage(formData))
      .unwrap()
      .then((item) => {
        const newImgLink = {
          imageUrl: item.link
        }
        dispatch(postProfileImg(newImgLink))
      })
  }

  const initialValues: Userdata = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: ''
  }

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      const response = await updateProfile(values)
      return response.data
    } catch (error) {}
    newImgHandler()
  }
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit
  })

  const getProfileData = async () => {
    try {
      const { data } = await getProfileDataRequest()
      setProfile(data)
    } catch (error) {}
  }
  useEffect(() => {
    getProfileData()
  }, [])
  return (
    <StyledMainContainer onSubmit={formik.handleSubmit}>
      <StyledImgContainer>
        <ImagePickerProfil onSelectImage={handleImageSelect} />
        {changePassword ? (
          <p style={{ color: 'var(--blue, #2C68F5)' }}>Сменить фото</p>
        ) : (
          <Styledp>Нажмите для добавления фотографии</Styledp>
        )}
      </StyledImgContainer>
      <div style={{ width: '664px' }}>
        <StyledH1>Личные данные</StyledH1>
        <StyledContainer>
          <div style={{ width: '332px' }}>
            <StyledInputContainer>
              <StyledFormLable required htmlFor="firstName">
                Имя
              </StyledFormLable>
              <StyledInput
                type="text"
                id="firstName"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <div style={{ color: 'red' }}>{formik.errors.firstName}</div>
              )}
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledFormLable required htmlFor="email">
                E-mail
              </StyledFormLable>
              <StyledInput
                type="email"
                id="email"
                name="email"
                placeholder="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <div style={{ color: 'red' }}>{formik.errors.email}</div>
              )}
            </StyledInputContainer>
          </div>
          <div style={{ width: '332px' }}>
            <StyledInputContainer>
              <StyledFormLable required htmlFor="lastName">
                Фамилия
              </StyledFormLable>
              <StyledInput
                type="text"
                id="lastName"
                name="lastName"
                value={formik.values.lastName}
                placeholder="Фамилия "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div style={{ color: 'red' }}>{formik.errors.lastName}</div>
              )}
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledFormLable required htmlFor="phoneNumber">
                Телефон
              </StyledFormLable>
              <StyledInput
                type=""
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Телефон "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <div style={{ color: 'red', position: 'absolute' }}>
                  {formik.errors.phoneNumber}
                </div>
              )}
            </StyledInputContainer>
          </div>
        </StyledContainer>
        <div>
          <StyledInputContainer>
            <StyledFormLable required htmlFor="address">
              Адрес доставки
            </StyledFormLable>
            <StyledInput
              type="text"
              id="address"
              name="address"
              value={formik.values.address}
              placeholder="Адрес "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.address && formik.errors.address && (
              <div style={{ color: 'red' }}>{formik.errors.address}</div>
            )}
          </StyledInputContainer>
          {changePassword ? null : (
            <StyledMuiButton onClick={() => changePasswordHandler()}>
              Сменить пароль
            </StyledMuiButton>
          )}

          {/* {changePassword ? (
            <div style={{ width: '332px' }}>
              <StyledInputContainer>
                <StyledFormLable required htmlFor="currentPassword">
                  Старый пароль
                </StyledFormLable>
                <StyledInput
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  value={formik.values.currentPassword}
                  placeholder="Старыйпароль "
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.currentPassword && formik.errors.currentPassword && (
                  <div style={{ color: 'red' }}>{formik.errors.currentPassword}</div>
                )}
              </StyledInputContainer>
              <StyledInputContainer>
                <StyledFormLable required htmlFor="newPassword">
                  Новый пароль
                </StyledFormLable>
                <StyledInput
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formik.values.newPassword}
                  placeholder="Старыйпароль "
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.newPassword && formik.errors.newPassword && (
                  <div style={{ color: 'red' }}>{formik.errors.newPassword}</div>
                )}
              </StyledInputContainer>
              <StyledInputContainer>
                <StyledFormLable required htmlFor="newPassword">
                  Подтвердите новый пароль
                </StyledFormLable>
                <StyledInput
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formik.values.newPassword}
                  placeholder="Старыйпароль "
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.newPassword && formik.errors.newPassword && (
                  <div style={{ color: 'red', position: 'absolute' }}>
                    {formik.errors.newPassword}
                  </div>
                )}
              </StyledInputContainer>
            </div>
          ) : null} */}
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
            <StyledButton onClick={() => {}}>Назад</StyledButton>
            <StyledButton type="submit">Редактировать</StyledButton>
          </div>
        </div>
      </div>
    </StyledMainContainer>
  )
}

export default Profile
