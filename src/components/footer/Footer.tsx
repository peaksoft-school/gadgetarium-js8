import { ReactComponent as Telephone } from '../../assets/icons/telephoneIcon.svg'
import { ReactComponent as Clock } from '../../assets/icons/clock_icon.svg'
import { ReactComponent as Mail } from '../../assets/icons/mail_icon.svg'
import { ReactComponent as Location } from '../../assets/icons/location_icon.svg'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import { styled } from '@mui/material'

const StyledFooter = styled('footer')(() => ({
  backgroundColor: '#1A1A25',
  width: '100%',
  height: '100%',
  padding: '1.5rem 2rem',
  color: '#858FA4',
  paddingBottom: '2.5rem',
  paddingTop: '3.75rem',
  paddingLeft: '12.1rem',
  paddingRight: '12.1rem'
}))

const StyledLink = styled('a')(() => ({
  textDecoration: 'none',
  color: '#858FA4',
  '&:hover': {
    color: '#FFF'
  }
}))

const StyledFirstFooterBlock = styled('a')(() => ({
  display: 'flex'
}))

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFirstFooterBlock>
        <div>
          <p>Каталог</p>
          <ul>
            <li>
              <StyledLink href="#">Смартфоны</StyledLink>
            </li>
            <li>
              <StyledLink href="#">Ноутбуки и планшеты</StyledLink>
            </li>
            <li>
              <StyledLink href="#">Смарт-часы и браслеты</StyledLink>
            </li>
            <li>
              <StyledLink href="#">Аксессуары</StyledLink>
            </li>
          </ul>
        </div>

        <div>
          <p>Будь с нами</p>
          <ul>
            <li>
              <StyledLink href="#">Акции</StyledLink>
            </li>
            <li>
              <StyledLink href="#">Новинки</StyledLink>
            </li>
            <li>
              <StyledLink href="#">Популярные категории</StyledLink>
            </li>
          </ul>
        </div>

        <div>
          <p>Помощь и сервисы</p>
          <ul>
            <li>
              <StyledLink href="#">О магазине</StyledLink>
            </li>
            <li>
              <StyledLink href="#">Доставка</StyledLink>
            </li>
            <li>
              <StyledLink href="#">FAQ</StyledLink>
            </li>
            <li>
              <StyledLink href="#">Контакты</StyledLink>
            </li>
          </ul>
        </div>

        <div>
          <p>Расскажем об акциях и скидках</p>
          <input type="email" />
          <button>Подпиcаться</button>
          <h5>Нажимая на кнопку «подписаться» Вы соглашаетесь на обработку персональных данных</h5>
          <p>
            <Telephone /> +996 (400) 00 00 00
          </p>
          <p>
            <Mail />
            Gadgetarium.kg
          </p>
          <p>
            <Location /> г.Бишкек, ул. Гражданская 119
          </p>
          <p>
            <Clock />С 10:00 до 21:00 (без выходных)
          </p>
        </div>
      </StyledFirstFooterBlock>

      <div>
        <div>
          <a href="/">
            <Logo />
          </a>
        </div>
        <p>© 2022 Gadgetarium. Интернет магазин Все права защищены.</p>
      </div>
    </StyledFooter>
  )
}

export default Footer
