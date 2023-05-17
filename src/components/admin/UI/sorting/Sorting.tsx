import SortingDropdownMenu from './SortingDropdownMenu'
import MenuItem from './MenuItem'
import SortingSideMenu from './SortingSideMenu'
import { SORT } from '../../../../utils/constants/sortingConsts'

type SortingProps = {
  onChange: (key: string, value: string | number | boolean) => void
}

const Sorting = ({ onChange }: SortingProps) => {
  return (
    <div>
      <SortingDropdownMenu title="Сортировать" color="secondary">
        <MenuItem title="Новинки" onChange={onChange} sortBy={SORT.new} />
        <SortingSideMenu title="По акции">
          <MenuItem title="Все акции" onChange={onChange} sortBy={SORT.discount} />
          <MenuItem title="Свыше 50%" onChange={onChange} sortBy={SORT.discount_over_fifty} />
          <MenuItem title="До 50%" onChange={onChange} sortBy={SORT.discount_lower_fifty} />
        </SortingSideMenu>
        <MenuItem title="Рекомендуемые" onChange={onChange} sortBy={SORT.recommend} />
        <MenuItem title="По увеличению цены" onChange={onChange} sortBy={SORT.price_by_asc} />
        <MenuItem title="По уменьшению цены" onChange={onChange} sortBy={SORT.price_by_desc} />
      </SortingDropdownMenu>
    </div>
  )
}

export default Sorting
