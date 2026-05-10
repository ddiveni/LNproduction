import React from 'react';
import { useParams } from 'react-router-dom';
import { allMovies } from '../Data'; // Твой файл с данными

const MovieDetail = () => {
  const { id } = useParams(); // Достаем ID из ссылки
  
  // Ищем фильм в твоем списке по ID
  const movie = allMovies.find((m) => m.id === parseInt(id));

  if (!movie) return <div className="text-white p-20">Movie not found!</div>;

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white p-10">
      <h1 className="text-4xl font-bold mb-6">{movie.title}</h1>
      
      {/* Плеер, который теперь один для всех */}
      <div className="aspect-video w-full bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
        <iframe 
          width="100%" height="100%" 
          src={movie.videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ"} 
          title="Movie Player" frameBorder="0" allowFullScreen
        ></iframe>
      </div>

      <div className="mt-10 flex gap-8">
        <img src={movie.image} alt={movie.title} className="w-48 rounded-lg shadow-lg" />
        <div>
          <p className="text-blue-500 font-bold underline mb-4">{movie.genre}</p>
          <p className="text-gray-400 max-w-2xl">{movie.description || "Official LN PRODUCTION release."}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;