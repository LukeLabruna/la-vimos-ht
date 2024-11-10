import { Link } from "react-router-dom"
import "./NavBar.css"

const NavBar = ({handleChange}) => {

  return (
    <header>
        <Link to={"/"}>
        <img src="/img/hoytrasnoche-logo.png" alt="" />
        </Link>
        <input type="text" placeholder="Buscar pelicula..." onChange={(e) => handleChange(e.target.value)} />
    </header>
  )
}
export default NavBar