import { useState } from "react";
import Counter from './components/Counter';
import Addition from './components/Addition';

import './App.css';

function App() {
  let [page, setPage] = useState('Counter')

  if(page === 'Addition')
  return (
    <>
      <nav>
        <button onClick={() => setPage('Counter')}>Counter</button>  
        <button onClick={() => setPage('Addition')}>Addition Game</button>  
      </nav>

      <Addition/>
    </>
  )
  else
  return (
    <>
      <nav>
        <button onClick={() => setPage('Counter')}>Counter</button>  
        <button onClick={() => setPage('Addition')}>Addition Game</button>  
      </nav>

      <Counter/>
    </>
  )

}

export default App