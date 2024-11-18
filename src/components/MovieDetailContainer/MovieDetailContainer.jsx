import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MovieDetail from "../MovieDetail/MovieDetail"
import MovieList from "../MovieList/MovieList"
import axios from "axios"
import Loading from "../Loading/Loading"


const MovieDetailContainer = ({ searchMovies, searchLoading }) => {
  const { id } = useParams()
  const [movie, setMovie] = useState()
  const [loading, setLoading] = useState(false)

  const movieFetch = async (id) => {
    setLoading(true)
    try {
      const movie = await axios.get(`https://lahicimos-back.vercel.app/api/movies/id/${id}`)
      setMovie(movie.data.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    movieFetch(id)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id])

  return (
    <main>
      {searchMovies
        ? searchLoading 
            ? <Loading /> 
            : <div className="moviesContainer">
                <MovieList movies={searchMovies} />
              </div>
        : loading ? <Loading /> : <MovieDetail {...movie} />
      }
    </main>
  )
}
export default MovieDetailContainer