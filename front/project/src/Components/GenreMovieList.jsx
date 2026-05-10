import React from 'react'
import { GENRE_LIST } from '../Data'
import MovieList from './MovieList'

function GenreMovieList() {
  return (
    <div>
{GENRE_LIST.map((item, index) => index <= 4 && (
    <div key={index} className='p-8 px-8 md:px-16'>
        <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
        {/* ПРОВЕРЬ ТУТ: */}
        <MovieList genreId={item.id} index_genre={index} /> 
    </div>
))}
    </div>
  )
}

export default GenreMovieList