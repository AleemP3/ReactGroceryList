import React from "react";
import Grocerystyle from "./Grocerystyle";
const Grocery = (props) => (
  <div>
    <h2>
      {props.name}
    </h2>
    <ul>
      {props.items.map(item => <Grocerystyle key={item.id} {...item} todoClick={props.todoClick} />)} 
    </ul>
  </div>
);

export default Grocery; 