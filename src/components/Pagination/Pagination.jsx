import { Link } from "react-router-dom"

const Pagination = ({ page, hasPrevPage, hasNextPage, prevPage, nextPage }) => {
    return (
        <div class="pagination">
            {hasPrevPage ?
                <Link to={`/page/${prevPage}`} className="prevNext"> Previous </Link>
                :
                <a disabled className="disabled"> Previous </a>
            }

            <div class="numberPage">
                {hasPrevPage
                    ? <Link to={`/page/${prevPage}`}><button>{prevPage}</button></Link>
                    : <a disabled><button disabled> ... </button></a>
                }
                <a ><button class="currentPage">{page}</button></a>
                {hasNextPage
                    ? <Link to={`/page/${nextPage}`}><button>{nextPage}</button></Link>
                    : <a disabled><button disabled> ... </button></a>
                }
            </div>

            {hasNextPage 
            ?<Link to={`/page/${nextPage}`} class="prevNext"> Next </Link>
            :<a disabled class="disabled"> Next </a>
            }
        </div>
    )
}
export default Pagination