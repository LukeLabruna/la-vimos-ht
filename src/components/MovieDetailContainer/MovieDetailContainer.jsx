import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MovieDetail from "../MovieDetail/MovieDetail"
import MovieList from "../MovieList/MovieList"
import axios from "axios"


const MovieDetailContainer = ({ searchMovies }) => {
  const { id } = useParams()
  const [movie, setMovie] = useState()

  const movieFetch = async (id) => {
    try {
      const movie = await axios.get(`https://lahicimos-back.onrender.com/api/movies/id/${id}`)
      setMovie(movie.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    movieFetch(id)
  }, [id])

  return (
    <main>
      {searchMovies
        ? <div className="moviesContainer">
          <MovieList movies={searchMovies} />
        </div>
        : <MovieDetail {...movie} />
      }
    </main>
  )
}
export default MovieDetailContainer