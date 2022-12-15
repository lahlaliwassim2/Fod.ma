import React from 'react'

function HeadlineCards() {
  return (
    <>
      <h1 className='text-orange-600 font-bold py-6 text-4xl text-center'>
        Nous Avons
      </h1>
    <div className='max-w-[1640px] mx-auto p-4  grid md:grid-cols-3 gap-6' >
       {/* CARD */} 
     
       <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/40 text-white rounded-xl'>
                <p className='font-bold text-2xl px-2'>Livraison à domecil </p>
            </div>
            <img  className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>

        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/40 text-white rounded-xl'>
                <p className='font-bold text-2xl px-2'>Plus que 100 produits</p>
            </div>
            <img  className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>

        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/40 text-white rounded-xl'>
                <p className='font-bold text-2xl px-2'>les meilleurs chef</p>
            </div>
            <img  className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/2977515/pexels-photo-2977515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </div>
  </>)
}

export default HeadlineCards