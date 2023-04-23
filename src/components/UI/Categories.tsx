import { useState } from 'react'
import { ListItemText, MenuItem, MenuList, Paper, Popover, styled } from '@mui/material'
import { ReactComponent as Arrow } from '../../assets/icons/categories/arrow.svg'
import { categories } from '../../utils/constants/categories'

const PaperStyled = styled(Paper)(({}) => ({
  width: 372,
  height: 196,
  maxWidth: '100%',
  background: '#FFFFFF',
  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
  borderRadius: '4px 0px 0px 4px'
}))

const MenuItemStyled = styled(MenuItem)(({ theme }) => ({
  padding: '8px',
  '&:hover': {
    color: '#FFFFFF',
    background: theme.customPalette.primary.main,
    borderRadius: '11px'
  }
}))

const DivStyled = styled('div')(() => ({
  width: '293px',
  height: '392px',
  background: '#FFFFFF',
  color: '#8B8B9A',
  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
  borderRadius: '0px 4px 4px 0px'
}))

const TitleStyled = styled('p')(() => ({
  display: 'flex',
  textAlign: 'center',
  padding: '10px',
  color: '#8B8B9A',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '19px',
  '&:hover': {
    cursor: 'pointer',
    color: '#292929'
  }
}))

const IconStyled = styled('img')(() => ({
  paddingLeft: '13px',
  paddingRight: '10px',
  '&:hover': {
    color: '#FFFFFF'
  }
}))

const ArrowStyled = styled(Arrow)(() => ({
  marginRight: '20px'
}))

const ListItemTextStyled = styled(ListItemText)(() => ({
  textAlign: 'start'
}))

type MenuItemType = {
  title: string
}

type CategoryType = {
  icon: string
  title: string
  id: string
  menuItem: MenuItemType[]
}
const Categories = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLLIElement | null>(null)
  const [test, setTest] = useState<CategoryType | undefined>(undefined)

  const handleClick = (event: React.MouseEvent<HTMLLIElement>, id: string) => {
    setAnchorEl(event.currentTarget)
    const nestedTest = categories.find((item) => item.id === id)
    const menuItemArray = []
    menuItemArray.push(nestedTest)

    setTest(nestedTest)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <div>
      <PaperStyled>
        <MenuList>
          {categories.map((categorie) => (
            <MenuItemStyled
              key={categorie.id}
              onClick={(event) => handleClick(event, categorie.id)}
            >
              <IconStyled src={categorie.icon} alt="icons" />
              <ListItemTextStyled>{categorie.title}</ListItemTextStyled>
              <ArrowStyled />
            </MenuItemStyled>
          ))}
        </MenuList>
      </PaperStyled>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        {test &&
          [test].map((categori) => (
            <DivStyled key={categori.id}>
              {categori.menuItem.map((item) => (
                <>
                  <TitleStyled key={item.title}>{item.title}</TitleStyled>
                </>
              ))}
            </DivStyled>
          ))}
      </Popover>
    </div>
  )
}

export default Categories
