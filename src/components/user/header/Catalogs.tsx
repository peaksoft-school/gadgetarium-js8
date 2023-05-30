import React from 'react'
import Categories from '../../UI/categories/Categories'
import { categories } from '../../../utils/constants/categories'

type Props = {
  catalogHandler: () => void
}

const Catalogs = ({ catalogHandler }: Props) => {
  return (
    <div onClick={catalogHandler}>
      <Categories data={categories} category={() => {}} />
    </div>
  )
}

export default Catalogs
