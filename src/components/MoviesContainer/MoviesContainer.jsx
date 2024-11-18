import { useEffect, useState } from "react"
import axios from "axios"
import Pagination from "../Pagination/Pagination"
import MovieList from "../MovieList/MovieList"
import Loading from "../Loading/Loading"
import "./MoviesContainer.css"

const MoviesContainer = ({ searchMovies }) => {

    const [data, setData] = useState({})
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const fetchData = async (page) => {

        setLoading(true)

        try {
            const response = await axios.get(`https://lahicimos-back.vercel.app/api/movies?page=${page}&sort=-episode_release_date`)
            setData(response.data.data)
        } catch (error) {
            console.log(error)
        } finally {
            setTimeout(() => setLoading(false), 500)
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
            { /* loading
                ? <Loading />
                : <>
                    <div className="moviesContainer">
                        {searchMovies
                            ? <MovieList movies={searchMovies} />
                            : <MovieList movies={data.docs} />
                        }
                    </div>
                    <Pagination handlePage={handlePage} page={data.page} hasNextPage={data.hasNextPage} hasPrevPage={data.hasPrevPage} prevPage={data.prevPage} nextPage={data.nextPage} />
                </>
                    */}
                    <Loading />
        </main>
    )
}
export default MoviesContainer