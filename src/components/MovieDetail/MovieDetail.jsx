import "./MovieDetail.css"

const MovieDetail = ({ film_year, episode_name, country_club, poster_link, episode_number, embed_link, episode_description, original_film_name }) => {
    return (
        <div className="movieDetail">
            <h2> {original_film_name} {film_year}</h2>
            <div>
                {poster_link !== "no poster" && <img src={poster_link} alt="" />}
                <div>
                    <h3>Episodio {episode_number}: <span>"{episode_name}"</span> {country_club ? "del country club" : "del gratis"} </h3>
                    <p>{episode_description}</p>
                    {country_club
                        ? <>
                            <p>Porque la pusiste toda!</p>
                            <iframe src={embed_link} width="100%" height="190" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </>
                        : <iframe src={embed_link} width="100%" height="190" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    }
                </div>
            </div>
        </div>
    )
}
export default MovieDetail