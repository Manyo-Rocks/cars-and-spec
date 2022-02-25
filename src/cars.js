import React,{useState} from "react"
import data from './data';
import {Link, Outlet} from "react-router-dom"

function Cars () {
const [searchCar, setSearchCar] = useState("")
 function handleSearch(e){
   setSearchCar(e.target.value)
 };
      const filtered = !searchCar
    ? data
    : data.filter((car) =>
        car.model.toLowerCase().includes(searchCar.toLowerCase())
      );   
  return(
    <>
    <section>

    <div className="search-container">
    <input 
    value={searchCar}
    onChange={handleSearch}
    className="searchbox"
    type='text'
    placeholder="search car.."/>
    </div>

    <div className="cars-container">
    {filtered.map((car) => {
        return (
          <div className="cars-wrapper"
         
           key={car.number}>         
          <img className='car-image' 
          src={car.image} alt="mercedez" />
          <div className="info">
          <p>{car.price}<br />
          {car.model}</p>
        <Link style={{fontSize: '1rem'}}
        to={`/cars/${car.number}`}>More details...</Link> 
        </div>
       
       </div>
      )
      })}
      <Outlet />
      </div>
    </section>
    </>  
    
  )
      
}


export {Cars}