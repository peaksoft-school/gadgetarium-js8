import React from 'react'
import { ReactComponent as ServiceIcon } from '../../../assets/icons/userMainPageIcons/06_advant1 1.svg'
import { ReactComponent as ServiceIcon1 } from '../../../assets/icons/userMainPageIcons/07_advant2.svg'
import { ReactComponent as ServiceIcon2 } from '../../../assets/icons/userMainPageIcons/08_advant3.svg'
import { ReactComponent as ServiceIcon3 } from '../../../assets/icons/userMainPageIcons/08_advant4.svg'
import { ReactComponent as ServiceIcon4 } from '../../../assets/icons/userMainPageIcons/09_advant5.svg'

import { styled } from '@mui/material'

const StyledContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '3.125rem 4rem 6.25rem 4rem'
}))

const InnerContainer = styled('div')(() => ({
  width: '13.875rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1.875rem 0px 2.5rem',
  gap: ' 1.25rem',
  background: '#FFFFFF',
  borderRadius: '.25rem'
}))
const StyledText = styled('p')(() => ({
  width: ' 9.625rem',

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '130%',

  textAlign: 'center',

  color: '#292929'
}))
const ReusableServiceCart = () => {
  return (
    <StyledContainer>
      <InnerContainer>
        <ServiceIcon />

        <StyledText>Официальный дистрибьютер</StyledText>
      </InnerContainer>
      <InnerContainer>
        <ServiceIcon1 />
        <StyledText>Гарантийное обслуживание</StyledText>
      </InnerContainer>
      <InnerContainer>
        <ServiceIcon2 />
        <StyledText>Оплата любым удобным способом</StyledText>
      </InnerContainer>
      <InnerContainer>
        <ServiceIcon3 />
        <StyledText>Оптовые продажи</StyledText>
      </InnerContainer>
      <InnerContainer>
        <ServiceIcon4 />
        <StyledText>Доставка в любой регион Кыргызстана</StyledText>
      </InnerContainer>
    </StyledContainer>
  )
}

export default ReusableServiceCart
