import { useState } from "react";

export default function Nav() {
  const [language, setLanguage] = useState("english");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar__brand">
            <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt="logo"
              className="brand__logo"
            />
          </div>

          <div className="navbar__nav__items">
            <div className="nav__item">
              <div className="dropdown__container">
                <i className="fas fa-globe"></i>
                <select
                  name="languages"
                  id="languagesSelect"
                  className="language__drop__down"
                  value={language} 
                  onChange={handleLanguageChange}
                >
                  <option value="english" style={{ color: "black" }}>
                    English
                  </option>
                  <option value="hindi" style={{ color: "black" }}>
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
      </header>
    </>
  );
}
