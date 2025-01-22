import React from "react";

const FruitsList = () => {
  const fruits = ["Apple", "Banana", "Cherry", "Date", "Mango"];

  return (
    <div style={{backgroundColor:"red" , color:"white"}}> 
      <h2 style={{backgroundColor:"black"}}>Fruits List:</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li> 
        ))}
      </ul>
    </div>
  );
};

export default FruitsList;