import { Link } from "react-router-dom"
import "./Pagination.css"

const Pagination = ({ page, hasPrevPage, hasNextPage, prevPage, nextPage }) => {
    return (
        <div className="pagination">
            {hasPrevPage ?
                <Link to={`/${prevPage}`} className="prevNext"> Anterior </Link>
                :
                <Link  className="disabled"> Anterior </Link >
            }

            <div className="numberPage">
                {hasPrevPage
                    ? <Link to={`/${prevPage}`} ><button>{prevPage}</button></Link>
                    : <Link ><button disabled> ... </button></Link >
                }
                <Link><button className="currentPage">{page}</button></Link>
                {hasNextPage
                    ? <Link to={`/${nextPage}`} ><button>{nextPage}</button></Link>
                    : <Link ><button disabled> ... </button></Link >
                }
            </div>

            {hasNextPage 
            ?<Link to={`/${nextPage}`} className="prevNext"> Siguiente </Link>
            :<Link  className="disabled"> Siguiente </Link >
            }
        </div>
    )
}
export default Pagination