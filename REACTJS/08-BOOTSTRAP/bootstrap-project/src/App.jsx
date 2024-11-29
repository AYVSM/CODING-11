import { useState } from 'react';
import './App.css'

const Modal = () => {

  return (  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div> );
}

function App() {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <Modal />
      <button className='btn btn-link'>Blank Button</button>
      <div className='btn-group'>
        <button className='btn btn-primary'>Click Me!</button>
        <button className='btn btn-warning'>Warn Me!</button>
      </div>
      <button className='btn btn-outline-primary'>Outline Button</button>
      <button className='btn btn-outline-secondary custom'>Custom Button</button>

      <div className='alert alert-primary w-50 mt-5 mx-auto'>
        Contoh alert dengan Boostrap
      </div>
      <div className='alert alert-danger alert-dismissible w-25 mx-auto'>
        Contoh dismissing alert.
        <button className='btn-close' data-bs-dismiss="alert"></button>
      </div>
      <div className='card w-50 mx-auto card'>
        <img className='card-img-top img mx-auto' src="https://th.bing.com/th/id/OIP.3IewfCHfFv2YlrwuxItTrAHaJb?rs=1&pid=ImgDetMain" alt="..." />
        <div className='card-body'>
          <h5 className='card-title'>Judul Card</h5>
          <p className='card-text'>Contoh Deskripsi card</p>
          <a href="#" className='btn btn-primary'>Go somewhere</a>
        </div>
      </div>
    </> 
  ) 
}

export default App
