import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { allMovies } from '../Data';
import { IoPlaySharp, IoBookmarkOutline, IoBookmark, IoStar, IoTimeOutline } from "react-icons/io5";

function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [isWatchlist, setIsWatchlist] = useState(false);

    useEffect(() => {
        const selectedMovie = allMovies.find(m => m.id === parseInt(id));
        setMovie(selectedMovie);

        // СРАЗУ проверяем, есть ли этот фильм в списке сохраненных в памяти
        const saved = localStorage.getItem('ln_watchlist');
        if (saved) {
            const list = JSON.parse(saved);
            setIsWatchlist(list.some(item => item.id === parseInt(id)));
        }
        
        window.scrollTo(0, 0); // Прокрутка вверх при переходе
    }, [id]);

    // ФУНКЦИЯ ДОБАВЛЕНИЯ/УДАЛЕНИЯ (Рабочая на 100%)
    const toggleWatchlist = () => {
        const saved = localStorage.getItem('ln_watchlist') || '[]';
        let list = JSON.parse(saved);

        if (isWatchlist) {
            list = list.filter(item => item.id !== movie.id);
        } else {
            list.push(movie);
        }

        localStorage.setItem('ln_watchlist', JSON.stringify(list));
        setIsWatchlist(!isWatchlist);
    };

    if (!movie) return <div className='text-white p-20 text-center font-bold'>Загрузка данных...</div>;

    return (
        <div className='relative min-h-screen bg-[#0b0b0b] text-white overflow-x-hidden'>
            
            {/* 1. ФОНОВЫЙ ЗАДНИК (Задний план) */}
            <div className='absolute top-0 left-0 w-full h-[100vh] -z-10'>
                <img 
                    src={movie.image} 
                    className='w-full h-full object-cover opacity-20 fixed blur-[4px] scale-110' 
                    alt="background" 
                />
                <div className='absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/60 to-transparent'></div>
            </div>

            <div className='relative z-10 pt-28 px-6 md:px-20 pb-20'>
                <div className='flex flex-col lg:flex-row gap-16'>
                    
                    {/* ЛЕВАЯ КОЛОНКА: ГОРИЗОНТАЛЬНЫЙ ПОСТЕР И ПЛЕЕР */}
                    <div className='w-full lg:w-[600px] shrink-0'>
                        {/* Постер на переднем плане */}
                        <div className='relative shadow-[0_0_50px_rgba(0,0,0,0.8)] group'>
                            <img 
                                src={movie.descImage} 
                                className='w-full rounded-3xl border border-white/10 object-cover' 
                                alt="poster"
                            />
                            {/* РАБОЧИЙ ФЛАЖОК */}
                            <button 
                                onClick={toggleWatchlist}
                                className='absolute top-6 right-6 bg-black/60 backdrop-blur-md p-4 rounded-2xl hover:scale-110 active:scale-95 transition-all border border-white/20'
                            >
                                {isWatchlist ? 
                                    <IoBookmark className='text-blue-500 text-3xl' /> : 
                                    <IoBookmarkOutline className='text-white text-3xl' />
                                }
                            </button>
                        </div>

                        {/* ТРЕЙЛЕР (Вместо кнопки) */}
                        <div className='mt-10'>
                            <h3 className='text-xs uppercase tracking-[0.3em] text-gray-500 font-black mb-6 flex items-center gap-3'>
                                <span className='w-8 h-[2px] bg-blue-600'></span> Официальный трейлер
                            </h3>
                            <div className='aspect-video w-full rounded-3xl bg-white/5 border border-white/5 overflow-hidden flex items-center justify-center relative group cursor-pointer'>
                                <div className='absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all'></div>
                                <IoPlaySharp className='text-7xl text-white relative z-10 group-hover:scale-125 transition-all' />
                                <p className='absolute bottom-6 text-xs text-gray-400 font-bold tracking-widest'>НАЖМИТЕ ДЛЯ ПРОСМОТРА</p>
                            </div>
                        </div>
                    </div>

                    {/* ПРАВАЯ КОЛОНКА: ИНФОРМАЦИЯ */}
                    <div className='flex-1'>
                        <div className='mb-10'>
                            <h1 className='text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]'>
                                {movie.title}
                            </h1>
                            <p className='text-xl text-gray-500 font-bold mt-4 italic opacity-80'>
                                {movie.title_original}
                            </p>
                        </div>

                        {/* Награды (Реальные из твоего Data.js) */}
                        {movie.awards && (
                            <div className='mb-10 flex items-center gap-4 bg-blue-600/10 border border-blue-600/20 p-5 rounded-2xl'>
                                <div className='bg-blue-600 p-3 rounded-xl'>
                                    <IoStar className='text-white text-xl' />
                                </div>
                                <div>
                                    <h4 className='text-[10px] uppercase font-black text-blue-500 tracking-widest'>Награды и премии</h4>
                                    <p className='text-gray-200 text-sm font-medium'>{movie.awards}</p>
                                </div>
                            </div>
                        )}

                        {/* ХАРАКТЕРИСТИКИ */}
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>
                            <div className='bg-white/5 p-4 rounded-2xl border border-white/5'>
                                <span className='block text-[10px] text-gray-500 uppercase font-black mb-1'>Рейтинг LN</span>
                                <span className='text-2xl font-black text-green-500'>{movie.rating}</span>
                            </div>
                            <div className='bg-white/5 p-4 rounded-2xl border border-white/5'>
                                <span className='block text-[10px] text-gray-500 uppercase font-black mb-1'>Год</span>
                                <span className='text-xl font-bold'>{movie.year}</span>
                            </div>
                            <div className='bg-white/5 p-4 rounded-2xl border border-white/5'>
                                <span className='block text-[10px] text-gray-500 uppercase font-black mb-1'>Длительность</span>
                                <span className='text-lg font-bold flex items-center gap-2'><IoTimeOutline /> {movie.duration}</span>
                            </div>
                            <div className='bg-white/5 p-4 rounded-2xl border border-white/5'>
                                <span className='block text-[10px] text-gray-500 uppercase font-black mb-1'>Возраст</span>
                                <span className='text-xl font-bold'>{movie.age}</span>
                            </div>
                        </div>

                        {/* ОПИСАНИЕ */}
                        <div className='mb-12'>
                            <h3 className='text-xs uppercase tracking-[0.3em] text-gray-500 font-black mb-6'>Сюжетная линия</h3>
                            <p className='text-gray-300 text-xl leading-relaxed italic font-light border-l-4 border-blue-600 pl-8'>
                                «{movie.description}»
                            </p>
                        </div>

                        {/* СОСТАВ */}
                        <div className='space-y-8'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                                <div>
                                    <h3 className='text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black mb-3'>Режиссер</h3>
                                    <p className='text-white text-lg font-bold'>{movie.director}</p>
                                </div>
                                <div>
                                    <h3 className='text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black mb-3'>Страна</h3>
                                    <p className='text-white text-lg font-bold'>{movie.country}</p>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black mb-3'>В главных ролях</h3>
                                <p className='text-gray-300 leading-relaxed'>{movie.actors}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;