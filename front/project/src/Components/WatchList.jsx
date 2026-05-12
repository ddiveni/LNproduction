import React, { useState, useEffect } from 'react';
import { allMovies } from '../Data'; 
import { Link } from 'react-router-dom';
import { HiTrash } from "react-icons/hi2";

const Watchlist = () => {
  // 1. Пытаемся загрузить список из памяти браузера, если его нет — берем разные жанры из Data
  const [titles, setTitles] = useState(() => {
    const saved = localStorage.getItem('ln_watchlist');
    if (saved) return JSON.parse(saved);
    
    // Если в памяти пусто, берем по чуть-чуть из каждого жанра для разнообразия
    return [
      ...allMovies.filter(m => m.genre === 'Мультфильмы').slice(0, 2),
      ...allMovies.filter(m => m.genre === 'Фантастика').slice(0, 2),
      ...allMovies.filter(m => m.genre === 'Триллеры').slice(0, 2),
      ...allMovies.filter(m => m.genre === 'Драмы').slice(0, 2)
    ];
  });

  // 2. Сохраняем список в память каждый раз, когда он меняется
  useEffect(() => {
    localStorage.setItem('ln_watchlist', JSON.stringify(titles));
  }, [titles]);

  const removeTitle = (id) => {
    setTitles(titles.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white px-5 md:px-60 py-12">
      <div className="flex justify-between items-end border-b border-gray-800 pb-6 mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Мои тайтлы</h1>
        <span className="text-gray-500 text-sm font-bold uppercase tracking-widest">
          {titles.length} всего
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {titles.map((movie) => (
          <div 
            key={movie.id} 
            className="group flex items-center gap-6 p-2 rounded-xl transition-all hover:bg-white/5"
          >
            {/* Постер без лишних эффектов */}
            <Link to={`/movie/${movie.id}`} className="shrink-0">
              <img 
                src={movie.image} 
                className="w-16 md:w-20 rounded-md object-cover" 
                alt={movie.title} 
              />
            </Link>

            {/* Только название */}
            <div className="flex-1">
              <Link to={`/movie/${movie.id}`}>
                <h2 className="text-xl font-medium group-hover:text-blue-500 transition-colors uppercase tracking-tight">
                  {movie.title}
                </h2>
              </Link>
            </div>

            {/* Кнопка удаления */}
            <button 
              onClick={() => removeTitle(movie.id)}
              className="p-3 text-gray-700 hover:text-red-500 transition-all"
            >
              <HiTrash size={20} />
            </button>
          </div>
        ))}
      </div>

      {/* Пустое состояние */}
      {titles.length === 0 && (
        <div className="text-center py-32">
          <p className="text-gray-600 text-lg">Список пуст</p>
          <Link to="/" className="text-blue-500 text-sm mt-4 inline-block hover:underline">
            Вернуться к релизам
          </Link>
        </div>
      )}
    </div>
  );
};

export default Watchlist;