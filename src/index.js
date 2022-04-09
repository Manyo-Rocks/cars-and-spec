import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';   
import {BrowserRouter,Route, Routes} from "react-router-dom";

//pages
  
import {About} from './About';
import {Car} from './car';
import {Cars} from './cars'
import {Home} from './home';

ReactDOM.render(
  
  
  <BrowserRouter> 
  <App />
  <Routes>
      <Route   path='/' index element={<Home />} />
      
      <Route  path="cars" element={<Cars />}>
        <Route  path= ":carId" element={<Car/>} />
      </Route>
      <Route exact path="about" element={<About />} /> 
    
    


    <Route  exact path="*" element={<p>There's nothing here!</p>}/>
    
  </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
;
