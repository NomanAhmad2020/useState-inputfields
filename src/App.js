import React from "react";
import { useState} from 'react';
import "./style.css";

 const App = () => {

  const [name,setName] = useState("");
  const [city,setCity] = useState("");



  const inputEvent = () => {
        console.log("clicked")
  };
  const inputCityEvent = (event) => {
    setCity(event.target.value);
    //console.log(event.target.value);

};
 
  return (
    <>
    <div>
    <h1>Hello {name}! Welcome in {city}</h1>

     <input type="text"  placeholder ="Enter your name" 
      onChange={inputEvent}
     />  
     <br></br>
     <input type="text"  placeholder ="Enter your city" 
      onChange={inputCityEvent} 
      value ={city}
     />  
     <br></br>
     <button > Click Me </button>
    </div>
    </>
  );
};
export default App;

// inputEvent console.log shows only clicked , if we want what is pass in input we use event.
// the inputCityEvent shows each type character in console.