import React from 'react'
import {AiOutlineMenu , AiOutlineSearch} from 'react-icons/ai'
function Navbar() {
  return (
    <div className='max-w-[1640px] mx-auto flex  justify-between items-center p-4 '>
       {/* lEFT SIDE */}
        <div className='flex items-center'>
            <div className='cursor-pointer '>
                <AiOutlineMenu  size={30}/> 
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Best <span className='font-bold '>Food</span>
            </h1>
        </div>
        {/* Search Input  */}
        <div>
            <AiOutlineSearch />
        </div>
    </div>
  )
}

export default Navbar