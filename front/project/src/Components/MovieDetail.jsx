import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { allMovies } from '../Data' // Убедись, что путь к Data.js верный

const MovieDetail = () => {
  const { id } = useParams()
  
  // Ищем нужный фильм в массиве
  const movie = allMovies.find((item) => item.id === parseInt(id))

  // Скроллим страницу вверх при переходе
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!movie) {
    return (
      <div className="h-screen flex items-center justify-center text-white text-2xl font-bold uppercase tracking-widest">
        Movie not found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white px-8 md:px-16 py-10">
      {/* Заголовок фильма */}
      <h1 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tighter">
        {movie.title}
      </h1>

      {/* Плеер (заглушка с YouTube или видео-заглушка) */}
      <div className="w-full aspect-video bg-gray-900 rounded-3xl border border-gray-800 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] mb-12">
        <iframe 
          width="100%" 
          height="100%" 
          src={movie.videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ"} 
          title={movie.title}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      {/* Инфо о фильме */}
      <div className="grid md:grid-cols-3 gap-12">
        <div className="col-span-1">
          <img 
            src={movie.image} 
            alt={movie.title} 
            className="w-full rounded-2xl shadow-2xl border border-gray-800"
          />
        </div>
        <div className="col-span-2 flex flex-col gap-6">
          <div>
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Genre</span>
            <p className="text-2xl text-gray-200">{movie.genre}</p>
          </div>
          <div>
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Storyline</span>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
              {movie.description || "In a world of constant change, LN PRODUCTION presents a cinematic journey that redefines the genre. Experience the magic of visual storytelling."}
            </p>
          </div>
          <div className="pt-6 border-t border-gray-900">
            <p className="text-gray-600 text-xs uppercase tracking-widest">Released by LN PRODUCTION © 2026</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail