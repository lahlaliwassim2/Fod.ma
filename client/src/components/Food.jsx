import React, { useState } from 'react';
import { data } from '../data/data.js';
import {AiOutlineClose} from 'react-icons/ai'
const Food = () => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);
  const [cardProduct,setCard]= useState(false)
  const [tempData,setTempData] = useState([])

///findOne 
const findOne = (image,name,price,description)=>{
  let tempData = [image,name,price,description]
    setTempData(item=>[1,...tempData])
    console.log(tempData)
    setCard(!cardProduct)
}


  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
       Choisir votres produits 
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filtre par  Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('burger')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Burgers
            </button>
            <button
              onClick={() => filterType('pizza')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Pizza
            </button>
            <button
              onClick={() => filterType('salad')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Salads
            </button>
            <button
              onClick={() => filterType('chicken')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Filter par Prix</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('35')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              35
            </button>
            <button
              onClick={() => filterPrice('45')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              45
            </button>
            <button
              onClick={() => filterPrice('55')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              55
            </button>
            <button
              onClick={() => filterPrice('65')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              65
            </button>
            <button
              onClick={() => filterPrice('75')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              75
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 cursor-pointer' >
        {foods.map((item, index) => (
          <div 
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
            onClick={()=>findOne(item.image,item.name,item.price,item.description)}
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>
                  {item.price}dh
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>




           {/* Overlay */}
           {
            cardProduct?  <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''
        }
       
        
        {/* Left Card  */}
        <div className={ cardProduct? 'fixed top-0 left-0 w-[500px] bg-white duration-300 h-screen z-10' : 'fixed top-0 left-[-100%] w-[300px] bg-white duration-300 h-screen z-10'}>
            <AiOutlineClose  size={30} className="absolute right-4 top-4 cursor-pointer" onClick={()=>{setCard(!cardProduct)}} />
            <div className='grid grid-cols-1 gap-6 h-full pt-4'>
       
          <div
  
            className='border mt-12 shadow-lg rounded-lg hover:scale-10 duration-300'
          >
            <img
              src={tempData[1]}
              alt=""
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{tempData[2]}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>
                 {tempData[3]} dh
                </span>
              </p>

            </div>
            <p>{tempData[4]}</p>
          </div>
        
      </div>
           
        </div>
    </div>
    




  );
};

export default Food;