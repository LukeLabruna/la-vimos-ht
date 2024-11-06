import { useState, useEffect } from "react"
import NavBar from "./components/NavBar/NavBar"
import MoviesContainer from "./components/MoviesContainer/MoviesContainer"
import moviesdb from "././assets/updatedMovies.json"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css'
import MovieDetailContainer from "./components/MovieDetailContainer/MovieDetailContainer"

function App() {
  
  return (
    <>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<MoviesContainer />} />
          <Route path="/movie/:id" element={<MovieDetailContainer />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
