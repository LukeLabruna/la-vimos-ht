import { Link } from "react-router-dom"
import "./MoviesContainer.css"

const MoviesContainer = ({ movies, query }) => {
    return (
        <div className="moviesContainer">
            <h2>{query}</h2>
            {movies.length > 0
                ? movies.map(movie => (
                    <Link to={`/movie/${movie.id}`}>
                        <img key={movie.id} src={movie.poster_link} alt="" />
                    </Link>
                ))
                : <p>No vimos esa pelicula</p>}
        </div>
    )
}
export default MoviesContainer