import React from 'react'

function HrMovieCard({ movie }) {
  return (
    <section className='flex-none transition-all duration-300 ease-in-out cursor-pointer hover:scale-110 pb-2'>
        <img 
            src={movie.descImage || movie.image} 
            alt={movie.title}
            className='w-[110px] md:w-[260px] h-[70px] md:h-[140px] 
                       rounded-lg object-cover border-[3px] border-transparent 
                       hover:border-gray-400 shadow-xl shadow-black' 
        />
        <h2 className='w-[110px] md:w-[260px] text-white mt-2 
                       text-[12px] md:text-[15px] font-semibold text-center truncate'>
            {movie.title}
        </h2>
    </section>
  )
}

export default HrMovieCard