import "./Pagination.css"

const Pagination = ({ page, hasPrevPage, hasNextPage, prevPage, nextPage, handlePage }) => {
    return (
        <div class="pagination">
            {hasPrevPage ?
                <a onClick={() => handlePage(prevPage)} className="prevNext"> Anterior </a>
                :
                <a disabled className="disabled"> Anterior </a>
            }

            <div class="numberPage">
                {hasPrevPage
                    ? <a onClick={() => handlePage(prevPage)} ><button>{prevPage}</button></a>
                    : <a disabled><button disabled> ... </button></a>
                }
                <a ><button class="currentPage">{page}</button></a>
                {hasNextPage
                    ? <a onClick={() => handlePage(nextPage)} ><button>{nextPage}</button></a>
                    : <a disabled><button disabled> ... </button></a>
                }
            </div>

            {hasNextPage 
            ?<a onClick={() => handlePage(nextPage)} class="prevNext"> Siguiente </a>
            :<a disabled class="disabled"> Siguiente </a>
            }
        </div>
    )
}
export default Pagination