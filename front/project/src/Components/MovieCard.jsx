import React from 'react';
import { Link } from 'react-router-dom'; // 1. Импортируем Link

const MovieCard = ({ movie }) => {
  return (
    // 2. Оборачиваем всё в Link. Путь должен совпадать с тем, что в App.jsx
    <Link to={`/movie/${movie.id}`}> 
      <div className="relative hover:scale-110 transition-all duration-300 cursor-pointer">
        <img 
          src={movie.image} 
          alt={movie.title} 
          className="w-[110px] md:w-[200px] rounded-lg object-cover shadow-lg border-[3px] border-transparent hover:border-gray-400"
        />
        <h2 className="text-white mt-2 text-[12px] md:text-[14px] font-semibold text-center truncate w-[110px] md:w-[200px]">
          {movie.title}
        </h2>
      </div>
    </Link>
  );
};

export default MovieCard;