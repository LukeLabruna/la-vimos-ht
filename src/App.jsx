import { useState, useEffect } from "react"
import NavBar from "./components/NavBar/NavBar"
import MoviesContainer from "./components/MoviesContainer/MoviesContainer"
import moviesdb from "././assets/updatedMovies.json"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MovieDetailContainer from "./components/MovieDetailContainer/MovieDetailContainer"
import './App.css'
import axios from "axios"


function App() {

  const [searchMovies, setSearchMovies] = useState(null)
  
  const handleSearchMovie = async (query) => {
    try {
      if (query.length >= 3) {
        const movies = await axios.get(`http://localhost:8080/api/movies/search?query=${query}`)
        setSearchMovies(movies.data.data)
      } else {
        setSearchMovies(null)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Router>
      <NavBar handleChange={handleSearchMovie}/>
        <Routes>
          <Route path="/" element={<MoviesContainer searchMovies={searchMovies} />} />
          <Route path="/movie/:id" element={<MovieDetailContainer />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
