import React, { useRef, useEffect, useState } from 'react'
import { allMovies, GENRE_LIST } from '../Data'
import MovieCard from './MovieCard'
import HrMovieCard from './HrMovieCard'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

function MovieList({ genreId, index_genre }) {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef(null);

    // 0 и 3 — горизонтальные, 1 и 2 — вертикальные
    const isHorizontal = index_genre === 0 || index_genre === 3;

    useEffect(() => {
        // Фильтруем все фильмы, которые есть в Data.js для этого жанра
        const filtered = allMovies.filter(item => {
            return item.genre.toLowerCase() === GENRE_LIST[genreId - 1].name.toLowerCase();
        });
        
        setMovieList(filtered);
    }, [genreId]);

    const scrollRight = () => { elementRef.current.scrollLeft += 500; }
    const scrollLeft = () => { elementRef.current.scrollLeft -= 500; }

    return (
        <div className='relative'>
            <IoChevronBackOutline 
                onClick={scrollLeft} 
                className={`text-[45px] text-white p-2 z-10 cursor-pointer 
                hidden md:block absolute top-0
                ${isHorizontal ? 'mt-[60px]' : 'mt-[150px]'}`} 
            />
            
            <div ref={elementRef} className='flex overflow-x-auto gap-8 
            scrollbar-hide scroll-smooth pt-5 px-3 pb-5'>
                {movieList.map((item, index) => (
                    <React.Fragment key={index}>
                       {isHorizontal ? 
                        <HrMovieCard movie={item} /> : 
                        // Для вертикальных рядов подставляем descImage (высокий постер)
                        <MovieCard movie={{...item, image: item.descImage || item.image}} /> 
                       }
                    </React.Fragment>
                ))}
            </div>

            <IoChevronForwardOutline 
                onClick={scrollRight} 
                className={`text-[45px] text-white p-2 z-10 cursor-pointer 
                hidden md:block absolute right-0 top-0
                ${isHorizontal ? 'mt-[60px]' : 'mt-[150px]'}`} 
            />
        </div>
    )
}

export default MovieList