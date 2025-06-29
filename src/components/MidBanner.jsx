import React from 'react'
import banner from '../assets/MidBanner.jpg'

const MidBanner = () => {
  return (
    <div className=' bg-red-100 py-24 '>
      <div className='relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px] shadow-lg ' style={{backgroundImage: `url(${banner})`, backgroundPosition:'center', backgroundAttachment: 'fixed'}}>
        <div className='absolute inset-0 bg-black md:rounded-2xl bg-opacity-50 flex items-center justify-center'>
            <div className='text-center text-white px-4'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'><span className='fond-extrabold text-orange-800'>Winter</span> Collection 2025</h1>
                <p className='text-lg md:text-xl mb-6 font-semibold'>Discover the hottest trends for the season. Limited time offer: 45% off all new arrivals!</p>
                <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300'>Shop Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MidBanner
