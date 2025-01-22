import React,{useState} from "react";

function Con(){
const[state, setState] = useState(0);
const  increment=()=> setState(state+1)
const  descrement=()=> setState(state-1)

return( 
    <div>
        <h1><span style={{color:"red"}}>Death</span> counter
        </h1>
        <h1 style={{color:"red"}}>{state}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={descrement}>Decrement</button>
    </div>
)
}
export default Con;