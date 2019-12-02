import React from "react"; 

const Grocerystyle = (props) => {
  return (
    <li 
    style={props.purchase ? {...styles.grocery, ...styles.purchase} : styles.grocery}
    onClick={() => props.todoClick(props.id)}>
      {props.name}
    </li>
    )
  };
  const styles = {
    grocery: {cursor: "pointer", },
    purchase: {color: "grey", textDecoration: "line-through"}
  };

export default Grocerystyle;