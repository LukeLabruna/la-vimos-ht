import { useState, useEffect } from "react"
import NavBar from "./components/NavBar/NavBar"
import MoviesContainer from "./components/MoviesContainer/MoviesContainer"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import MovieDetailContainer from "./components/MovieDetailContainer/MovieDetailContainer"
import './App.css'
import axios from "axios"


function App() {

  const [searchMovies, setSearchMovies] = useState(null)
  
  const location = useLocation()

  const handleSearchMovie = async (query) => {
    try {
      if (query.length >= 3) {
        const movies = await axios.get(`https://lahicimos-back.onrender.com/api/movies/search?query=${query}`)
        setSearchMovies(movies.data.data)
      } else {
        setSearchMovies(null)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    setSearchMovies(null)
  }, [location.pathname])

  return (
    <>
      <Router>
      <NavBar handleChange={handleSearchMovie}/>
        <Routes>
          <Route path="/" element={<MoviesContainer searchMovies={searchMovies} />} />
          <Route path="/movie/:id" element={<MovieDetailContainer searchMovies={searchMovies} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
