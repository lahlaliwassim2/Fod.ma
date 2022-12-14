import React,{useState} from 'react'
import {AiOutlineMenu ,AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import { BsFillCartFill,BsFillSaveFill} from 'react-icons/bs'
import { TbTruckDelivery} from 'react-icons/tb'
import { MdFavorite} from 'react-icons/md'
import { FaWallet,FaUserFriends} from 'react-icons/fa'
import { MdHelp} from 'react-icons/md'
import { AiFillTag} from 'react-icons/ai'
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

        {/* mobile menu  */}
        {/* Overlay */}
        <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>
        
        {/* SIDE BAR MENU */}
        <div className='fixed top-0 left-0 w-[300px] bg-white duration-300 h-screen z-10  '>
            <AiOutlineClose  size={30} className="absolute right-4 top-4 cursor-pointer" />
            <h1 className='text-2xl p-4 font-bold'>
               choisir par : 
            </h1>
            <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar