import { Outlet } from "react-router-dom";
import "/public/style.css";

function Header() {
    return (
      <>
      <nav>
          <div className="site-title">
              <img 
              width={121} 
              height={98} 
              src="https://fineproxy.org/wp-content/uploads/2023/08/Supercell-logo.png" 
              alt="Supercell logo" 
              />

            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/news">News</a></li>
              <li><a href="/blog">Blogs</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/blogs/create">New Blog</a></li>
            </ul>
          </div>

      </nav>
      
      <Outlet/>
      </>        
    )
}   

export default Header;