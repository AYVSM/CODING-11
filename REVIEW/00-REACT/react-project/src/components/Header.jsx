function Header() {
    const headerStyle = {
      backgroundColor : "Salmon"
    }
  
    const ulStyle = {
      listStyleType : "none",
      display : "flex",
      justifyContent : "center",
      alignItems : "center",
      gap : "50px",
      padding : "20px 0px"
    }
  
    return (
      <header style={headerStyle}>
        <ul style={ulStyle}>
          <li>Home</li>
          <li>About</li>
          <li>Content</li>
        </ul>
      </header>
    )
  }

  export default Header;