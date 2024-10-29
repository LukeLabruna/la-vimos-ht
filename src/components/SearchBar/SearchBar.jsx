const SearchBar = ({handleOnChange}) => {
  return (
    <div>
        <input type="text" onChange={handleOnChange} />
        <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  )
}
export default SearchBar