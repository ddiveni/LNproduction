import React from 'react';
import { allMovies } from '../Data'; // Твои данные
import { Link } from 'react-router-dom';
import { HiTrash } from "react-icons/hi2";

const Watchlist = () => {
  const myMovies = allMovies.slice(0, 3); 

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white px-5 md:px-20 py-10">
      <div className="flex justify-between items-end border-b border-gray-800 pb-5 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Буду смотреть</h1>
        <span className="text-gray-500 font-medium">{myMovies.length} фильма</span>
      </div>

      <div className="flex flex-col gap-1">
        {myMovies.map((movie, index) => (
          <div 
            key={movie.id} 
            className="group flex items-center gap-4 md:gap-8 p-4 rounded-xl transition-all hover:bg-gray-900/50 border-b border-gray-900"
          >
            {/* Номер как на Кинопоиске */}
            <span className="text-gray-600 font-mono text-lg hidden md:block w-5">
              {index + 1}
            </span>

            {/* Постер */}
            <Link to={`/movie/${movie.id}`}>
              <img 
                src={movie.image} 
                className="w-16 md:w-24 rounded-md object-cover shadow-lg group-hover:scale-105 transition-transform" 
                alt={movie.title} 
              />
            </Link>

            {/* Инфо */}
            <div className="flex-1">
              <Link to={`/movie/${movie.id}`}>
                <h2 className="text-lg md:text-xl font-bold group-hover:text-blue-500 transition-colors">
                  {movie.title}
                </h2>
              </Link>
              <div className="flex gap-3 text-sm text-gray-500 mt-1">
                <span>{movie.genre}</span>
                <span>•</span>
                <span>2026</span>
              </div>
            </div>

            {/* Кнопка удаления */}
            <button className="p-3 text-gray-600 hover:text-red-500 transition-colors">
              <HiTrash size={22} />
            </button>
          </div>
        ))}
      </div>

      {myMovies.length === 0 && (
        <div className="text-center py-20 text-gray-600">
          <p className="text-xl">Ваш список пока пуст</p>
          <Link to="/" className="text-blue-500 underline mt-4 block">Найти что-нибудь интересное</Link>
        </div>
      )}
    </div>
  );
};

export default Watchlist;