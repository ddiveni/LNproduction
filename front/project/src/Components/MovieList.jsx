import React, { useRef, useEffect, useState } from 'react'
import { allMovies, GENRE_LIST } from '../Data'
import MovieCard from './MovieCard'
import HrMovieCard from './HrMovieCard'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom'; // 1. Обязательно импортируем Link

function MovieList({ genreId, index_genre }) {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef(null);

    const isHorizontal = index_genre === 0 || index_genre === 3;

    useEffect(() => {
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
                    // 2. Оборачиваем всё содержимое в Link и передаем id фильма
                    <Link to={`/movie/${item.id}`} key={index} className="hover:scale-110 transition-all duration-300">
                        {isHorizontal ? 
                         <HrMovieCard movie={item} /> : 
                         <MovieCard movie={{...item, image: item.descImage || item.image}} /> 
                        }
                    </Link>
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