import { json, Link } from "react-router-dom"
import Pagination from "../Pagination/Pagination"
import "./MoviesContainer.css"
import { useEffect, useState } from "react"
import axios from "axios"

const MoviesContainer = () => {

    const [ data, setData ] = useState({})
    const [ page, setPage ] = useState(1)
    
    const fetchData = async (page) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/movies?page=${page}`)
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
            {/* <h1>{query}</h1> */}
            <div className="moviesContainer">
                {data.docs?.length > 0
                    ? data.docs.map(movie => (
                        <Link key={movie._id} to={`/movie/${movie._id}`}>
                            <img  src={movie.poster_link} alt="" />
                        </Link>
                    ))
                    : <p>No vimos esa pelicula</p>}
            </div>
            <Pagination handlePage={handlePage} page={data.page} hasNextPage={data.hasNextPage} hasPrevPage={data.hasPrevPage} prevPage={data.prevPage} nextPage={data.nextPage}/>
        </main>
    )
}
export default MoviesContainer