import React, { useState } from 'react';
import { allMovies } from '../Data'; 
import { Link } from 'react-router-dom';
import { HiTrash, HiPlay } from "react-icons/hi2";

const Watchlist = () => {
  // Состояние для списка тайтлов (берем больше фильмов для начала)
  const [titles, setTitles] = useState(allMovies.slice(0, 6)); 

  // Функция удаления тайтла из списка
  const removeTitle = (id) => {
    setTitles(titles.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white px-5 md:px-40 py-12">
      {/* Шапка списка */}
      <div className="flex justify-between items-end border-b border-gray-800 pb-6 mb-10">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Мои тайтлы</h1>
          <p className="text-gray-500 mt-2 font-medium">Список запланированных к просмотру релизав</p>
        </div>
        <span className="bg-blue-600/20 text-blue-500 px-4 py-1 rounded-full text-sm font-bold">
          {titles.length} ТАЙТЛОВ
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {titles.map((movie) => (
          <div 
            key={movie.id} 
            className="group relative flex items-center gap-6 p-4 rounded-2xl transition-all hover:bg-white/5 border border-transparent hover:border-white/10 backdrop-blur-sm"
          >
            {/* Постер */}
            <div className="relative overflow-hidden rounded-lg w-20 md:w-32 aspect-[2/3]">
              <img 
                src={movie.image} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                alt={movie.title} 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <Link to={`/movie/${movie.id}`}>
                    <HiPlay className="text-white text-4xl" />
                 </Link>
              </div>
            </div>

            {/* Инфо о тайтле */}
            <div className="flex-1">
              <Link to={`/movie/${movie.id}`}>
                <h2 className="text-xl md:text-2xl font-bold group-hover:text-blue-500 transition-colors">
                  {movie.title}
                </h2>
              </Link>
              <div className="flex items-center gap-3 text-sm text-gray-400 mt-2">
                <span className="text-blue-500 font-semibold">{movie.genre}</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <span>2026</span>
                <span className="hidden md:inline-block px-2 py-0.5 border border-gray-700 rounded text-[10px]">HD</span>
              </div>
              <p className="hidden md:block text-gray-500 text-sm mt-3 line-clamp-2 max-w-2xl">
                Эксклюзивный релиз от LN PRODUCTION. Погрузитесь в захватывающую историю этого тайтла прямо сейчас.
              </p>
            </div>

            {/* Действия */}
            <div className="flex items-center gap-2">
              <Link 
                to={`/movie/${movie.id}`}
                className="hidden lg:flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors"
              >
                Смотреть
              </Link>
              <button 
                onClick={() => removeTitle(movie.id)}
                className="p-3 text-gray-600 hover:text-red-500 hover:bg-red-500/10 rounded-full transition-all"
                title="Удалить из списка"
              >
                <HiTrash size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Если список пуст */}
      {titles.length === 0 && (
        <div className="text-center py-32 animate-pulse">
          <p className="text-2xl text-gray-600 font-light">Ваш список тайтлов пуст...</p>
          <Link to="/" className="inline-block mt-6 px-8 py-3 bg-blue-600 rounded-full font-bold hover:bg-blue-700 transition-all">
            Вернуться в каталог
          </Link>
        </div>
      )}
    </div>
  );
};

export default Watchlist;