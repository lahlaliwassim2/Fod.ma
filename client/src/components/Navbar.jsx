import React from 'react'
import {AiOutlineMenu , AiOutlineSearch} from 'react-icons/ai'
import { BsFillCartFill} from 'react-icons/bs'
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
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] '>
            <AiOutlineSearch />
            <input type="text" className='bg-transparent w-full p-2 focus:outline-none' />
        </div>
        {/* cart button */}
        <button className='bg-black  text-white md:flex  hidden items-centerpy-2 '>
            <BsFillCartFill  size={20} className='mr-2'/>
            cart
        </button>
    </div>
  )
}

export default Navbar