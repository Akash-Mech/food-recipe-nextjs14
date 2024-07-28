import React from 'react'
import about from '../../public/images/about.png'
import Image from 'next/image'

export const About = () => {
    return (
        <div className='my-12'>
            <div className="flex w-full flex-col items-center justify-center lg:flex-row gap-4 px-4">
                <div className=" md:w-1/2  flex items-center justify-center">
                    <Image src={about} alt='About' className='lg:w-1/2' />
                </div>
                <div className="  lg:w-1/2 flex flex-col justify-center space-y-10">
                    <h2 className='text-4xl text-brand-color font-bold text-start'>About Us</h2>
                    <p className='text-lg leading-8 text-justify'>Discover the heart of home cooking with Foody. We’re passionate about bringing you delicious and diverse recipes that cater to all tastes and dietary preferences. Our app is designed to inspire, educate, and delight, helping you create memorable meals with ease. From family-friendly recipes to sophisticated dishes, our extensive collection has something for everyone. Experience the joy of cooking and the pleasure of sharing great food with those you love.</p>
                </div>
            </div>
        </div>
    )
}
