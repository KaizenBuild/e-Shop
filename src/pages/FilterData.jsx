import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import notFound from '../assets/Images/notFound.png'


const FilterData = () => {
    const filterProducts = useSelector(state => state.product.filteredData)

    return (
        <div className=' container mx-auto  py-12'>

            {
            filterProducts.length > 0 ?
                <>
                    <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
                        {filterProducts.map((product) => {
                            return (
                                <ProductCard product={product} />
                            )
                        })}
                    </div>
                </>
                :
                <div className='text-center text-2xl font-bold py-12'>
                    <img src={notFound} alt=""  className='m-auto'/>
                </div>
            }
    </div>
    )
}

export default FilterData
