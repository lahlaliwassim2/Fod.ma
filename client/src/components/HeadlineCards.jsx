import React from 'react'

function HeadlineCards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 grid md:grid-cols-3 gap-6' >
       {/* CARD */} 
       <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/40 text-white rounded-xl'>
                <p className='font-bold text-2xl px-2'>Sun's Out,BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white
                 text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img  className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>

        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/40 text-white rounded-xl'>
                <p className='font-bold text-2xl px-2'>Sun's Out,BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white
                 text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img  className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>

        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/40 text-white rounded-xl'>
                <p className='font-bold text-2xl px-2'>Sun's Out,BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white
                 text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img  className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/827513/pexels-photo-827513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </div>
  )
}

export default HeadlineCards