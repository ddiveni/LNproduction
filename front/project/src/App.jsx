import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'
import ProductionHouse from './Components/ProductionHouse'
import GenreMovieList from './Components/GenreMovieList'
import Footer from './Components/Footer'
import MovieDetail from './Components/MovieDetail'
import Watchlist from './Components/WatchList'

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-[#0b0b0b] text-white'>
        <Header />
        
        <Routes>
          {/* Главная страница */}
          <Route path="/" element={
            <>
              <Slider />
              <ProductionHouse />
              <GenreMovieList />
            </>
          } />

          {/* Универсальная страница для всех 23+ фильмов */}
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App