import Smart from '../../../assets/icons/categories/smart.svg'
import Nout from '../../../assets/icons/categories/nout.svg'
import SmartWatch from '../../../assets/icons/categories/smartWatch.svg'
import Earphone from '../../../assets/icons/categories/earphone.svg'

export interface CategoriTypes {
  icon: string
  title: string
  id: string
  menuItem: {
    title: string
    id: string
  }[]
}

export const categories: CategoriTypes[] = [
  {
    icon: Smart,
    title: 'Смартфоны',
    id: '1',
    menuItem: [
      { id: '1', title: 'Samsung' },
      { id: '2', title: 'Apple' },
      { id: '3', title: 'Huawei' },
      { id: '4', title: 'Honor' },
      { id: '5', title: 'Xiaomi' }
    ]
  },
  {
    icon: Nout,
    title: 'Ноутбуки и планшеты ',
    id: '2',
    menuItem: [
      { id: '1', title: 'Ноутбуки и планшеты ' },
      { id: '2', title: 'Acer' },
      { id: '3', title: 'Asus' },
      { id: '4', title: 'Apple' },
      { id: '5', title: 'DELL' },
      { id: '6', title: 'Digma' },
      { id: '7', title: 'Huawei' },
      { id: '8', title: 'HONOR' },
      { id: '9', title: 'Lenovo' },
      { id: '10', title: 'HP' }
    ]
  },
  {
    icon: SmartWatch,
    title: 'Смарт-часы и браслеты',
    id: '3',
    menuItem: [
      { id: '1', title: 'Смарт-часы и браслеты' },
      { id: '2', title: 'Смарт-часы Apple Watch' },
      { id: '3', title: 'Умные часы для взрослых' },
      { id: '4', title: 'Умные часы для детей' },
      { id: '5', title: 'Фитнес браслеты' }
    ]
  },
  {
    icon: Earphone,
    title: 'Аксессуары',
    id: '4',
    menuItem: [
      { id: '1', title: 'Аксессуары' },
      { id: '2', title: 'Ремешки для часов' },
      { id: '3', title: 'Зарядные устройства' },
      { id: '4', title: 'Защита экрана' },
      { id: '5', title: 'Чехлы и корпусы' },
      { id: '6', title: 'Подставки' },
      { id: '7', title: 'Кабели и адаптеры' },
      { id: '8', title: 'Внешние аккумуляторы' },
      { id: '9', title: 'Наушники' },
      { id: '10', title: 'Карта памяти и накопители' }
    ]
  }
]
