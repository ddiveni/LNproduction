import React, { useState, useEffect } from 'react';
import { allMovies } from '../Data'; 
import { Link } from 'react-router-dom';
import { HiTrash } from "react-icons/hi2";

const Watchlist = () => {
  const [titles, setTitles] = useState(() => {
    const saved = localStorage.getItem('ln_watchlist');
    if (saved) return JSON.parse(saved);
    
    // Собираем микс: сначала мультики, потом всё остальное
    return [
      ...allMovies.filter(m => m.genre === 'Мультфильмы').slice(0, 3), // Вот твои мультики!
      ...allMovies.filter(m => m.genre === 'Фантастика').slice(0, 2),
      ...allMovies.filter(m => m.genre === 'Триллеры').slice(0, 2),
      ...allMovies.filter(m => m.genre === 'Драмы').slice(0, 1)
    ];
  });

  useEffect(() => {
    localStorage.setItem('ln_watchlist', JSON.stringify(titles));
  }, [titles]);

  const removeTitle = (id) => {
    setTitles(titles.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white px-4 md:px-40 lg:px-60 py-12">
      <div className="border-b border-gray-800 pb-6 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Буду смотреть</h1>
        <p className="text-gray-500 text-sm mt-2">{titles.length} тайтлов в очереди</p>
      </div>

      <div className="flex flex-col">
        {titles.map((movie) => (
          <div 
            key={movie.id} 
            className="group flex items-start md:items-center gap-4 md:gap-6 py-5 border-b border-gray-900/30 hover:bg-white/[0.02] transition-all px-2 rounded-lg"
          >
            {/* Постер */}
            <Link to={`/movie/${movie.id}`} className="shrink-0">
              <img 
                src={movie.image} 
                className="w-20 md:w-24 rounded-md object-cover shadow-xl border border-gray-800" 
                alt={movie.title} 
              />
            </Link>

            {/* Контентная часть */}
            <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <Link to={`/movie/${movie.id}`}>
                  <h2 className="text-lg md:text-xl font-bold group-hover:text-blue-500 transition-colors uppercase">
                    {movie.title}
                  </h2>
                </Link>
                
                {/* Инфо-строка как на Кинопоиске */}
                <div className="flex flex-wrap items-center gap-2 mt-2 text-[13px] text-gray-400">
                  <span className="text-white font-semibold">2026</span>
                  <span className="text-gray-600">|</span>
                  <span>США 🇺🇸</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-blue-400">{movie.genre}</span>
                  <span className="hidden md:inline text-gray-600">•</span>
                  <span className="hidden md:inline">1 ч 45 мин</span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                {/* Оценка тайтла */}
                <div className="flex flex-col items-end">
                    <div className="font-black text-sm md:text-base px-2 py-0.5 rounded bg-green-500/20 text-green-500 border border-green-500/30">
                    8.2
                    </div>
                    <span className="text-[10px] text-gray-600 mt-1 uppercase font-bold tracking-tighter">Рейтинг LN</span>
                </div>

                {/* Удаление (показывается при наведении) */}
                <button 
                  onClick={() => removeTitle(movie.id)}
                  className="p-2 text-gray-700 hover:text-red-500 transition-all md:opacity-0 group-hover:opacity-100"
                >
                  <HiTrash size={22} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {titles.length === 0 && (
        <div className="text-center py-24">
          <p className="text-gray-600 text-xl font-light">Тайтлов больше нет...</p>
          <Link to="/" className="text-blue-500 underline mt-4 block text-sm">На главную</Link>
        </div>
      )}
    </div>
  );
};

export default Watchlist;