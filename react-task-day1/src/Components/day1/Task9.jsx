import React from "react";

export default function task9(){
 
  const students = ["students1", "students2", "students3", "students4", "students5"];

  return (
    <div > 
      <ul>
        {students.map((students, index) => (
          <li key={index}>{students}</li> 
        ))}
      </ul>
    </div>
  );
};