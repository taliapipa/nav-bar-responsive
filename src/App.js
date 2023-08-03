import './App.css'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <nav className='navBar'>
        <h1><AiOutlineMenu/></h1>
        <h1><AiOutlineClose/></h1>
        <div className='elementsNav'>
          <a href=''>Home</a>
          <a href=''>List</a>
          <a href=''>About</a>
        </div>
      </nav>
    </div>
  );
}

export default App;
