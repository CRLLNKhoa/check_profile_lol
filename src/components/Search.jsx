import React from 'react'
import {BiSearch} from "react-icons/bi"

function Search() {
  return (
    <div className='border w-[300px] py-2 px-4 flex items-center gap-2 rounded-full'>
        <BiSearch/>
        <input type="text" className='outline-none w-full' value={"Cá heo chin"} placeholder='Enter summoner name...' />
    </div>
  )
}

export default Search