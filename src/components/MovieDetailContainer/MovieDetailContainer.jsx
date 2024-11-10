import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MovieDetail from "../MovieDetail/MovieDetail"
import axios from "axios"


const MovieDetailContainer = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState()

    const movieFetch = async (id) => {
      try {
        const movie = await axios.get(`http://localhost:8080/api/movies/id/${id}`)
        setMovie(movie.data.data)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
        movieFetch(id)
        
    }, [id])

    console.log(movie)
  return (
    <main>
        <MovieDetail { ...movie } />
    </main>
  )
}
export default MovieDetailContainer