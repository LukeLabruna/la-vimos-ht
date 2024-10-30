import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MovieDetail from "../MovieDetail/MovieDetail"


const MovieDetailContainer = ({movies}) => {
    const { id } = useParams()
    const [movie, setMovie] = useState()

    useEffect(() => {
        const movie = movies.find(m => m.id == id)
        setMovie(movie)
    }, [movies, id])

  return (
    <main>
        <MovieDetail { ...movie } />
    </main>
  )
}
export default MovieDetailContainer