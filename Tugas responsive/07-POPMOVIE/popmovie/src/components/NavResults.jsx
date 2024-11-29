function NavResults({movies}){
    return(
      <p className="num-results">
        Found <strong>{movies?.length}</strong> Results
      </p>
    )
  }
export default NavResults