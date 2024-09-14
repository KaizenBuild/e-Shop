import React from 'react'
import kidCategory from "../assets/Images/kidcategory.jpg"
import manCategory from "../assets/Images/manCategory.jpg"
import womenCategory from "../assets/Images/womenCategory.jpg"

const categories = [
    {
        title: 'Kids',
        image: kidCategory,
    },
    {
        title: 'Mens',
        image: manCategory,
    },
    {
        title: 'Womens',
        image: womenCategory,
    },
];

const CategorySection = () => {

    return (
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-5'>
            {categories.map((category, index) => {
                return (
                    <div key={index} className='relative xs:h-64 mx-auto transform transition-transform duration-300 hover:scale-105'>
                        <img src={category.image} alt="images" className=' h-full object-cover rounded-lg shadow-md' />
                        <div className='absolute top-40 left-3'>
                            <p className='text-3xl xs:text-xl font-bold text-white'>{category.title}</p>
                            <p className='text-white'>View All</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CategorySection;
