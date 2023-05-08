import React from 'react'
import Input from '../../../components/UI/inputs/Input'
import Button from '../../../components/UI/buttons/Button'
import { styled, Divider, TextField } from '@mui/material'

const MainContainer = styled('div')(() => ({
  width: '100%',
  height: '100%',
  padding: '3.9375rem 12.25rem 7.5rem 12.25rem',
  backgroundColor: '#E8E8E8'
}))

const StyledNavLink = styled('a')(() => ({
  textDecoration: 'none',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '0.875rem',
  lineHeight: '140%',
  color: '#292929',
  '&:not(:last-of-type)': {
    color: '#91969E'
  },
  '&:not(:last-of-type)::after': {
    margin: '0.25rem',
    content: "'»'",
    color: '#91969E'
  }
}))

const StyledNav = styled('nav')(() => ({
  display: 'flex'
}))

const StyledDivider = styled(Divider)(() => ({
  marginTop: '1.25rem',
  background: '#CDCDCD'
}))

const Title = styled('h3')(() => ({
  fontFamily: 'Ubuntu, sans-serif',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '1.875rem',
  lineHeight: '110%',
  marginTop: '2.0625rem'
}))

const StyledContentContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between'
}))

const StyledUl = styled('ul')(() => ({
  marginTop: '8rem'
}))
const StyledTitle = styled('h2')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '110%',
  color: ' #292929',
  marginBottom: '2rem'
}))

const StyledLi = styled('li')(() => ({
  marginTop: '1rem',
  listStyle: 'none'
}))
const StyledSpan = styled('span')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '110%',

  color: '#292929'
}))

const StyledFormContainer = styled('form')(() => ({
  width: '550px',
  marginTop: '60px'
}))

const FormTitle = styled('h2')(() => ({
  width: '175px',
  height: '26px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '24px',
  lineHeight: '110%',
  color: '#292929',
  marginBottom: '2rem'
}))

const InputContainer = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, auto)',
  gap: '12px'
}))

const StyledStarIcon = styled('span')(() => ({
  color: 'red'
}))

const StyledFormLi = styled('li')(() => ({
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  gap: '8px',
  marginTop: '1rem'
}))
const StyledFormUl = styled('ul')(() => ({
  marginRight: '1rem',
  width: '100%'
}))

const StyledLabel = styled('label')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '150%',

  color: '#384255'
}))

const StyledInput = styled(Input)(() => ({
  width: '100%'
}))

const MultilineInput = styled(TextField)(() => ({
  width: '100%',
  border: '0.1px solid #b59099',
  background: '#F7F7F7',
  borderRadius: '5px',
  '&:focus': {
    border: '0.1px solid #CB11AB',
    background: '#F4F4F4',
    color: '#292929'
  }
}))
const StyledButton = styled(Button)(() => ({
  background: '#CB11AB',
  borderRadius: '4px',
  width: '100%'
}))

const StyledMap = styled('iframe')(() => ({
  marginTop: '7.5rem',
  width: '100%',
  height: '20rem'
}))

const Contackts = () => {
  return (
    <MainContainer>
      <StyledNav>
        <StyledNavLink>Главная </StyledNavLink>
        <StyledNavLink>Контакты </StyledNavLink>
      </StyledNav>

      <Title>Контакты</Title>

      <StyledDivider orientation="horizontal" />
      <StyledContentContainer>
        <StyledUl>
          <StyledTitle>Магазин Gadgetarium</StyledTitle>
          <StyledLi>
            <h2>Адрес:</h2>
            <StyledSpan>г. Бишкек, ул.Гражданская 119</StyledSpan>
          </StyledLi>
          <StyledLi>
            <h2>Телефон:</h2>
            <StyledSpan>г+996(400) 00-00-00</StyledSpan>
          </StyledLi>
          <StyledLi>
            <h2>Почта:</h2>
            <StyledSpan>Gadgetarium.kg</StyledSpan>
          </StyledLi>
          <StyledLi>
            <h2>Режим работы:</h2>
            <StyledSpan>10:00 - 21:00</StyledSpan>
          </StyledLi>
        </StyledUl>

        <StyledFormContainer>
          <FormTitle>Напишите нам</FormTitle>
          <div>
            <InputContainer>
              <StyledFormUl>
                <StyledFormLi>
                  <StyledLabel htmlFor="">
                    Имя <StyledStarIcon>*</StyledStarIcon>
                  </StyledLabel>
                  <StyledInput
                    value={''}
                    onChange={() => {}}
                    error={false}
                    placeholder="Напишите ваше имя"
                  />
                </StyledFormLi>
                <StyledFormLi>
                  <StyledLabel htmlFor="">
                    E-mail <StyledStarIcon>*</StyledStarIcon>
                  </StyledLabel>
                  <StyledInput
                    value={''}
                    onChange={() => {}}
                    error={false}
                    placeholder="Напишите ваш email"
                  />
                </StyledFormLi>
              </StyledFormUl>
              <ul>
                <StyledFormLi>
                  <StyledLabel htmlFor="">
                    Фамилия <StyledStarIcon>*</StyledStarIcon>
                  </StyledLabel>
                  <StyledInput
                    value={''}
                    onChange={() => {}}
                    error={false}
                    placeholder="Напишите вашу фамилию"
                  />
                </StyledFormLi>
                <StyledFormLi>
                  <StyledLabel htmlFor="">
                    Телефон <StyledStarIcon>*</StyledStarIcon>
                  </StyledLabel>
                  <StyledInput
                    value={''}
                    onChange={() => {}}
                    error={false}
                    placeholder="+996(_ _ _) _ _  _ _  _ _"
                  />
                </StyledFormLi>
              </ul>
            </InputContainer>
            <StyledFormLi>
              <StyledLabel htmlFor="">Собщение</StyledLabel>
              <MultilineInput
                multiline
                rows={5}
                onChange={() => {}}
                placeholder="Напишите сообщение"
              />
              <StyledButton disabled={false} onClick={() => {}} variant="contained">
                ОТПРАВИТЬ
              </StyledButton>
            </StyledFormLi>
          </div>
        </StyledFormContainer>
      </StyledContentContainer>

      <StyledMap
        src="https://yandex.ru/maps/10309/bishkek/house/Y00YcAVoSkwBQFpofXR2dHVjZw==/?ll=74.627051%2C42.874992&z=17.8"
        height="100%"
        width="100%"
      />
    </MainContainer>
  )
}

export default Contackts
