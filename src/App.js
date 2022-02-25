
import React from "react"
import './App.css';
import { Outlet } from 'react-router-dom';

//pages
import {Header} from "./header";
import { Home } from "./home";
import { About } from "./About";




function App() {
 
  return (
    <section className='App-section'>
      <Header home={Home} about={About} />
    
      <Outlet />
     
      
     
    
    </section>
  );
}

export {App};
