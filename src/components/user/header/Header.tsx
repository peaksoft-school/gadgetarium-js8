import { styled, Button, Divider } from '@mui/material'
import { ReactComponent as LogoIcon } from '../../../assets/icons/header-icons/logo.svg'
import { ReactComponent as NumberIcon } from '../../../assets/icons/header-icons/numberIcon.svg'
import { ReactComponent as CatalogIcon } from '../../../assets/icons/header-icons/catalog.svg'
import { ReactComponent as FacebookIcon } from '../../../assets/icons/header-icons/facebook.svg'
import { ReactComponent as InstagramIcon } from '../../../assets/icons/header-icons/instagram.svg'
import { ReactComponent as WhatsAppIcon } from '../../../assets/icons/header-icons/whatsapp.svg'
import { ReactComponent as UnionIcon } from '../../../assets/icons/header-icons/unionIcon.svg'
import { ReactComponent as LikeIcon } from '../../../assets/icons/header-icons/likeIcon.svg'
import { ReactComponent as HoveredLikeIcon } from '../../../assets/icons/header-icons/hoveredLikeIcon.svg'
import { ReactComponent as BasketIcon } from '../../../assets/icons/header-icons/basketIcon.svg'
import IconButtons from '../../UI/buttons/IconButtons'
import Categories from '../../../components/UI/categories/Categories'
import { PATHS } from '../../../utils/constants/router/routerConsts'
import { useCallback, useEffect } from 'react'
import ReusableHoverModal from '../UI/ReusableHoverModal'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { categories } from '../../../utils/constants/categories'
import { getAllBusketProductService } from '../../../api/mainPage/AddProductToBusketService'
import MenuItem from '../UI/MenuItem'
import SearchItem from '../UI/SearchItem'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/store'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { favouriteActions } from '../../../redux/store/favourites/favourites.slice'

const StyledNotificationIcon = styled('span')(() => ({
  display: 'flex',
  flexFlow: 'row wrap',
  webkitBoxPack: 'center',
  placeContent: 'center',
  webkitBoxAlign: 'center',
  alignItems: 'center',
  position: 'absolute',
  boxSizing: 'border-box',
  fontWeight: '500',
  fontSize: '0.75rem',
  minWidth: '1.25rem',
  lineHeight: '1',
  padding: '0px 6px',
  height: '1.25rem',
  borderRadius: '10px',
  zIndex: '1',
  transition: 'transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  backgroundColor: 'rgb(235, 0, 20)',
  color: 'rgb(255, 255, 255)',
  top: '0.5rem',
  right: '0.4rem',
  transform: 'scale(1) translate(50%, -50%)',
  transformOrigin: '100% 0%',
  border: '2px solid #1A1A25'
}))

const FirstHeaderContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundColor: '#1A1A25',
  color: '#fff',
  height: '4.71875rem',
  borderBottom: '1px solid #858FA426',
  width: '100%'
}))

const SecondHeaderContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundColor: '#1A1A25',
  color: '#fff',
  height: '6rem'
}))

const StyledList = styled('ul')(() => ({
  listStyle: 'none',
  display: 'flex',
  marginLeft: '3rem',
  alignItems: 'center'
}))

const NumberContainer = styled('div')(() => ({
  display: 'flex',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '1rem',
  lineHeight: '1.1875rem',
  p: {
    marginRight: '1.5rem',
    marginTop: '0.7rem'
  }
}))

const StyledNavLink = styled(NavLink)(() => ({
  textDecoration: 'none',
  color: '#fff',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '140%',
  textAlign: 'center',
  marginRight: '1.5rem',
  '&:focus': {
    backgroundColor: '#858FA426',
    padding: '0.75rem 0.857rem',
    borderRadius: '4px'
  }
}))

const StyledButton = styled(Button)(() => ({
  backgroundColor: '#CB11AB',
  color: '#fff',
  opacity: '1000',
  padding: '0.75rem 1.25rem 0.8125rem 1.25rem',
  borderRadius: '4px',
  marginLeft: '5.5rem',

  '&:hover': {
    backgroundColor: '#991984'
  }
}))
const StyledButtonForScroll = styled(Button)(() => ({
  backgroundColor: '#CB11AB',
  color: '#fff',
  opacity: '1000',
  padding: '0.75rem 1.25rem 0.8125rem 1.25rem',
  borderRadius: '4px',

  '&:hover': {
    backgroundColor: '#991984'
  }
}))
const StyledPContent = styled('p')(() => ({
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '1rem',
  lineHeight: '1.1875rem',
  color: '#FFFFFF',
  marginLeft: '0.375rem',
  textTransform: 'none'
}))

const SocialMediaList = styled('ul')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  listStyle: 'none',
  span: {
    marginLeft: '0.7rem'
  }
}))

const StyledDivider = styled(Divider)(() => ({
  height: '2.5rem',
  background: '#858FA426'
}))

const InteractionIcons = styled('ul')(() => ({
  marginRight: '5rem',
  display: 'flex',
  listStyle: 'none',
  span: {
    marginLeft: '1rem'
  },
  li: {
    position: 'relative'
  }
}))

const InteractionIconsItem = styled('li')(() => ({
  'path:hover': {
    fill: '#CB11AB',
    'span:nth-of-type(2)': {
      fill: 'red'
    }
  }
}))
const StyledInputContainer = styled('div')(() => ({
  width: '43rem',
  height: '10.8125rem',
  margin: '8rem 4rem 0 3rem '
}))
const SocialMediaListItem = styled('li')(() => ({
  'path:hover': {
    fill: '#CB11AB'
  }
}))

const StyledCategories = styled('div')(() => ({
  position: 'fixed',
  left: '14.875rem',
  marginTop: '15.625rem'
}))

const LikeIconItem = styled('li')(() => ({
  'span:last-of-type': {
    display: 'none'
  },
  '&:hover': {
    'span:first-of-type': {
      display: 'none'
    },
    'span:last-of-type': {
      display: 'block'
    }
  }
}))
export const StyledIconButtonCart = styled('button')(() => ({
  backgroundColor: 'transparent',
  border: 'none'
}))
const StyledTippy = styled(Tippy)(() => ({
  backgroundColor: 'transparent',
  border: 'none',
  width: '1000px',
  marginRight: '12.5rem'
}))
const StyledTippyForMenuItem = styled(Tippy)(() => ({
  backgroundColor: 'transparent',
  border: 'none',
  width: '200px',
  marginRight: '2.5rem'
}))
export type QueryParams = {
  keyword: string | null
}

const Header: React.FC = () => {
  const { totalQuantity } = useSelector((state: RootState) => state.favourites)
  const dispatch = useDispatch<AppDispatch>()
  const [isScroll, setIsScroll] = useState(false)
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [basketItems, setBasketItems] = useState([])

  const getAllBusket = async () => {
    try {
      const { data } = await getAllBusketProductService()
      setBasketItems(data)
    } catch (error) {}
  }

  useEffect(() => {
    getAllBusket()
  }, [])

  const openModalHandler = () => {
    setOpen((prevState) => !prevState)
  }

  const goToBasketHandler = () => {
    navigate('basket')
    dispatch(favouriteActions.addCount(0))
  }
  const goToFavouritesHandler = () => {
    navigate('favourites')
  }

  const scrollHandler = useCallback(() => {
    const scroll = window.screenY || document.documentElement.scrollTop
    if (scroll > 90) {
      setIsScroll(true)
      return
    }
    setIsScroll(false)
  }, [])
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])
  return (
    <header style={{ position: isScroll ? 'fixed' : 'sticky', width: '100%', zIndex: '100' }}>
      {isScroll ? (
        <>
          <SecondHeaderContainer>
            <div style={{ padding: '0.75rem 1.25rem 1.25rem 3.25rem' }}>
              <a href="/">
                <IconButtons icon={<LogoIcon />} />
              </a>
            </div>
            <StyledButtonForScroll onClick={openModalHandler}>
              <CatalogIcon />
              <StyledPContent>Каталог</StyledPContent>
            </StyledButtonForScroll>
            <StyledCategories>
              {open === true ? <Categories data={categories} category={() => {}} /> : null}
            </StyledCategories>

            <StyledDivider orientation="vertical" />

            <StyledInputContainer>{isScroll ? <SearchItem /> : null}</StyledInputContainer>

            <InteractionIcons>
              <InteractionIconsItem>
                <span>
                  <StyledTippy
                    interactive={true}
                    interactiveBorder={0}
                    delay={100}
                    trigger="mouseenter"
                    content={
                      <ReusableHoverModal path="/" basketItems={basketItems}>
                        Сравнить
                      </ReusableHoverModal>
                    }
                  >
                    <StyledIconButtonCart>
                      <IconButtons icon={<UnionIcon />} />
                      <StyledNotificationIcon>8</StyledNotificationIcon>
                    </StyledIconButtonCart>
                  </StyledTippy>
                </span>
              </InteractionIconsItem>
              <LikeIconItem>
                <span>
                  <StyledTippy
                    interactive={true}
                    interactiveBorder={10}
                    delay={100}
                    trigger="mouseenter"
                    content={
                      <ReusableHoverModal path="/favourites" basketItems={basketItems}>
                        Перейти в избранное
                      </ReusableHoverModal>
                    }
                  >
                    <StyledIconButtonCart>
                      <IconButtons icon={<LikeIcon />} />
                    </StyledIconButtonCart>
                  </StyledTippy>
                </span>
                <span>
                  {' '}
                  <StyledTippy
                    interactive={true}
                    interactiveBorder={20}
                    delay={200}
                    trigger="mouseenter"
                    content={
                      <ReusableHoverModal path={PATHS.MAIN.faq} basketItems={basketItems}>
                        Перейти в избранное
                      </ReusableHoverModal>
                    }
                  >
                    <StyledIconButtonCart>
                      <IconButtons icon={<HoveredLikeIcon />} />
                    </StyledIconButtonCart>
                  </StyledTippy>
                </span>
              </LikeIconItem>
              <InteractionIconsItem>
                <span>
                  <StyledTippy
                    interactive={true}
                    interactiveBorder={30}
                    delay={100}
                    trigger="mouseenter"
                    content={
                      <ReusableHoverModal basketItems={basketItems} path={'/basket'}>
                        Оформить заказ
                      </ReusableHoverModal>
                    }
                  >
                    <StyledIconButtonCart>
                      <IconButtons icon={<BasketIcon />} onClick={goToBasketHandler} />
                      <StyledNotificationIcon>{basketItems.length}</StyledNotificationIcon>
                    </StyledIconButtonCart>
                  </StyledTippy>
                </span>
              </InteractionIconsItem>
            </InteractionIcons>
          </SecondHeaderContainer>
        </>
      ) : (
        <>
          {' '}
          <FirstHeaderContainer>
            <div>
              <a href="/">
                <IconButtons icon={<LogoIcon />} />
              </a>
            </div>
            <div>
              <StyledList>
                <StyledNavLink to="/">Главная</StyledNavLink>
                <StyledNavLink to="">О магазине</StyledNavLink>
                <StyledNavLink to={PATHS.MAIN.delivery}>Доставка</StyledNavLink>
                <StyledNavLink to={PATHS.MAIN.faq}>FAQ</StyledNavLink>
                <StyledNavLink to={PATHS.MAIN.contacts}>Контакты</StyledNavLink>
              </StyledList>
            </div>
            <NumberContainer>
              <p>+996 (400) 00-00-00</p>
              <span>
                <StyledTippyForMenuItem
                  interactive={true}
                  interactiveBorder={0}
                  delay={100}
                  trigger="mouseenter"
                  content={<MenuItem />}
                >
                  <StyledIconButtonCart>
                    <IconButtons icon={<NumberIcon />} />
                  </StyledIconButtonCart>
                </StyledTippyForMenuItem>
              </span>
            </NumberContainer>
          </FirstHeaderContainer>
          <SecondHeaderContainer>
            <StyledButton onClick={openModalHandler}>
              <CatalogIcon />
              <StyledPContent>Каталог</StyledPContent>
            </StyledButton>
            <StyledCategories>
              {open === true ? <Categories data={categories} category={() => {}} /> : null}
            </StyledCategories>

            <StyledDivider orientation="vertical" />
            <StyledInputContainer>
              {' '}
              <SearchItem />{' '}
            </StyledInputContainer>
            <SocialMediaList>
              <SocialMediaListItem>
                <a href="https://www.facebook.com/confirmemail.php?next=https%3A%2F%2Fwww.facebook.com%2F">
                  <IconButtons icon={<FacebookIcon />} />
                </a>
              </SocialMediaListItem>
              <SocialMediaListItem>
                <a href="https://www.instagram.com/">
                  <IconButtons icon={<InstagramIcon />} />
                </a>
              </SocialMediaListItem>
              <SocialMediaListItem>
                <a href="https://www.whatsapp.com/?lang=ru">
                  <IconButtons icon={<WhatsAppIcon />} />
                </a>
              </SocialMediaListItem>
            </SocialMediaList>
            <InteractionIcons>
              <InteractionIconsItem>
                <span>
                  <StyledTippy
                    interactive={true}
                    interactiveBorder={0}
                    delay={100}
                    trigger="mouseenter"
                    content={
                      <ReusableHoverModal path="/" basketItems={basketItems}>
                        Сравнить
                      </ReusableHoverModal>
                    }
                  >
                    <StyledIconButtonCart>
                      <IconButtons icon={<UnionIcon />} />
                      <StyledNotificationIcon>8</StyledNotificationIcon>
                    </StyledIconButtonCart>
                  </StyledTippy>
                </span>
              </InteractionIconsItem>
              <LikeIconItem>
                <span>
                  <StyledTippy
                    interactive={true}
                    interactiveBorder={10}
                    delay={100}
                    trigger="mouseenter"
                    content={
                      <ReusableHoverModal path="/favourites" basketItems={basketItems}>
                        Перейти в избранное
                      </ReusableHoverModal>
                    }
                  >
                    <StyledIconButtonCart>
                      <IconButtons icon={<LikeIcon />} />
                    </StyledIconButtonCart>
                  </StyledTippy>
                </span>
                <span>
                  {' '}
                  <StyledTippy
                    interactive={true}
                    interactiveBorder={20}
                    delay={200}
                    trigger="mouseenter"
                    content={
                      <ReusableHoverModal path={PATHS.MAIN.faq} basketItems={basketItems}>
                        Перейти в избранное
                      </ReusableHoverModal>
                    }
                  >
                    <StyledIconButtonCart>
                      <IconButtons icon={<HoveredLikeIcon />} />
                    </StyledIconButtonCart>
                  </StyledTippy>
                </span>
              </LikeIconItem>
              <InteractionIconsItem>
                <span>
                  <StyledTippy
                    interactive={true}
                    interactiveBorder={30}
                    delay={100}
                    trigger="mouseenter"
                    content={
                      <ReusableHoverModal basketItems={basketItems} path={'/basket'}>
                        Оформить заказ
                      </ReusableHoverModal>
                    }
                  >
                    <StyledIconButtonCart>
                      <IconButtons icon={<BasketIcon />} onClick={goToBasketHandler} />
                      <StyledNotificationIcon>{basketItems.length}</StyledNotificationIcon>
                    </StyledIconButtonCart>
                  </StyledTippy>
                </span>
              </InteractionIconsItem>
            </InteractionIcons>
          </SecondHeaderContainer>
        </>
      )}
    </header>
  )
}

export default Header
