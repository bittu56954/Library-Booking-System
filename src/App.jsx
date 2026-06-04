// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
 import heroImg from './assets/p.jpg';
// import './App.css'

import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Books from './components/Books';
import Register from './components/Register';
import Login from './components/Login';
import Contact from './components/Contact';
import Navbar from "./components/Navbar";

const router = createBrowserRouter([

 {
    path:"/",
    element: <div>
      <Navbar/>
      <Home/>
    </div>

  } , 
  {
    path:"/about",
    element: <div>
      <Navbar/>
      <About/>
    </div>
  } , 
  {
    path:"/books",
    element: <div>
      <Navbar/>
      <Books/>
    </div>
  },

  {
    path:"/contact",
    element: <div>
      <Navbar/>
      <Contact/>
    </div>
  },
  
  {
    path:"/register",
    element: <div>
      <Navbar/>
      <Register/>
    </div>
  },

  {
    path:"/login",
    element: <div>
      <Navbar/>
      <Login/>
    </div>
  }


])

function App() {
 

  return (
       <div>
<RouterProvider router={router} />
       </div>
  )
}

export default App
