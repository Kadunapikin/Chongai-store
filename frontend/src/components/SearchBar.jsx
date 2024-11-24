import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const SearchBar = () => {

    const { search, setSearch, showSearch, showSetSearch } = useContext(ShopContext);

  return (
    <div>SearchBar</div>
  )
}

export default SearchBar