import "./NavBar.css"

const NavBar = ({handleChange}) => {
  return (
    <header>
        <img src="/img/hoytrasnoche-logo.png" alt="" />
        <input type="text" placeholder="Buscar pelicula..." onChange={handleChange} />
        <i className="fa-solid fa-magnifying-glass"></i>
    </header>
  )
}
export default NavBar