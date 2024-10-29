import { useState, useEffect } from "react"
import SearchBar from "../SearchBar/SearchBar"
import NavBar from "../NavBar/NavBar"
import moviesdb from "../../assets/movies_HT.json"

const Home = () => {

    const [movies, setMovies] = useState(moviesdb)
    const [query, setQuery] = useState("")

    useEffect(() => {

        const moviesFilter = moviesdb.filter(movie =>
            movie.film.toLowerCase().includes(query)
        )

        setMovies(moviesFilter)
    }, [query])

    const handleOnChange = (e) => {
        const userInput = e.target.value
        setQuery(userInput.toLowerCase())
    }

    return (
        <>
            <NavBar />
            <SearchBar handleOnChange={handleOnChange} />
            {movies?.length > 0
                ? movies.map(movie => (
                    <img key={movie.id} src={movie.poster_link} alt="" />
                ))
                : <p>No vimos esa pelicula</p>}
        </>
    )
}
export default Home