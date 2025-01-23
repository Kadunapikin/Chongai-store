import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit eveniet ipsum neque. Corporis, officiis, 
            deserunt voluptatum eligendi reprehenderit error a expedita quasi fuga officia ratione quia sed dolorem minima.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aut, laborum voluptatum commodi ipsum odio assumenda 
            facilis iusto cum adipisci eum modi? Veniam dignissimos a iste impedit vero consequatur sapiente.</p>
        </div>
      </div>
    </div>
  )
}

export default About