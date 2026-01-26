 import React from "react";
 import Pizza from "./Pizza";
 import { pizzaData } from "../data/pizzaData";

 function PizzaList() {
   return (
    <ul className="pizza-list">
      {pizzaData.map((pizza) => (
     <Pizza pizzaObj={pizza} key={pizza.name} />
     ))}
     </ul>
   ); 
}

export default PizzaList;
