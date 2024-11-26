import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import MoviesContainer from "./components/MoviesContainer/MoviesContainer"
import MovieDetailContainer from "./components/MovieDetailContainer/MovieDetailContainer"
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import axios from "axios"
import './App.css'


function App() {

  const [searchMovies, setSearchMovies] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSearchMovie = async (query) => {
    setLoading(true)
    try {
      if (query.length >= 3) {
        const movies = await axios.get(`https://lahicimos-back.vercel.app/api/movies/search?query=${query}`)
        setSearchMovies(movies.data.data)
      } else {
        setSearchMovies(null)
      }
    } catch (error) {
      if (error.status === 404) {
        console.log(error.response.data.message)
        setSearchMovies("Esa no la hicimos")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Router>
        <NavBar handleChange={handleSearchMovie} search={searchMovies} setSearch={setSearchMovies} />
        <Routes>
          <Route path="/" element={<MoviesContainer searchMovies={searchMovies} searchLoading={loading} />} />
          <Route path="/:page" element={<MoviesContainer searchMovies={searchMovies} searchLoading={loading} />} />
          <Route path="/movie/:id" element={<MovieDetailContainer searchMovies={searchMovies} searchLoading={loading} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
