import React from 'react'
import {data} from '../data/data'
function Food() {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-center text-4xl '>Top Rated Menu Items </h1>
    {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>

{/* Filter Type */}
        <div>
          <p className='font-bold text-gray-700 '>Filter Type </p>
          <div className='flex justify-between flex-wrap'>
            <button className='m-1 border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white'>All</button>
            <button className='m-1 border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white'>Burgers</button>
            <button className='m-1 border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white'>Pizza</button>
            <button className='m-1 border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white'>all</button>
            <button className='m-1 border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white'>Salads</button>
            <button className='m-1 border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white'>Chiken</button>
          </div>
        </div>
      {/* Filter price */}
        <div>
        <p className='font-bold text-gray-700 '>Filter Price</p>
        <div className='flex justify-between max-w-[390px] w-full'>
        <button className='m-1 border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white'>dh</button>
            <button className='m-1 border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white'>100dh</button>
            <button className='m-1 border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white'>200dh</button>
            <button className='m-1 border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white'>45dh</button>
            <button className='m-1 border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white'>80dh</button>
        </div>
        </div>
        {/* Display Image */}
        <div>

        </div>
      </div>
    </div>
  )
}

export default Food