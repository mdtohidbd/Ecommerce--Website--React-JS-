import React from 'react'
import banner from '../assets/HeroBanner.jpg'

const HeroBanner = () => {
  return (
    <div className=' bg-red-200 lg:pt-24 pt-16'>
      <div className='relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px] shadow-2xl ' style={{backgroundImage: `url(${banner})`, backgroundPosition:'Top'}}>
        <div className='absolute inset-0 bg-black md:rounded-2xl bg-opacity-50 flex items-center justify-center'>
            <div className='text-center text-white px-4'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4 '><span className='text-sky-400 font-extrabold'>Discover</span> Your Style</h1>
                <p className='text-lg md:text-xl mb-8 text-neutral-300 font-bold'>Shop the latest trends and find your perfect look</p>
                <button className='bg-red-500 hover:bg-red-800 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300 shadow-lg'>Shop Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
