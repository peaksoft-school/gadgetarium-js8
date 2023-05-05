import { useState } from 'react'
import { Box, styled, Typography } from '@mui/material'
import FaqAccordion from './Accordion'
import { accordion } from '../../../utils/constants/accordionQuestions'

const ContainerStyled = styled('div')(() => ({
  width: '100%',
  mainHeight: '500px',
  paddingLeft: '195px',
  paddingRight: '195px',
  paddingTop: '63px',
  fontFamily: 'inherit',
  backgroundColor: '#f4f4f4'
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
  display: 'flex',
  marginBottom: '33px'
}))

const BoxStyled = styled(Box)(() => ({
  padding: '0 0 1rem 0',
  borderBottom: '1px solid #CDCDCD',
  '& h1': {
    fontFamily: 'Ubuntu',
    fontWeight: '500',
    fontSize: '2rem',
    lineHeight: '2rem'
  }
}))

const AccordionBoxStyled = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '4rem',
  gap: '1rem'
}))

const TypographyStyled = styled(Typography)(() => ({
  fontWeight: '700',
  fontSize: '2rem',
  lineHeight: '110%',
  padding: '2rem',
  textAlign: 'center'
}))

const FrequentlyAskedQuestions = () => {
  const [expanded, setExpanded] = useState<string | boolean>(true)

  const handleChange = (background: string) => (isExpanded: boolean) => {
    setExpanded(isExpanded ? background : false)
  }

  return (
    <ContainerStyled>
      <StyledNav>
        <StyledNavLink>Главная </StyledNavLink>
        <StyledNavLink>FAQ </StyledNavLink>
      </StyledNav>
      <BoxStyled>
        <Typography component="h1" variant="h5">
          FAQ
        </Typography>
      </BoxStyled>
      <AccordionBoxStyled>
        <TypographyStyled>Часто задаваемые вопросы</TypographyStyled>
        {accordion.map((item) => (
          <FaqAccordion
            key={item.number}
            expanded={expanded}
            onChange={() => handleChange(item.background)}
            className="accordion"
            {...item}
          />
        ))}
      </AccordionBoxStyled>
    </ContainerStyled>
  )
}

export default FrequentlyAskedQuestions
