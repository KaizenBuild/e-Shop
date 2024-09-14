import React from 'react'
import { FaHeadset, FaShippingFast } from 'react-icons/fa'
import { FaMoneyBill1Wave } from 'react-icons/fa6'

const InfoSection = () => {
    const infoItems = [
        {
            icons: <FaShippingFast className='text-3xl text-red-600'/>,
            title: 'Free Shipping',
            description: 'Free shipping on all orders over $50.',
        },
        {
            icons: <FaHeadset className='text-3xl text-red-600'/>,
            title: 'Customer Support',
            description: 'We are here to asist you anytime.',
        },
        {
            icons: <FaMoneyBill1Wave className='text-3xl text-red-600'/>,
            title: '100% Money Back',
            description: 'Full refund if you are not satisfied.',
        },
        {
            icons: <FaMoneyBill1Wave className='text-3xl text-red-600'/>,
            title: '100% Money Back',
            description: 'Full refund if you are not satisfied.',
        },
        {
            icons: <FaMoneyBill1Wave className='text-3xl text-red-600'/>,
            title: '100% Money Back',
            description: 'Full refund if you are not satisfied.',
        },
    ]
  return (
    <div className='bg-white pb-8 pt-12'>
      <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
        {infoItems.map((item, index)=>(
            <div key={index} className='flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                {item.icons}
                <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
                <p className='mt-2 text-gray-600'>{item.description}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default InfoSection
