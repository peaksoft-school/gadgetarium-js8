import { styled, Divider } from '@mui/material'
import { ReactComponent as DeliveryIcon } from '../../assets/icons/delivery-layout-icons/deliveryIcon.svg'
import { ReactComponent as WalletIcon } from '../../assets/icons/delivery-layout-icons/walletIcon.svg'
import { ReactComponent as PayWithCard } from '../../assets/icons/delivery-layout-icons/payWithCardIcon.svg'
import { ReactComponent as PayWithCash } from '../../assets/icons/delivery-layout-icons/payWithCash.svg'
import { ReactComponent as PayAfter } from '../../assets/icons/delivery-layout-icons/payAfter.svg'

const MainContaner = styled('div')(() => ({
  width: '100%',
  height: '100%',
  padding: '3.9375rem 12.25rem 10.6875rem 12.25rem',
  backgroundColor: '#E8E8E8'
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
  display: 'flex'
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
  marginTop: '1.25rem',
  background: '#CDCDCD'
}))

const InfoContainer = styled('div')(() => ({
  marginTop: '2.5rem'
}))

const InfoContainerTitle = styled('h4')(() => ({
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '1.125rem',
  lineHeight: '150%',
  color: '#292929',
  marginLeft: '0.5rem'
}))

const InfoContainerList = styled('ul')(() => ({
  listStyle: 'none',
  marginTop: '1.875rem',
  display: 'flex',
  justifyContent: 'space-between'
}))

const InfoContainerListItem = styled('li')(() => ({
  div: {
    display: 'flex',
    p: {
      marginLeft: '0.75rem'
    }
  }
}))

const WalletIconContainer = styled('div')(() => ({
  marginTop: '0.75rem'
}))

const PaymentMethodContainer = styled('div')(() => ({
  marginTop: '4.875rem'
}))

const PaymentMethodTitle = styled('h4')(() => ({
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '1.25rem',
  lineHeight: '120%',
  color: '#292929'
}))

const PaymentMethodList = styled('ul')(() => ({
  listStyle: 'none',
  marginTop: '2.25rem',
  display: 'flex',
  li: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '5.5rem',
    p: {
      marginLeft: '0.75rem',
      fontFamily: 'Inter, sans-serif',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '1rem',
      lineHeight: '120%',
      color: '#292929'
    }
  }
}))

const Delivery = () => {
  return (
    <MainContaner>
      <StyledNav>
        <StyledNavLink href="jahd">Главная</StyledNavLink>
        <StyledNavLink href="sfkhk">Доставка</StyledNavLink>
      </StyledNav>
      <div>
        <Title>Доставка</Title>
      </div>
      <StyledDivider orientation="horizontal" />
      <InfoContainer>
        <InfoContainerTitle>
          Город доставки <b>Бишкек</b>
        </InfoContainerTitle>
        <InfoContainerList>
          <InfoContainerListItem>
            <div>
              <span>
                <DeliveryIcon />
              </span>
              <p>
                <b>Самовывоз со склада</b> <br />
                Забрать в течение 14 дней
              </p>
            </div>
            <WalletIconContainer>
              <span>
                <WalletIcon />
              </span>
              <p>Предоплата не требуется</p>
            </WalletIconContainer>
          </InfoContainerListItem>
          <InfoContainerListItem>
            <div>
              <span>
                <DeliveryIcon />
              </span>
              <p>
                <b>Самовывоз из магазина</b> <br />
                Забрать в течение 14 дней
              </p>
            </div>
            <WalletIconContainer>
              <span>
                <WalletIcon />
              </span>
              <p>Предоплата не требуется</p>
            </WalletIconContainer>
          </InfoContainerListItem>
          <InfoContainerListItem>
            <div>
              <span>
                <DeliveryIcon />
              </span>
              <p>
                <b>Доставка</b> <br />
                По городу 200сом, по регионам
                <br /> Бесплатная доставка <br />
                при покупках свыше — 10 000с.
              </p>
            </div>
            <WalletIconContainer>
              <span>
                <WalletIcon />
              </span>
              <p>Предоплата не требуется</p>
            </WalletIconContainer>
          </InfoContainerListItem>
        </InfoContainerList>
      </InfoContainer>
      <PaymentMethodContainer>
        <PaymentMethodTitle>Способы оплаты</PaymentMethodTitle>
        <PaymentMethodList>
          <li>
            <span>
              <PayWithCard />
            </span>
            <p>
              Оплата картой <br />
              онлайн
            </p>
          </li>
          <li>
            <span>
              <PayWithCash />
            </span>
            <p>
              Наличными при <br />
              получении
            </p>
          </li>
          <li>
            <span>
              <PayAfter />
            </span>
            <p>
              Картой <br />
              при получении
            </p>
          </li>
        </PaymentMethodList>
      </PaymentMethodContainer>
    </MainContaner>
  )
}

export default Delivery
