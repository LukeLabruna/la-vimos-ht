import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <Link to={"/"}><img src="/img/hoytrasnoche-logo-blanco.png" alt="logo hoy trasnoche" /></Link>
            <p>© 2024 Hoy Trasnoche. Todos los derechos reservados.</p>
            <div className="socialMedia">
                <p>LukeLabruna</p>
                <a target="_blank" href="https://www.linkedin.com/in/lucaslabruna/"><i class="fa-brands fa-linkedin"></i></a>
                <a target="_blank" href="https://github.com/LukeLabruna"><i class="fa-brands fa-square-github"></i></a>
            </div>
        </footer>
    )
}
export default Footer