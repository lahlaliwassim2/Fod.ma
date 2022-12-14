import React from 'react'

function Hero() {
  return (
    <div  className="max-w-[1640px] mx-auto p-4 ">
        <div className='max-h-[500px] relative'>
          <div className='absolute w-full h-full flex flex-col justify-center bg-black/30 text-gray-200 max-h-[500px]'>
             <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl font-bold lg:text-7xl'>Mar7ba <span className='text-[#22c55e]'>Bikom</span></h1>
             <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl font-bold lg:text-7xl '><span className='text-[#22c55e]'>3end</span> <span>Mar7aba</span></h1>
          </div>
        
    <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
    </div>
  )
}

export default Hero