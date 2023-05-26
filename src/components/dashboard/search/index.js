import React, { useState } from 'react'
import './styles.css';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
function Search ({search,onSearchChange})  {
 
  return (
    <div className='search-flex'>
      <SearchTwoToneIcon />
      <input type='text' placeholder='search' onChange={(e)=>onSearchChange(e)}  />
      </div>
  )
}

export default Search;