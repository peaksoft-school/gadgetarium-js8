import { ReactComponent as Telephone } from '../../assets/icons/telephoneIcon.svg'
import { ReactComponent as Clock } from '../../assets/icons/clock_icon.svg'
import { ReactComponent as Mail } from '../../assets/icons/mail_icon.svg'
import { ReactComponent as Location } from '../../assets/icons/location_icon.svg'

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <p>Каталог</p>
          <ul>
            <li>
              <a href="#">Смартфоны</a>
            </li>
            <li>
              <a href="#">Ноутбуки и планшеты</a>
            </li>
            <li>
              <a href="#">Смарт-часы и браслеты</a>
            </li>
            <li>
              <a href="#">Аксессуары</a>
            </li>
          </ul>
        </div>

        <div>
          <p>Будь с нами</p>
          <ul>
            <li>
              <a href="#">Акции</a>
            </li>
            <li>
              <a href="#">Новинки</a>
            </li>
            <li>
              <a href="#">Популярные категории</a>
            </li>
          </ul>
        </div>

        <div>
          <p>Помощь и сервисы</p>
          <ul>
            <li>
              <a href="#">О магазине</a>
            </li>
            <li>
              <a href="#">Доставка</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Контакты</a>
              <input type="email" />
              <button>Подпиаться</button>
              <h5>
                Нажимая на кнопку «подписаться» Вы соглашаетесь на обработку персональных данных
              </h5>
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
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p>Расскажем об акциях и скидках</p>
      </div>

      <div>
        <div>LOGO</div>
        <p>© 2022 Gadgetarium. Интернет магазин Все права защищены.</p>
      </div>
    </footer>
  )
}

export default Footer
