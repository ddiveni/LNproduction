import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { allMovies } from '../Data';
import { IoBookmarkOutline, IoBookmark, IoStar, IoStarOutline, IoClose, IoPlaySharp } from "react-icons/io5";

function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [isWatchlist, setIsWatchlist] = useState(false);
    const [userRating, setUserRating] = useState(0);
    const [showTrailer, setShowTrailer] = useState(false);

    useEffect(() => {
        const selectedMovie = allMovies.find(m => m.id === parseInt(id));
        setMovie(selectedMovie);

        // Проверяем список "Буду смотреть"
        const saved = localStorage.getItem('ln_watchlist');
        if (saved) {
            const list = JSON.parse(saved);
            setIsWatchlist(list.some(item => item.id === parseInt(id)));
        }

        // Проверяем оценку
        const savedRating = localStorage.getItem(`rating_${id}`);
        if (savedRating) setUserRating(parseInt(savedRating));

        window.scrollTo(0, 0);
    }, [id]);

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

    const handleRate = (score) => {
        setUserRating(score);
        localStorage.setItem(`rating_${id}`, score);
        // Добавляем в список при оценке, если еще не там
        if (!isWatchlist) toggleWatchlist(); 
    };

    if (!movie) return <div className='text-white p-20 text-center font-bold'>Загрузка...</div>;

    return (
        <div className='relative min-h-screen bg-[#0b0b0b] text-white overflow-x-hidden'>
            
{/* --- ЗАДНИК (ГОРИЗОНТАЛЬНЫЙ) --- */}
<div className='absolute top-0 left-0 w-full h-[500px] z-0 overflow-hidden pointer-events-none'>
<img 
    src={movie.genre?.includes('Фантастика') || movie.genre?.includes('Триллеры') ? movie.image : movie.descImage} 
    className='w-full h-full object-cover opacity-40' 
    alt="" 
/>
    <div className='absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/60 to-transparent'></div>
</div>

            {/* --- КОНТЕНТ --- */}
            <div className='relative z-10 pt-32 px-6 md:px-16 lg:px-24'>
                <div className='flex flex-col md:flex-row gap-12'>
                    
{/* ЛЕВАЯ ЧАСТЬ: ПОСТЕР И ТРЕЙЛЕР */}
<div className='w-full md:w-[300px] lg:w-[330px] shrink-0'>
    <div className='relative'>
        {/* Здесь используем условие: для фантастики/триллеров берем descImage, для остальных — image */}
<img 
    src={movie.genre?.includes('Фантастика') || movie.genre?.includes('Триллеры') ? movie.descImage : movie.image} 
    className='w-full rounded-md shadow-2xl border border-white/10' 
    alt="Poster" 
/>
        
        {/* ФЛАЖОК НА ПОСТЕРЕ */}
        <button 
            onClick={toggleWatchlist}
            className='absolute top-3 right-3 bg-black/60 backdrop-blur-md p-2 rounded-md hover:scale-110 transition-all border border-white/10'
        >
            {isWatchlist ? 
                <IoBookmark size={24} className='text-blue-500'/> : 
                <IoBookmarkOutline size={24} className='text-white'/>
            }
        </button>
    </div>

                    <div onClick={() => setShowTrailer(true)}
                            className='mt-6 aspect-video bg-black rounded-md border border-white/5 overflow-hidden relative group cursor-pointer shadow-xl'>
                            <img className='absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform' alt="" />
                            <div className='absolute inset-0 flex items-center justify-center'>
                                <div className='w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors'>
                                    <IoPlaySharp size={24} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ПРАВАЯ ЧАСТЬ: ИНФО */}
                    <div className='flex-1'>
                        <div className='flex flex-col lg:flex-row justify-between items-start gap-8'>
                            
                            <div className='flex-1'>
                                <h1 className='text-4xl md:text-6xl font-black leading-tight text-white'>
                                    {movie.title} ({movie.year})
                                </h1>
                                <p className='text-gray-400 text-lg mb-8 uppercase tracking-widest'>
                                    {movie.title_original} {movie.age}
                                </p>

                                <p className='text-lg leading-relaxed text-white font-medium max-w-2xl'>
                                    {movie.description}
                                </p>
                            </div>

                            {/* БЛОК РЕЙТИНГА И ОЦЕНКИ */}
                            <div className='w-full lg:w-[280px] flex flex-col gap-8'>
                                
                                {/* Рейтинг LN */}
                                <div className='flex items-center gap-5 justify-end'>
                                    <div className='text-right'>
                                        <div className='text-5xl font-black text-green-500 leading-none'>{movie.rating}</div>
                                        <div className='text-[10px] text-gray-500 uppercase mt-1 font-bold'>Рейтинг LN</div>
                                    </div>
                                </div>

                                {/* ОЦЕНИТЬ ТАЙТЛ (Звезды) */}
                                <div className='bg-white/5 p-5 rounded-xl border border-white/5 shadow-xl'>
                                    <h4 className='text-[10px] uppercase font-black text-gray-400 mb-4 tracking-widest text-center'>Оценить фильм</h4>
                                    <div className='flex justify-between gap-1'>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
                                            <button 
                                                key={star} 
                                                onClick={() => handleRate(star)}
                                                className='hover:scale-125 transition-transform'
                                            >
                                                {star <= userRating ? 
                                                    <IoStar className='text-yellow-500' size={18}/> : 
                                                    <IoStarOutline className='text-gray-600' size={18}/>
                                                }
                                            </button>
                                        ))}
                                    </div>
                                    {userRating > 0 && (
                                        <p className='text-center text-[10px] text-blue-500 font-bold mt-3 uppercase tracking-tighter'>
                                            Ваша оценка: {userRating}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                                                               {/* БЛОК ИНФОРМАЦИИ В СТИЛЕ КИНОПОИСКА */}
<div className='mt-20 flex gap-20 max-w-[1200px] mx-auto'>
    
    {/* ТАБЛИЦА (ОГРАНИЧИВАЕМ ШИРИНУ) */}
    <div className='flex-1 max-w-[800px]'>
        <h2 className='text-2xl font-bold mb-8 text-white uppercase tracking-tighter'>О фильме</h2>
        
        <div className='flex flex-col gap-3'>
            {/* Год */}
            <div className='grid grid-cols-[180px_1fr] leading-relaxed'>
                <span className='text-gray-500 text-sm'>Год производства</span>
                <span className='text-white text-sm'>{movie.year}</span>
            </div>

            {/* Страна */}
            <div className='grid grid-cols-[180px_1fr] leading-relaxed'>
                <span className='text-gray-500 text-sm'>Страна</span>
                <span className='text-white text-sm '>{movie.country}</span>
            </div>

            {/* Жанр */}
            <div className='grid grid-cols-[180px_1fr] leading-relaxed'>
                <span className='text-gray-500 text-sm'>Жанр</span>
                <span className='text-blue-500 text-sm hover:text-blue-500'>{movie.genre}</span>
            </div>

            {/* Слоган */}
            {movie.slogan && (
                <div className='grid grid-cols-[180px_1fr] leading-relaxed'>
                    <span className='text-gray-500 text-sm'>Слоган</span>
                    <span className='text-gray-400 text-sm italic opacity-80'>{movie.slogan}</span>
                </div>
            )}

            {/* Режиссер */}
            <div className='grid grid-cols-[180px_1fr] leading-relaxed'>
                <span className='text-gray-500 text-sm'>Режиссер</span>
                <span className='text-white text-sm '>{movie.director}</span>
            </div>

            {/* Сценарий */}
            <div className='grid grid-cols-[180px_1fr] leading-relaxed'>
                <span className='text-gray-500 text-sm'>Сценарий</span>
                <span className='text-white text-sm'>{movie.scenario}</span>
            </div>

            {/* Продюсер */}
            <div className='grid grid-cols-[180px_1fr] leading-relaxed'>
                <span className='text-gray-500 text-sm'>Продюсер</span>
                <span className='text-white text-sm'>{movie.producer}</span>
            </div>

            {/* Бюджет */}
            <div className='grid grid-cols-[180px_1fr] leading-relaxed'>
                <span className='text-gray-500 text-sm'>Бюджет</span>
                <span className='text-white text-sm'>{movie.budget}</span>
            </div>

            {/* Сборы в мире */}
            <div className='grid grid-cols-[180px_1fr] leading-relaxed'>
                <span className='text-gray-500 text-sm'>Сборы в мире</span>
                <span className='text-white text-sm font-bold'>{movie.fees_world}</span>
            </div>

            {/* Возраст */}
            <div className='grid grid-cols-[180px_1fr] leading-relaxed mt-1'>
                <span className='text-gray-500 text-sm'>Возраст</span>
                <span className='text-white text-[10px] font-bold border border-gray-600 px-1 rounded uppercase w-fit h-fit leading-none py-0.5'>
                    {movie.age}
                </span>
            </div>

            {/* Время */}
            <div className='grid grid-cols-[180px_1fr] leading-relaxed'>
                <span className='text-gray-500 text-sm'>Время</span>
                <span className='text-white text-sm'>{movie.duration}</span>
            </div>
        </div>
    </div>

    {/* СПИСОК АКТЕРОВ (УЖИМАЕМ К ТАБЛИЦЕ) */}
    <div className='w-full lg:w-[250px] shrink-0'>
        <h2 className='text-md font-bold mb-5 text-white'>
            В главных ролях <span className='text-gray-600 inline-block translate-y-[-1px] ml-1'>›</span>
        </h2>
        <ul className='flex flex-col gap-1.5'>
            {movie.actors?.split(',').map((actor, index) => (
                <li key={index} className='text-white text-[13px]'>
                    {actor.trim()}
                </li>
            ))}
        </ul>
    </div>

                        </div>
                    </div>
                </div>
                {/* БЛОК "СМОТРИТЕ ТАКЖЕ" С ГОРИЗОНТАЛЬНОЙ ПРОКРУТКОЙ */}
<div className='mt-24 pb-20'>
    <h2 className='text-2xl font-bold mb-8 text-white flex items-center gap-2 group w-fit'>
        Смотрите также 
    </h2>

    {/* Контейнер с прокруткой */}
    <div className='flex gap-5 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent scroll-smooth'>
        {allMovies
            // Фильтруем: оставляем только тот же жанр, но убираем текущий фильм по id
            .filter(m => m.genre?.split(',')[0].trim() === movie.genre?.split(',')[0].trim() && m.id !== movie.id)
            .map((recMovie) => (
                <div 
                    key={recMovie.id} 
                    className='w-[150px] md:w-[180px] shrink-0 group cursor-pointer'
                    onClick={() => {
                        // При клике переходим на этот фильм и плавно скроллим страницу вверх
                        window.location.href = `/movie/${recMovie.id}`;
                    }}
                >
                    {/* Постер — берем строго из поля image, как ты и просила */}
                    <div className='relative aspect-[2/3] w-full rounded-md overflow-hidden border border-white/5 shadow-md group-hover:scale-102 transition-all group-hover:border-white/20'>
                        <img 
                            src={recMovie.image} 
                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' 
                            alt={recMovie.title} 
                        />
                        {/* Плашка рейтинга на постере (как на КП) */}
                        {recMovie.rating && (
                            <div className='absolute top-2 left-2 bg-green-600 text-white text-[11px] font-black px-1.5 py-0.5 rounded-sm shadow-md'>
                                {recMovie.rating}
                            </div>
                        )}
                    </div>

                    {/* Название и Год под постером */}
                    <h3 className='text-white text-sm font-bold mt-3 truncate group-hover:text-blue-500 transition-colors'>
                        {recMovie.title}
                    </h3>
                </div>
            ))}
            
        {/* Заглушка на случай, если похожих фильмов больше нет */}
        {allMovies.filter(m => m.genre?.split(',')[0].trim() === movie.genre?.split(',')[0].trim() && m.id !== movie.id).length === 0 && (
            <div className='text-gray-600 text-sm font-medium py-4'>
                Похожих тайтлов пока не добавлено
            </div>
        )}
    </div>
</div>
            </div>
            {/* --- ВСПЛЫВАЮЩЕЕ ОКНО ТРЕЙЛЕРА (МОДАЛКА) --- */}
            {showTrailer && (
                <div className='fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10'>
                    <div className='relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,1)]'>
                        {/* КНОПКА КРЕСТИК */}
                        <button 
                            onClick={() => setShowTrailer(false)}
                            className='absolute top-4 right-4 z-[110] bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all border border-white/10'
                        >
                            <IoClose size={30} className='text-white' />
                        </button>

                        <iframe
                            width="100%"
                            height="100%"
                            src={`${movie.trailer}?autoplay=1`} // Автостарт при открытии
                            frameBorder="0"
                            allow="clipboard-write; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    {/* Клик в любое место вне плеера тоже закроет его */}
                    <div className='absolute inset-0 -z-10' onClick={() => setShowTrailer(false)}></div>
                </div>
            )}
        </div>
    );
}

export default MovieDetail;