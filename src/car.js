import { useParams} from "react-router-dom";
import {getCar} from "./data"

function Car(){
  
  let params = useParams()
  let car = getCar(parseInt(params.carId));
  
  return(
    <>
    <div className="singleCar" key={car.number}>
      <h5>{car.model}</h5>
      <img style={{width:"700px"}} src={car.image} />
      <h5>Interior</h5>
      <div className="interior-images">
      <img src={car.interior[0]} />
      <img src={car.interior[1]} />
      </div>
      <h4 className="engine" >{car.engine}</h4>
      <p >{car.description}</p>
    </div>
    </>
    )
}
export {Car}