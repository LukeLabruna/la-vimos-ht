import { Link } from "react-router-dom"
import "./MoviesContainer.css"

const MoviesContainer = ({ movies, query }) => {
    return (
        <main>
            <h1>{query}</h1>
            <div className="moviesContainer">
                {movies.length > 0
                    ? movies.map(movie => (
                        <Link key={movie.tmdb_id} to={`/movie/${movie.tmdb_id}`}>
                            <img  src={movie.poster_link} alt="" />
                        </Link>
                    ))
                    : <p>No vimos esa pelicula</p>}
            </div>
        </main>
    )
}
export default MoviesContainer