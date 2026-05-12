import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { allMovies } from '../Data'
import { HiBookmark, HiOutlineBookmark } from "react-icons/hi2"; // Импортируем иконки

const MovieDetail = () => {
  const { id } = useParams();
  const movie = allMovies.find(m => m.id === parseInt(id));

  // Состояние: добавлен ли фильм в список
  const [isAdded, setIsAdded] = useState(false);

  // Проверяем при загрузке, есть ли этот фильм в LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem('ln_watchlist');
    if (saved) {
      const watchlist = JSON.parse(saved);
      const exists = watchlist.some(item => item.id === movie?.id);
      setIsAdded(exists);
    }
  }, [movie]);

  // Функция добавления/удаления
  const toggleWatchlist = () => {
    const saved = localStorage.getItem('ln_watchlist') || '[]';
    let watchlist = JSON.parse(saved);

    if (isAdded) {
      // Удаляем
      watchlist = watchlist.filter(item => item.id !== movie.id);
      setIsAdded(false);
    } else {
      // Добавляем
      watchlist.push(movie);
      setIsAdded(true);
    }

    localStorage.setItem('ln_watchlist', JSON.stringify(watchlist));
  };

  if (!movie) return <div className='p-20 text-white text-center font-bold'>Тайтл не найден</div>;

  return (
    <div className='p-6 md:p-20 min-h-screen bg-[#0b0b0b] text-white'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
        
        {/* Постер */}
        <div className="relative group">
            <img src={movie.image} className='w-full rounded-3xl shadow-2xl border border-white/5 object-cover' alt={movie.title} />
            {/* Кнопка-флажок прямо на постере */}
            <button 
                onClick={toggleWatchlist}
                className={`absolute top-4 right-4 p-4 rounded-2xl backdrop-blur-md transition-all ${
                    isAdded ? 'bg-blue-600 text-white' : 'bg-black/40 text-white hover:bg-black/60'
                }`}
            >
                {isAdded ? <HiBookmark size={28} /> : <HiOutlineBookmark size={28} />}
            </button>
        </div>

        {/* Инфо */}
        <div className='col-span-2 flex flex-col gap-8'>
          <div className="space-y-2">
            <h1 className='text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none italic'>
                {movie.title}
            </h1>
            <div className='flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-500'>
                <span className="text-green-500 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
                    {movie.rating || '8.5'}
                </span>
                <span>{movie.country || 'США'}</span>
                <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                <span className="text-blue-500">{movie.genre}</span>
            </div>
          </div>

          <div className="max-w-2xl">
            <h3 className='text-white/30 font-bold uppercase text-xs tracking-[0.2em] mb-3'>Сюжетная линия</h3>
            <p className='text-lg md:text-xl text-gray-300 leading-relaxed font-medium'>
              {movie.description || "В мире постоянных перемен LN PRODUCTION представляет кинематографическое путешествие, которое переопределяет жанр. Испытайте магию визуального повествования."}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <button className='bg-white text-black px-12 py-4 rounded-2xl font-black hover:scale-105 active:scale-95 transition-all uppercase text-sm tracking-widest'>
                Смотреть
            </button>
            <button 
                onClick={toggleWatchlist}
                className={`px-8 py-4 rounded-2xl font-bold border transition-all uppercase text-sm tracking-widest flex items-center justify-center gap-3 ${
                    isAdded ? 'bg-blue-600/10 border-blue-600 text-blue-500' : 'border-gray-800 text-gray-400 hover:border-gray-600'
                }`}
            >
                {isAdded ? <HiBookmark /> : <HiOutlineBookmark />}
                {isAdded ? 'В списке' : 'Буду смотреть'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail