import { useState } from 'react'
import './App.css'
import Article from './components/Article';
import postsData from "./posts.json"

function App() {
  const [posts, setPosts] = useState(postsData);

  return (
    <>
    <h1>Simple Blog</h1>
    {posts.map((props, index) => (
      <Article {...props} key={index} />
    ))}
    </>
  )
}

export default App