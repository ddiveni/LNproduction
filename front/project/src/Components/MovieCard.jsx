import React from 'react'

function MovieCard({ movie }) {

  if (!movie) return null;

  return (
    <section className='flex-none'>
        <img 
            src={movie.image} 
            alt={movie.title}
            className='w-[110px] md:w-[220px] h-[170px] md:h-[330px] 
            object-cover rounded-xl shadow-lg
            cursor-pointer
            hover:border-[4px] border-gray-400
            hover:scale-105 transition-all duration-200 ease-in-out'/>
        <h2 className='text-gray-200 mt-2 text-[14px] md:text-[16px] 
        font-medium w-[110px] md:w-[220px] text-center'>
            {movie.title}
        </h2>
    </section>
  )
}

export default MovieCard