import logo from "./image/logo.png" ;

import { Link } from "react-router-dom"
import './App.css'
function Header (){
  return(
   <>
   

    <div className="header-container">
     <div className="logo">
       <img src={logo} alt="logo" />
     </div>
           
       <nav className='navbar'>
         <ul>
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="/about">About</Link>
           </li>
           
         </ul>
       </nav>
      
    </div>
    </>
  )
}

export {Header}