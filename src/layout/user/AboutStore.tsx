import Slider from 'react-slick'
import { styled } from '@mui/material'
import mapImage from '../../assets/images/mapOfKyrgyzstan.png'
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrowLeft_icon.svg'
import { ReactComponent as ArrowRight } from '../../assets/icons/arrowRight_icon.svg'
import { CSSProperties, FC, MouseEventHandler } from 'react'

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

const FirstArticle = styled('article')(() => ({
  borderBottom: '2px solid #CDCDCD',
  marginBottom: '2.5rem'
}))

const SecondArticle = styled('article')(() => ({
  width: '70%'
}))

const StyledSecondArticleUl = styled('ul')(() => ({
  padding: '2rem',
  lineHeight: '27px'
}))

const ThirdArticle = styled('article')(() => ({
  width: '67%',
  marginTop: '3.75rem'
}))

const FourthArticle = styled('article')(() => ({
  marginTop: '3.75rem',
  display: 'flex'
}))

const StyledMapImage = styled('img')(() => ({
  width: '100%',
  marginTop: '4rem'
}))

const StyledArticleParagraph = styled('p')(() => ({
  margin: '1.5rem 0rem',
  lineHeight: '27px'
}))

const FourthArticleFirstBlock = styled('div')(() => ({
  width: '40%',
  marginRight: '5rem'
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
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
  alignItems: 'center',
  '& .slick-track': {
    display: 'flex',
    width: '800px',
    background: '#f4f4f4'
  },
  '& .slick-list': {
    overflow: 'hidden',
    width: '100%',
    background: '#f4f4f4'
  },
  '& .slick-slide': {
    width: '600px',
    background: '#f4f4f4'
  },
  '& .slick-current': {
    background: '#f4f4f4',
    img: {
      height: '90%',
      width: '90%',
      marginLeft: '70px',
      marginTop: '30px',
      filter: 'brightness(100%)'
    }
  },
  '& .slick-arrow': {
    cursor: 'pointer'
  },
  '& .slick-prev': {
    position: 'absolute',
    display: 'block',
    zIndex: 1,
    left: '1%'
  },
  '& .slick-next': {
    position: 'absolute',
    display: 'block',
    zIndex: 1,
    right: '1%'
  }
}))

const StyledSliderItem = styled('div')(() => ({
  border: '1px solid',
  height: '600px',
  width: '100%',
  backgroundColor: '#000',
  img: {
    height: '100%',
    width: '950px',
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

type ComponentPropsType = {
  className: string
  style?: CSSProperties
  onClick?: MouseEventHandler<SVGSVGElement>
}

const PrevArrow: FC<ComponentPropsType> = ({ className, style, onClick }) => {
  return <ArrowLeft className={className} style={{ ...style }} onClick={onClick} />
}
const NextArrow: FC<ComponentPropsType> = ({ className, style, onClick }) => {
  return <ArrowRight className={className} style={{ ...style }} onClick={onClick} />
}

const AboutStore = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 500,
    autoplaySpeed: 5000,
    autoplay: true,
    prevArrow: <PrevArrow className="slick-prev" />,
    nextArrow: <NextArrow className="slick-next" />
  }

  return (
    <>
      <StyledMainBlock>
        <MainContainer>
          <FirstArticle>
            <p style={{ fontSize: '14px' }}>
              <StyledTopLink href="/">Главная</StyledTopLink> » О Магазине
            </p>
            <StyledLayoutTitle>О Магазине</StyledLayoutTitle>
          </FirstArticle>
        </MainContainer>
      </StyledMainBlock>

      <div>
        <StyledSlider {...settings}>
          {sliderImagesSources.map((item, index) => {
            return (
              <StyledSliderItem key={index}>
                <img src={item.img} alt={index.toString()} />
              </StyledSliderItem>
            )
          })}
        </StyledSlider>
      </div>

      <StyledMainBlock>
        <MainContainer>
          <section style={{ marginBottom: '7.5rem' }}>
            <SecondArticle>
              <h3>Магазин Gadgetarium </h3>
              <StyledSecondArticleUl>
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
              </StyledSecondArticleUl>
            </SecondArticle>

            <ThirdArticle>
              <h3>В чем причина нашего успеха?</h3>
              <StyledArticleParagraph>
                Non ultricies sollicitudin nisi quisque. Morbi integer quis tincidunt vitae
                penatibus. Feugiat quis tincidunt volutpat scelerisque elit fermentum nullam rhoncus
                adipiscing. Sem tortor molestie odio. Adipiscing etiam vitae in semper sed eget nec
                aliquet aliquam. Morbi integer quis tincidunt vitae penatibus. Feugiat quis
                tincidunt volutpat scelerisque elit fermentum nullam rhoncus adipiscing. Sem tortor
                molestie odio.Adipiscing etiam vitae in semper sed eget nec aliquet aliquam. Morbi
                integer quis tincidunt vitae penatibus. Feugiat quis tincidunt volutpat scelerisque
                elit fermentum nullam rhoncus adipiscing. Sem tortor molestie odio.
              </StyledArticleParagraph>
              <StyledArticleParagraph>
                Non ultricies sollicitudin nisi quisque. Morbi integer quis tincidunt vitae
                penatibus. Feugiat quis tincidunt volutpat scelerisque elit fermentum nullam rhoncus
                adipiscing. Sem tortor molestie odio. Adipiscing etiam vitae in semper sed eget nec
                aliquet aliquam. Morbi integer quis tincidunt vitae penatibus. Feugiat quis
                tincidunt volutpat scelerisque elit fermentum nullam rhoncus adipiscing. Sem tortor
                molestie odio.Adipiscing etiam vitae in semper sed eget nec aliquet aliquam. Morbi
                integer quis tincidunt vitae penatibus. Feugiat quis tincidunt volutpat scelerisque
                elit fermentum nullam rhoncus adipiscing. Sem tortor molestie odio.
              </StyledArticleParagraph>
            </ThirdArticle>

            <FourthArticle>
              <FourthArticleFirstBlock>
                <h3>Мы сегодня – это:</h3>
                <StyledArticleParagraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet amet est orci
                  volutpat placerat maecenas egestas augue ac. Tortor, sed magnis interdum massa. Id
                  phasellus lectus dui nisl. Adipiscing etiam vitae in semper sed eget nec aliquet
                  aliquam.
                </StyledArticleParagraph>
                <StyledArticleParagraph>
                  Non ultricies sollicitudin nisi quisque. Morbi integer quis tincidunt vitae
                  penatibus. Feugiat quis tincidunt volutpat scelerisque elit fermentum nullam
                  rhoncus adipiscing. Sem tortor molestie odio. Adipiscing etiam vitae in semper sed
                  eget nec aliquet aliquam. Morbi integer quis tincidunt vitae penatibus. Feugiat
                  quis tincidunt volutpat scelerisque elit fermentum nullam rhoncus adipiscing. Sem
                  tortor molestie odio.Adipiscing etiam vitae in semper sed eget nec aliquet
                  aliquam. Morbi integer quis tincidunt vitae penatibus. Feugiat quis tincidunt
                  volutpat scelerisque elit fermentum nullam rhoncus adipiscing. Sem tortor molestie
                  odio.
                </StyledArticleParagraph>
              </FourthArticleFirstBlock>

              <div style={{ width: '55%' }}>
                <StyledMapImage src={mapImage} alt="1" />
              </div>
            </FourthArticle>
          </section>
        </MainContainer>
      </StyledMainBlock>
    </>
  )
}

export default AboutStore
