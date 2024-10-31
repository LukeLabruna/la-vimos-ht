import "./MovieDetail.css"

const MovieDetail = ({ film, film_year, episode_name, country_club, poster_link, episode_number }) => {
    return (
        <div className="movieDetail">
            <h2> {film} {film_year}</h2>
            <div>
                <img src={poster_link} alt="" />
                <div>
                    <p>Episodio: "{episode_name}" {country_club ? "del country club" : "del gratis"} </p>
                    <p>Número: {episode_number} </p>
                    {country_club
                        ? <p>Escuchalo en hoytrasnoche.com</p>
                        : <p>Escuchalo en tu app de podcast favorita</p>
                    }
                </div>
            </div>
        </div>
    )
}
export default MovieDetail