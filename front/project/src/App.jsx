import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'
import ProductionHouse from './Components/ProductionHouse'
import GenreMovieList from './Components/GenreMovieList'
import Footer from './Components/Footer'
import MovieDetail from './Components/MovieDetail' // Убедись, что создал этот файл

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-[#0b0b0b] text-white'>
        {/* Хедер всегда сверху */}
        <Header />
        
        <Routes>
          {/* ГЛАВНАЯ СТРАНИЦА: отображает все секции сразу */}
          <Route path="/" element={
            <>
              <Slider />
              <ProductionHouse />
              <GenreMovieList />
            </>
          } />

          {/* СТРАНИЦА ПРОСМОТРА: динамический путь для любого фильма */}
          {/* :id — это переменная, которая будет принимать значение 1, 2, 3 и т.д. */}
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>

        {/* Футер всегда снизу */}
        <Footer />
      </div>
    </Router>
  )
}

export default App