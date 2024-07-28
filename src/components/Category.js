"use client";

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

export const Category = ({ recipe }) => {
    const uniqueCuisines = [...new Map(recipe.map(item => [item.cuisine, item.image])).entries()];

    console.log(uniqueCuisines);


    return (
        <div className='my-12 px-4 mx-auto' >
            <div className='flex items-center justify-center md:justify-between'>
                <h2 className='text-4xl text-brand-color font-bold '>Cuisines</h2>
                <Link href={"/"} className="border-b-2 border-blue-500 pb-1 text-xl md:block hidden">View All <span className='text-4xl font-bold'>&#x2192;</span></Link>
            </div>


            <Swiper
                slidesPerView={6}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper"
                breakpoints={{
                    // when window width is <= 320px
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    // when window width is <= 480px
                    400: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    // when window width is <= 768px
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    // when window width is <= 1024px
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                }}
            >
                {
                    uniqueCuisines.slice(0, 9).map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='relative  bg-white h-40 w-40 rounded-full my-16 flex items-center justify-center'>
                                <Image src={item[1]} width={200} height={200}
                                    className='absolute rounded-full opacity-80' />
                                < h2 className='absolute bg-[#f4f5fa] bg-opacity-90 rounded-lg opacity-90 text-black p-1 text-xl z-1'>{item[0]}</h2>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Link href={"/"} className=" pb-1 text-center text-xl block md:hidden">View All <span className='text-4xl font-bold'>&#x2192;</span></Link>
        </div >
    );
};
