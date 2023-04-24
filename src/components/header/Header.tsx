import { styled, Button, Paper, InputBase, Divider } from '@mui/material'
import { ReactComponent as LogoIcon } from '../../assets/icons/header-icons/logo.svg'
import { ReactComponent as SearchIcon } from '../../assets/icons/header-icons/searchIcon.svg'
import { ReactComponent as NumberIcon } from '../../assets/icons/header-icons/numberIcon.svg'
import { ReactComponent as CatalogIcon } from '../../assets/icons/header-icons/catalog.svg'
import { ReactComponent as FacebookIcon } from '../../assets/icons/header-icons/facebook.svg'
import { ReactComponent as InstagramIcon } from '../../assets/icons/header-icons/instagram.svg'
import { ReactComponent as WhatsAppIcon } from '../../assets/icons/header-icons/whatsapp.svg'
import { ReactComponent as UnionIcon } from '../../assets/icons/header-icons/unionIcon.svg'
import { ReactComponent as LikeIcon } from '../../assets/icons/header-icons/likeIcon.svg'
import { ReactComponent as HoveredLikeIcon } from '../../assets/icons/header-icons/hoveredLikeIcon.svg'
import { ReactComponent as BasketIcon } from '../../assets/icons/header-icons/basketIcon.svg'
import IconButtons from '../UI/IconButtons'

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
  borderBottom: '1px solid #858FA426'
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
    marginTop: '0.1rem'
  }
}))

const StyledNavLink = styled('a')(() => ({
  textDecoration: 'none',
  color: '#fff',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '140%',
  textAlign: 'center',
  marginRight: '1.5rem',
  '&:first-of-type': {
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

const StyledPaper = styled(Paper)(() => ({
  p: '0.125rem 0.25rem',
  display: 'flex',
  alignItems: 'center',
  width: '45.625rem',
  border: '1px solid #fff',
  borderRadius: '10px',
  background: '#1A1A25'
}))

const StyledInputBase = styled(InputBase)(() => ({
  ml: 1,
  flex: 1,
  color: '#fff',
  paddingTop: '0.375rem',
  paddingBottom: '0.375rem',
  marginLeft: '1rem'
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

const SocialMediaListItem = styled('li')(() => ({
  'path:hover': {
    fill: '#CB11AB'
  }
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

const Header = () => {
  return (
    <header>
      <FirstHeaderContainer>
        <div>
          <a href="jbjknl">
            <IconButtons icon={<LogoIcon />} />
          </a>
        </div>
        <div>
          <StyledList>
            <StyledNavLink href="baac">Главная</StyledNavLink>
            <StyledNavLink href="sdvs">О магазине</StyledNavLink>
            <StyledNavLink href="asc">Доставка</StyledNavLink>
            <StyledNavLink href="sdv">FAQ</StyledNavLink>
            <StyledNavLink href="svn">Контакты</StyledNavLink>
          </StyledList>
        </div>
        <NumberContainer>
          <p>+996 (400) 00-00-00</p>
          <NumberIcon />
        </NumberContainer>
      </FirstHeaderContainer>
      <SecondHeaderContainer>
        <StyledButton>
          <CatalogIcon />
          <StyledPContent>Каталог</StyledPContent>
        </StyledButton>
        <StyledDivider orientation="vertical" />
        <div>
          <StyledPaper>
            <StyledInputBase placeholder="Поиск по каталогу магазина" />
            <IconButtons icon={<SearchIcon />} />
          </StyledPaper>
        </div>
        <SocialMediaList>
          <SocialMediaListItem>
            <span>
              <IconButtons icon={<FacebookIcon />} />
            </span>
          </SocialMediaListItem>
          <SocialMediaListItem>
            <span>
              <IconButtons icon={<InstagramIcon />} />
            </span>
          </SocialMediaListItem>
          <SocialMediaListItem>
            <span>
              <IconButtons icon={<WhatsAppIcon />} />
            </span>
          </SocialMediaListItem>
        </SocialMediaList>
        <InteractionIcons>
          <InteractionIconsItem>
            <span>
              <IconButtons icon={<UnionIcon />} />
              <StyledNotificationIcon>8</StyledNotificationIcon>
            </span>
          </InteractionIconsItem>
          <LikeIconItem>
            <span>
              <IconButtons icon={<LikeIcon />} />
            </span>
            <span>
              <IconButtons icon={<HoveredLikeIcon />} />
            </span>
          </LikeIconItem>
          <InteractionIconsItem>
            <span>
              <IconButtons icon={<BasketIcon />} />
              <StyledNotificationIcon>2</StyledNotificationIcon>
            </span>
          </InteractionIconsItem>
        </InteractionIcons>
      </SecondHeaderContainer>
    </header>
  )
}

export default Header
