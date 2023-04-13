import Slider from 'react-slick'
import { styled } from '@mui/material'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const StyledMainBlock = styled('div')(() => ({
  width: '100%',
  background: '#F4F4F4',
  margin: '3rem 0rem'
}))

const StyledTopLink = styled('a')(() => ({
  color: '#91969E',
  textDecoration: 'none'
}))

const MainContainer = styled('div')(() => ({
  width: '80%',
  margin: '0 auto'
}))

const StyledLayoutTitle = styled('h1')(() => ({
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '30px',
  lineHeight: '110%',
  margin: '2rem 0rem'
}))

const StyledSlider = styled(Slider)(() => ({
  '& .slick-track': {
    display: 'flex'
  },
  '& .slick-list': {
    overflow: 'hidden',
    width: '100%'
  },
  '& .slick-slide': {
    width: '500px'
  },
  '& .slick-current': {
    img: {
      height: '100%',
      width: '100%',
      filter: 'brightness(100%)'
    }
  }
}))

const StyledSliderItem = styled('div')(() => ({
  border: '1px solid',
  height: '300px',
  width: '100%',
  backgroundColor: '#000',
  img: {
    height: '100%',
    width: '100%',
    filter: 'brightness(40%)'
  },

  '& .slick-center': {
    background: '#fff',
    opacity: '0.5',
    img: {
      filter: 'brightness(100%)'
    }
  }
}))

const sliderImagesSources = [
  {
    img: 'https://chinalogist.ru/sites/default/files/field/image/22869.jpg'
  },
  {
    img: 'https://wallpapercave.com/wp/wp2739937.jpg'
  },
  {
    img: 'https://cdnn21.img.ria.ru/images/07e4/0a/17/1581159078_0:167:3050:1883_1920x0_80_0_0_c74c02538da2858afacc8126480a69c1.jpg'
  },
  {
    img: 'https://img2.akspic.ru/attachments/crops/2/9/7/1/41792/41792-gadzhet-makbuk_ejr-tehnologii-macbook_pro-macbook-1920x1080.jpg'
  },
  {
    img: 'https://memeburn.com/gearburn/wp-content/uploads/sites/3/2019/09/apple-watch-series-5.jpg'
  },
  {
    img: 'https://rare-gallery.com/uploads/posts/1134967-illustration-blue-technology-Apple-Inc-Apple-Watch-hand-screenshot-gadget-computer-wallpaper-product.jpg'
  }
]

const AboutStore = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    autoplaySpeed: 5000,
    autoplay: true
  }
  return (
    <div style={{ background: '#F4F4F4' }}>
      <Header />
      <StyledMainBlock>
        <MainContainer>
          <article style={{ borderBottom: '2px solid #CDCDCD', marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '14px' }}>
              <StyledTopLink href="/">Главная</StyledTopLink> » О Магазине
            </p>
            <StyledLayoutTitle>О Магазине</StyledLayoutTitle>
          </article>
        </MainContainer>
      </StyledMainBlock>

      <div>
        <StyledSlider {...settings}>
          {sliderImagesSources.map((item, index) => {
            return (
              <StyledSliderItem>
                <img src={item.img} alt={index.toString()} />
              </StyledSliderItem>
            )
          })}
        </StyledSlider>
      </div>

      <StyledMainBlock>
        <MainContainer>
          <section style={{ marginBottom: '7.5rem' }}>
            <article style={{ width: '70%' }}>
              <h3>Магазин Gadgetarium </h3>
              <ul style={{ padding: '2rem', lineHeight: '27px' }}>
                <li>
                  слаженная команда людей, любящих спорт и здоровый образ жизни знающих свое дело и
                  ориентирующихся во всех нюансах фитнес оборудования;
                </li>
                <li>
                  широкая номенклатура качественной продукции ведущих мировых брендов с огромным
                  выбором товаров в наличии;
                </li>
                <li>
                  склад запчастей для обеспечения качественного сервиса и бесперебойной работы
                  оборудования;
                </li>
                <li>полный послепродажный сервис с информационной и технической поддержкой;</li>
                <li>строгое соблюдение всех обязательств перед партнерами;</li>
                <li>отличные цены и эксклюзивные условия для постоянных партнеров.</li>
              </ul>
            </article>

            <article style={{ width: '67%', marginTop: '3.75rem' }}>
              <h3>В чем причина нашего успеха?</h3>
              <p style={{ margin: '1.5rem 0rem', lineHeight: '27px' }}>
                Non ultricies sollicitudin nisi quisque. Morbi integer quis tincidunt vitae
                penatibus. Feugiat quis tincidunt volutpat scelerisque elit fermentum nullam rhoncus
                adipiscing. Sem tortor molestie odio. Adipiscing etiam vitae in semper sed eget nec
                aliquet aliquam. Morbi integer quis tincidunt vitae penatibus. Feugiat quis
                tincidunt volutpat scelerisque elit fermentum nullam rhoncus adipiscing. Sem tortor
                molestie odio.Adipiscing etiam vitae in semper sed eget nec aliquet aliquam. Morbi
                integer quis tincidunt vitae penatibus. Feugiat quis tincidunt volutpat scelerisque
                elit fermentum nullam rhoncus adipiscing. Sem tortor molestie odio.
              </p>
              <p style={{ margin: '1.5rem 0rem', lineHeight: '27px' }}>
                Non ultricies sollicitudin nisi quisque. Morbi integer quis tincidunt vitae
                penatibus. Feugiat quis tincidunt volutpat scelerisque elit fermentum nullam rhoncus
                adipiscing. Sem tortor molestie odio. Adipiscing etiam vitae in semper sed eget nec
                aliquet aliquam. Morbi integer quis tincidunt vitae penatibus. Feugiat quis
                tincidunt volutpat scelerisque elit fermentum nullam rhoncus adipiscing. Sem tortor
                molestie odio.Adipiscing etiam vitae in semper sed eget nec aliquet aliquam. Morbi
                integer quis tincidunt vitae penatibus. Feugiat quis tincidunt volutpat scelerisque
                elit fermentum nullam rhoncus adipiscing. Sem tortor molestie odio.
              </p>
            </article>

            <article style={{ marginTop: '3.75rem', display: 'flex' }}>
              <div style={{ width: '40%', marginRight: '5rem' }}>
                <h3>Мы сегодня – это:</h3>
                <p style={{ margin: '1.5rem 0rem', lineHeight: '27px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet amet est orci
                  volutpat placerat maecenas egestas augue ac. Tortor, sed magnis interdum massa. Id
                  phasellus lectus dui nisl. Adipiscing etiam vitae in semper sed eget nec aliquet
                  aliquam.
                </p>
                <p style={{ margin: '1.5rem 0rem', lineHeight: '27px' }}>
                  Non ultricies sollicitudin nisi quisque. Morbi integer quis tincidunt vitae
                  penatibus. Feugiat quis tincidunt volutpat scelerisque elit fermentum nullam
                  rhoncus adipiscing. Sem tortor molestie odio. Adipiscing etiam vitae in semper sed
                  eget nec aliquet aliquam. Morbi integer quis tincidunt vitae penatibus. Feugiat
                  quis tincidunt volutpat scelerisque elit fermentum nullam rhoncus adipiscing. Sem
                  tortor molestie odio.Adipiscing etiam vitae in semper sed eget nec aliquet
                  aliquam. Morbi integer quis tincidunt vitae penatibus. Feugiat quis tincidunt
                  volutpat scelerisque elit fermentum nullam rhoncus adipiscing. Sem tortor molestie
                  odio.
                </p>
              </div>

              <div style={{ border: '1px solid', width: '55%' }}>
                <img src="../../assets/images/mapOfKyrgyzstan.png" alt="1" />
              </div>
            </article>
          </section>
        </MainContainer>
      </StyledMainBlock>
      <Footer />
    </div>
  )
}

export default AboutStore
