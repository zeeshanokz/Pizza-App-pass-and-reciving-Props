import React from "react";
import Pizza from "./Pizza";
import { pizzaData } from "../data/pizzaData";

function PizzaList() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return  numPizzas > 0 ? (
    <ul className="pizza-list">
      {pizzas.map((pizza) => (
        <Pizza pizzaObj={pizza} key={pizza.name} />
      ))}
    </ul>
  ) : null;
}

export default PizzaList;
