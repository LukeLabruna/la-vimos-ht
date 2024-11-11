import { Link, useLocation } from "react-router-dom"
import { useEffect } from "react"
import "./NavBar.css"

const NavBar = ({handleChange, setSearch}) => {

  const location = useLocation()

  useEffect(()=> {
    setSearch(null)
  }, [location.pathname])

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