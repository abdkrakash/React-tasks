import React from 'react'

function task3({ productName, price, description }) {
    return (
      <div  style={{
        backgroundColor: "green",
        color:"white",
        width: "400px",
        padding: "5px",
  
      }}>
        <h2 >Pc{productName}</h2>
        <h3>Price:900${price}</h3>
        <p > Bad device and not suitable for personal use{description}</p>
      </div>
    );
  }
 
  
export default task3