import Smart from '../../../assets/icons/categories/smart.svg'
import Nout from '../../../assets/icons/categories/nout.svg'
import SmartWatch from '../../../assets/icons/categories/smartWatch.svg'
import Earphone from '../../../assets/icons/categories/earphone.svg'

export type CategoriTypes = {
  icon: string
  title: string
  id: string
  menuItem: {
    title: string
  }[]
}

export const categories: CategoriTypes[] = [
  {
    icon: Smart,
    title: 'Смартфоны',
    id: '1',
    menuItem: [
      { title: 'Samsung' },
      { title: 'Apple' },
      { title: 'Huawei' },
      { title: 'Honor' },
      { title: 'Xiaomi' }
    ]
  },
  {
    icon: Nout,
    title: 'Ноутбуки и планшеты ',
    id: '2',
    menuItem: [
      { title: 'Ноутбуки и планшеты ' },
      { title: 'Acer' },
      { title: 'Asus' },
      { title: 'Apple' },
      { title: 'DELL' },
      { title: 'Digma' },
      { title: 'Huawei' },
      { title: 'HONOR' },
      { title: 'Lenovo' },
      { title: 'HP' }
    ]
  },
  {
    icon: SmartWatch,
    title: 'Смарт-часы и браслеты',
    id: '3',
    menuItem: [
      { title: 'Смарт-часы и браслеты' },
      { title: 'Смарт-часы Apple Watch' },
      { title: 'Умные часы для взрослых' },
      { title: 'Умные часы для детей' },
      { title: 'Фитнес браслеты' }
    ]
  },
  {
    icon: Earphone,
    title: 'Аксессуары',
    id: '4',
    menuItem: [
      { title: 'Аксессуары' },
      { title: 'Ремешки для часов' },
      { title: 'Зарядные устройства' },
      { title: 'Защита экрана' },
      { title: 'Чехлы и корпусы' },
      { title: 'Подставки' },
      { title: 'Кабели и адаптеры' },
      { title: 'Внешние аккумуляторы' },
      { title: 'Наушники' },
      { title: 'Карта памяти и накопители' }
    ]
  }
]
