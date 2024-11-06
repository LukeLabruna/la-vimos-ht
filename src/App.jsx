import { useState, useEffect } from "react"
import NavBar from "./components/NavBar/NavBar"
import MoviesContainer from "./components/MoviesContainer/MoviesContainer"
import moviesdb from "././assets/updatedMovies.json"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css'
import MovieDetailContainer from "./components/MovieDetailContainer/MovieDetailContainer"

function App() {
  const [movies, setMovies] = useState(moviesdb)
    const [query, setQuery] = useState("")

    useEffect(() => {

      const moviesFilter = moviesdb.filter(movie => 
        (movie.film && movie.film.toLowerCase().includes(query)) ||
        (movie.original_film_name && movie.original_film_name.toLowerCase().includes(query))
    )

        setMovies(moviesFilter)
    }, [query])

    const handleOnChange = (e) => {
        const userInput = e.target.value
        setQuery(userInput.toLowerCase())
    }

  return (
    <>
      <Router>
      <NavBar handleChange={handleOnChange}/>
        <Routes>
          <Route path="/" element={<MoviesContainer query={query} movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetailContainer />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
