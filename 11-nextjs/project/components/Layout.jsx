import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      
      <div className="content">
        <h1>This is layout!</h1>
        {children}
      </div>
     
    </>
  );
};

export default Layout;