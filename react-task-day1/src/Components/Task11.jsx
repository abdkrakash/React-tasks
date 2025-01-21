import React from "react";

const Task11 = ({ numbers }) => {

  return (
    <div>
      <ul>
        {numbers.map((number, index) => (
          <li style = {{
            color: "black",
            fontWeight: "bold",
            
            padding: "5px",
            margin: "10px",

           
          }} key={index}>
            <span style = {{ backgroundColor: "yellow"}}>
              Doubled number {number} is {number * 2}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task11;
