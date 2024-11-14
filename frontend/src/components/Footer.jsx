import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aliquid illum nisi aspernatur possimus ut vero  ex quos iusto.
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/about'>About Us</a></li>
                    <li><a href='#'>Delievery</a></li>
                    <li><a href='#'>Careers</a></li>
                    <li><a href='#'>Privacy Policy</a></li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+234-7036-071-563</li>
                    <li>ibakoshi27@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ bakoshi.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer