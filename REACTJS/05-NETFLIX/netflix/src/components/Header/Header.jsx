function Header() {

    return (
        <nav className="navbar">
            <div className="navbar_brand">
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="logo" /> 
            </div>  
            <div className="navbar_nav_items">
                <div className="nav__item">
                    <div className="dropdown__container">
                        <i className="fas fa-globe">
                            ::before == $0
                        </i>
                        <select name="languages" id="languagesSelect" className="language__drop__down">
                            <option value="english" selected style={{color : "black"}}>
                                English
                            </option>
                            <option value="hindi" style={{color : "black"}}>
                                हिन्दी
                            </option>
                        </select>
                    </div>
                </div>
                <div className="nav__item">
                    <button className="signin__button">Sign in</button>
                </div>
            </div>
        </nav>
    )
  }

  export default Header;