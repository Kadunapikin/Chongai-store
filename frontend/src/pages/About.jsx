import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p className=''> About Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit eveniet ipsum neque. Corporis, officiis, 
            deserunt voluptatum eligendi reprehenderit error a expedita quasi fuga officia ratione quia sed dolorem minima.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aut, laborum voluptatum commodi ipsum odio assumenda 
            facilis iusto cum adipisci eum modi? Veniam dignissimos a iste impedit vero consequatur sapiente.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod iure voluptas, iste dolor consectetur eaque repellat voluptatum,
             tempora ipsa illum doloribus dolores sequi tenetur labore minus aliquam? Sint, unde pariatur!</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standard.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top prority.</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About