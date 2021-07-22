import React, {useState} from "react";



function Item({ name, category }) {
  const [isOn, setIsOn]= useState(false)
  function handleClick(){
    setIsOn(isOn => !isOn)
  }
  
  const inCart = isOn ? "in-cart" : ""
  const btnLabel = isOn ? "Remove From Cart" : "Add to Cart"
 
  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {handleClick}>{btnLabel}</button>
    </li>
  );
}

export default Item;
