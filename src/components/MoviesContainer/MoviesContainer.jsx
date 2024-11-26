import { useEffect, useState } from "react"
import axios from "axios"
import Pagination from "../Pagination/Pagination"
import MovieList from "../MovieList/MovieList"
import Loading from "../Loading/Loading"
import "./MoviesContainer.css"
import { useParams } from "react-router-dom"

const MoviesContainer = ({ searchMovies, searchLoading }) => {

    const { page } = useParams()

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    const fetchData = async (page) => {

        setLoading(true)

        try {
            const response = await axios.get(`https://lahicimos-back.vercel.app/api/movies?page=${page ? page : 1}&sort=-episode_release_date`)
            setData(response.data.data)
        } catch (error) {
            console.log(error)
        } finally {
            setTimeout(() => setLoading(false), 500)
        }

    }

    useEffect(() => {
        fetchData(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [page])

    return (
        <main>
            { loading
                ? <Loading />
                : <>
                    <div className="moviesContainer">
                        {searchMovies
                            ? searchLoading 
                                ? <Loading/> 
                                : typeof searchMovies === "string" 
                                    ? <h2> {searchMovies} </h2> 
                                    : <MovieList movies={searchMovies} />
                            : <MovieList movies={data.docs} />
                        }
                    </div>
                   {!searchMovies && <Pagination page={data.page} hasNextPage={data.hasNextPage} hasPrevPage={data.hasPrevPage} prevPage={data.prevPage} nextPage={data.nextPage} />}
                </>
                    }
        </main>
    )
}
export default MoviesContainer