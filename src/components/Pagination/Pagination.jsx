import "./Pagination.css"

const Pagination = ({ page, hasPrevPage, hasNextPage, prevPage, nextPage, handlePage }) => {
    return (
        <div className="pagination">
            {hasPrevPage ?
                <a onClick={() => handlePage(prevPage)} className="prevNext"> Anterior </a>
                :
                <a disabled className="disabled"> Anterior </a>
            }

            <div className="numberPage">
                {hasPrevPage
                    ? <a onClick={() => handlePage(prevPage)} ><button>{prevPage}</button></a>
                    : <a disabled><button disabled> ... </button></a>
                }
                <a ><button className="currentPage">{page}</button></a>
                {hasNextPage
                    ? <a onClick={() => handlePage(nextPage)} ><button>{nextPage}</button></a>
                    : <a disabled><button disabled> ... </button></a>
                }
            </div>

            {hasNextPage 
            ?<a onClick={() => handlePage(nextPage)} className="prevNext"> Siguiente </a>
            :<a disabled className="disabled"> Siguiente </a>
            }
        </div>
    )
}
export default Pagination