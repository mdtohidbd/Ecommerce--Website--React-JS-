import React, { useContext } from 'react'
import { Shopcontext } from '../Context/ShopContext'
import Item from '../components/Item'
import banner from '../assets/KidsBanner.png'

const Kids = () => {
  const {all_product} = useContext(Shopcontext)
  const kidProducts = all_product.filter((product) => product.category === "kid")
  return (
    <div className='md:mt-32 mt-20 max-w-7xl mx-auto shadow-lg rounded-lg'>
    <div>
      <img src={banner} alt="" className='w-screen px-6 shadow-lg rounded-lg' />
    </div>
    <div className='mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8'>
      <h2 className='text-2xl  tracking-tight  text-center md:text-start text-amber-500 font-extrabold'>Kid's Collection</h2>
      <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {
          kidProducts.map((product) => {
            return <Item key={product.id} product={product} />
          })
        }
      </div>
    </div>
  </div>
  )
}

export default Kids
