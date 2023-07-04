import { Divider, styled } from '@mui/material'
import { Container } from '@mui/system'
import CreateTabContainer from './CreateTabContainer'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const StyledNav = styled('nav')(() => ({
  display: 'flex',
  paddingTop: '60px'
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

const Title = styled('h3')(() => ({
  fontFamily: 'Ubuntu, sans-serif',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '1.875rem',
  lineHeight: '110%',
  marginTop: '2.0625rem'
}))

const StyledDivider = styled(Divider)(() => ({
  marginTop: '1.25rem'
}))

const StyledDiv = styled('div')(() => ({
  width: '100%'
}))

const PersonalAccount = () => {
  const { state } = useLocation()
  const [value, setValue] = useState<number>(state?.tab || 0)

  const getText = () => {
    switch (value) {
      case 0:
        return 'HISTORY'
      case 1:
        return 'FAVORITE'
      case 2:
        return 'PROFILE'
      default:
    }
  }
  const text = getText()
  return (
    <div style={{ background: '#f4f4f4' }}>
      <Container>
        <StyledNav>
          <StyledNavLink>Личный кабинет </StyledNavLink>
          <StyledNavLink>{text} </StyledNavLink>
        </StyledNav>

        <Title>{text}</Title>
        <StyledDivider orientation="horizontal" />
        <StyledDiv>
          <CreateTabContainer value={value} setValue={setValue} />
        </StyledDiv>
      </Container>
    </div>
  )
}

export default PersonalAccount
