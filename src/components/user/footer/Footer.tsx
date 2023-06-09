import { ReactComponent as Telephone } from '../../../assets/icons/footer-icons/telephoneIcon.svg'
import { ReactComponent as Clock } from '../../../assets/icons/footer-icons/clock_icon.svg'
import { ReactComponent as Mail } from '../../../assets/icons/footer-icons/mail_icon.svg'
import { ReactComponent as Location } from '../../../assets/icons/footer-icons/location_icon.svg'
import { ReactComponent as Logo } from '../../../assets/images/logo/logo.svg'
import { styled } from '@mui/material'
import { mailingSubcribe } from '../../../api/mail/mailingService'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PATHS } from '../../../utils/constants/router/routerConsts'

const StyledFooter = styled('footer')(() => ({
  backgroundColor: '#1A1A25',
  width: '100%',
  height: '100%',
  padding: '1.5rem 2rem',
  color: '#858FA4',
  paddingBottom: '2.5rem',
  paddingTop: '3.75rem',
  paddingLeft: '7rem',
  paddingRight: '7rem'
}))

const StyledLink = styled(NavLink)(() => ({
  textDecoration: 'none',
  color: '#858FA4',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '130%',
  '&:hover': {
    color: '#FFF'
  }
}))

const StyledBlockName = styled('p')(() => ({
  color: '#fff',
  marginBottom: '2rem'
}))

const StyledFirstSubFooterBlock = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  paddingRight: '10rem',
  width: '60%',
  li: {
    listStyle: 'none',
    marginBottom: '0.75rem'
  }
}))

const StyledFirstFooterBlock = styled('div')(() => ({
  borderBottom: '1.5px solid #858FA426',
  display: 'flex',
  justifyContent: 'space-around',
  paddingBottom: '3.5rem',
  marginBottom: '2.2rem'
}))

const InfoBlock = styled('div')(() => ({
  marginTop: '2.625rem',
  p: {
    display: 'flex',
    alignItems: 'center',
    margin: '1rem 10px'
  }
}))

const StyledSecondFooterBlock = styled('div')(() => ({
  width: '30%'
}))

const StyledInput = styled('input')(() => ({
  minWidth: '230px',
  padding: '10px 10px',
  outline: 'none',
  color: '#292929',
  borderRadius: '4px 0px 0px 4px',
  border: 'none',
  fomtFamily: 'Inter'
}))

const StyledButton = styled('button')(() => ({
  padding: '7.5px 1.3rem 10px 1.3rem',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '16px',
  background: '#CB11AB',
  color: '#fff',
  border: 'none',
  fomtFamily: 'Montserrat'
}))

const StyledThirdFooterBlock = styled('div')(() => ({
  textAlign: 'center'
}))

const StyledInfoBlockSpan = styled('span')(() => ({
  marginLeft: '15px'
}))

const Footer = () => {
  const [mailingAccount, setMailingAccound] = useState<string>('')
  const mailingHandler = async () => {
    const data = { userEmail: mailingAccount }

    await mailingSubcribe(data)
    setMailingAccound('')
  }

  return (
    <StyledFooter>
      <StyledFirstFooterBlock>
        <StyledFirstSubFooterBlock>
          <div>
            <StyledBlockName>Каталог</StyledBlockName>
            <ul>
              <li>
                <StyledLink to="#">Смартфоны</StyledLink>
              </li>
              <li>
                <StyledLink to="#">Ноутбуки и планшеты</StyledLink>
              </li>
              <li>
                <StyledLink to="#">Смарт-часы и браслеты</StyledLink>
              </li>
              <li>
                <StyledLink to="#">Аксессуары</StyledLink>
              </li>
            </ul>
          </div>

          <div>
            <StyledBlockName>Будь с нами</StyledBlockName>
            <ul>
              <li>
                <StyledLink to="#">Акции</StyledLink>
              </li>
              <li>
                <StyledLink to="#">Новинки</StyledLink>
              </li>
              <li>
                <StyledLink to="#">Популярные категории</StyledLink>
              </li>
            </ul>
          </div>

          <div>
            <StyledBlockName>Помощь и сервисы</StyledBlockName>
            <ul>
              <li>
                <StyledLink to={PATHS.MAIN.about}>О магазине</StyledLink>
              </li>
              <li>
                <StyledLink to={PATHS.MAIN.delivery}>Доставка</StyledLink>
              </li>
              <li>
                <StyledLink to={PATHS.MAIN.faq}>FAQ</StyledLink>
              </li>
              <li>
                <StyledLink to={PATHS.MAIN.contacts}>Контакты</StyledLink>
              </li>
            </ul>
          </div>
        </StyledFirstSubFooterBlock>

        <StyledSecondFooterBlock>
          <StyledBlockName>Расскажем об акциях и скидках</StyledBlockName>
          <StyledInput
            placeholder="Email"
            type="email"
            value={mailingAccount}
            onChange={(e) => setMailingAccound(e.target.value)}
          />
          <StyledButton onClick={mailingHandler}>Подпиcаться</StyledButton>
          <p style={{ color: '#FFF' }}>
            Нажимая на кнопку «подписаться» Вы соглашаетесь на обработку персональных данных
          </p>
          <InfoBlock>
            <p>
              <Telephone /> <StyledInfoBlockSpan> +996 (400) 00 00 00</StyledInfoBlockSpan>
            </p>
            <p>
              <Mail />
              <StyledInfoBlockSpan>Gadgetarium.kg</StyledInfoBlockSpan>
            </p>
            <p>
              <Location />
              <StyledInfoBlockSpan> г.Бишкек, ул. Гражданская 119 </StyledInfoBlockSpan>
            </p>
            <p>
              <Clock /> <StyledInfoBlockSpan> С 10:00 до 21:00 (без выходных) </StyledInfoBlockSpan>
            </p>
          </InfoBlock>
        </StyledSecondFooterBlock>
      </StyledFirstFooterBlock>

      <StyledThirdFooterBlock>
        <div>
          <a href="/">
            <Logo />
          </a>
        </div>
        <p>
          © 2023 Gadgetarium. Интернет магазин <br /> Все права защищены.
        </p>
      </StyledThirdFooterBlock>
    </StyledFooter>
  )
}

export default Footer
