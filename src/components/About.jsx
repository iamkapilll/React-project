import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden border-b-2'
     id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>
            About
             <span className='underline underline-offset-4 decoration-1 under font-light'> Us</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Scholorship and unlocking the dreams</p>

        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} className='rounded-full w-full sm:w-1/2 max-w-lg' alt="" />
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>20+</p>
                        <p>Years of Excellence</p>
                    </div>
                     <div>
                        <p className='text-4xl font-medium text-gray-800'>30+</p>
                        <p>Programs</p>
                    </div>
                     <div>
                        <p className='text-4xl font-medium text-gray-800'>10+</p>
                        <p>Branches(cities)</p>
                    </div>
                     <div>
                        <p className='text-4xl font-medium text-gray-800'>100+</p>
                        <p>Scholorships</p>
                    </div>
                </div>
                <p className='my-10 max-w-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, quaerat sint tenetur incidunt nesciunt unde quam molestiae voluptates reprehenderit deserunt voluptas repudiandae, magni dicta consequatur impedit quibusdam saepe, vitae in!
                Quos saepe voluptatum dolores perferendis alias impedit iusto in vitae dignissimos, sit aut magni, similique quae. Aspernatur itaque tempora, sapiente corrupti unde voluptas omnis excepturi perferendis, et eum fuga ipsam!
                Excepturi odio optio eaque explicabo quisquam nihil aliquam officia nostrum commodi, beatae cumque veniam quidem ducimus recusandae sapiente sunt consectetur a aperiam neque repellendus. Quos incidunt enim repellat repudiandae sed?</p>
                <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>
            </div>
        </div>

     </div>
  )
}

export default About