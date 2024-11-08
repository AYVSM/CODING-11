import {BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useEffect } from 'react';
import Header from "./components/Header/Header";

import Blog from "./pages/Blog"
import News from "./pages/News";
import NewBlog from "./pages/NewBlog";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";

function App() {

  return (
    <>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="home" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="news" element={<News />} />
          <Route path="about" element={<About />} />
          <Route path="blogs/create" element={<NewBlog />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )

}

export default App
