const Header = () => {
    const headerStyle = {
      display: 'flex',
      justifyContent: 'space-evenly',
    }
  
    return (
      <header>
        <nav style={{display: 'flex', justifyContent: 'space-between'}}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Doc</a>
          <a href="">Contact</a>
        </nav>
      </header>
    )
  }

  export default Header;