import './App.css'
import { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

function App() {

  const [showMenu, setShowMenu] = useState(false)


  return (
    <div className="App">
      <nav className='navBar'>
        <button onClick={()=> setShowMenu(!showMenu)}>
          {showMenu ? <AiOutlineMenu/> : <AiOutlineClose/>  }
        </button>
        <div className={`nav ${showMenu ? 'show-menu' : ''}`}>
          <a href=''>Home</a>
          <a href=''>List</a>
          <a href=''>About</a>
        </div>
      </nav>
    </div>
  );
}

export default App;
