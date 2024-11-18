import { Link, useLocation } from "react-router-dom"
import { useEffect, useRef } from "react"
import "./NavBar.css"

const NavBar = ({handleChange, setSearch}) => {

  const inputRef = useRef(null);
  const location = useLocation();


  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = ""
    }
    setSearch(null)
  }, [location.pathname])

  return (
    <header>
        <Link to={"/"}>
        <img src="/img/hoytrasnoche-logo.png" alt="" />
        </Link>
        <input type="text" placeholder="Buscar pelicula..." onChange={(e) => handleChange(e.target.value)} ref={inputRef}/>
    </header>
  )
}
export default NavBar