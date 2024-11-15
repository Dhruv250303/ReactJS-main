import React from "react";
import Fruit from "./Fruit";

function Fruits() {
  let fruits = [
    { name: "Apple", price: 200 },
    { name: "Mango", price: 150 },
    { name: "Banana", price: 60 },
    { name: "Kiwi", price: 160 },
  ];
  return (
    <div>
      {fruits.map((fruit) => (
        // <li key={fruit.name}>
        //   {fruit.name} --- {fruit.price}
        // </li>
        <Fruit name = {fruit.name} price = {fruit.price} />
      ))}
    </div>
  );
}

export default Fruits;
