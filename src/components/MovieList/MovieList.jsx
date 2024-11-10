import { Link } from "react-router-dom"

const MovieList = ({movies}) => {
  return (
    <>
    {movies?.length > 0
        ? movies.map(movie => (
            <Link key={movie._id} to={`/movie/${movie._id}`}>
                <img  src={movie.poster_link} alt={movie.film} />
            </Link>
        ))
        : <p>No vimos esa pelicula</p>}
    </>
  )
}
export default MovieList