import { useEffect, useState } from "react"
import axios from "axios"
import Pagination from "../Pagination/Pagination"
import MovieList from "../MovieList/MovieList"
import "./MoviesContainer.css"

const MoviesContainer = ({searchMovies}) => {

    const [ data, setData ] = useState({})
    const [ page, setPage ] = useState(1)
    
    const fetchData = async (page) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/movies?page=${page}&sort=-episode_release_date`)
            setData(response.data.data)
        } catch (error) {
            console.log(error)
        }

    }

    const handlePage = (page) => {
        setPage(page)
    }

    useEffect(() => { 
        fetchData(page)
    }, [page])

    return (
        <main>
            <div className="moviesContainer">
                {searchMovies
                ? <MovieList movies={searchMovies}/>
                : <MovieList movies={data.docs} />
                    }
            </div>
            <Pagination handlePage={handlePage} page={data.page} hasNextPage={data.hasNextPage} hasPrevPage={data.hasPrevPage} prevPage={data.prevPage} nextPage={data.nextPage}/>
        </main>
    )
}
export default MoviesContainer