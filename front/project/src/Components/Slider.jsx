import React from 'react';
import { sliderPhotos } from '../Data'
import { useEffect, useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

function Slider() {
    const elementRef = useRef();

    const sliderRight = (element) => {
        
        element.scrollLeft += window.innerWidth - 110;
    };

    const sliderLeft = (element) => {
        element.scrollLeft -= window.innerWidth - 110;
    };

return (
    <div className='relative'>
        <HiChevronLeft 
            className="hidden md:block text-white text-[40px] absolute
            mx-8 mt-[135px] cursor-pointer left-0 z-10" 
            onClick={() => sliderLeft(elementRef.current)}
        />
        <HiChevronRight 
            className='hidden md:block text-white text-[40px] absolute
            mx-8 mt-[135px] cursor-pointer right-0 z-10' 
            onClick={() => sliderRight(elementRef.current)}
        />

        {/* 
           ВАЖНО: Добавляем scroll-px-16. 
           Это заставит snap-start «магнититься» с учетом твоего отступа px-16.
        */}
        <div 
            className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth snap-x snap-mandatory scroll-px-16'
            ref={elementRef}
        >
            {sliderPhotos.map((item) => (
                <img 
                    key={item.id}
                    src={item.image} 

                    className={`min-w-full md:h-[310px] object-cover
                    mr-5 rounded-md hover:border-[4px]
                    border-gray-400 transition-all duration-100 ease-in
                    cursor-pointer shadow-lg shadow-black flex-none snap-start ${item.position ? item.position : 'object-center'}`}
                    alt="movie"
                />
            ))}
        </div>
    </div>
);
}

export default Slider;