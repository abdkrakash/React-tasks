      import React,{useState} from 'react'

export default  
    function App() {
        const [name, setName] = useState('');
        const [age, setAge] = useState(0);
      
        return (
          <div>
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="name" />
         
            <input type="number" onChange={(e) => setAge(2025-e.target.value)} placeholder="age" />
             {/* Date.now() */}
            <p>name: {name}</p>
            <p>age: {age}</p>
          </div>
        );
      }

// import React,{useState} from "react";

// function Con(){
// const[state, setState] = useState(0);
// const  increment=()=> setState(state+1)
// const  descrement=()=> setState(state-1)

// return( 
//     <div>
//         <h1>Counter</h1>
//         <h1>{state}</h1>
//         <button onClick={increment}>Increment</button>
//         <button onClick={descrement}>Decrement</button>
//     </div>
// )
// }
// export default Con;




// ***************************************************************************
// import React, { useState } from 'react';

// function ColorChanger() {
//   const [color, setColor] = useState('black'); 

//   const changeToRed = () => setColor('red'); 
//   const changeToBlue = () => setColor('blue'); 
//   const changeToGreen = () => setColor('green'); 

//   return (
//     <div>
//       <h1 style={{ color: color }}>We are Group One </h1>
//       <button onClick={changeToRed}>Red</button>
//       <button onClick={changeToBlue}>Blue</button>
//       <button onClick={changeToGreen}>Green</button>
//     </div>
//   );
// }

// export default ColorChanger;
//   state is a variable that holds the state of the component.
//  setState is a function that updates the state of the component.
// useState is a hook that allows you to have state variables in functional components.