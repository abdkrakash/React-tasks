// import Seconed from "./Components/seconed"
// import FruitsList from "./Components/fruit"
import Task1 from "./Components/task1"
import Task2 from "./Components/task2"
import Task3 from "./Components/task3"
import Task4 from "./Components/task4"
import Task5 from "./Components/task5"
import Task6 from "./Components/Task6";
import Task7 from "./Components/task7"
import Task8 from "./Components/task8"
import Task9 from "./Components/Task9"
import Task10 from "./Components/task10"
// import Task11 from "./Components/task11"
import Task11 from "./Components/Task11"; 
import Task12 from "./Components/task12"; 


export default function App() {
  const numbers = [1, 2, 3, 4, 5];
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="App">
      {/* <Seconed /> */}
{/* <FruitsList/>  */}
{/* <h1 style={{backgroundColor:"green"}}>hi</h1> */}
<Task1/>
<Task2/>
<Task3/>
<Task4/>
<Task5/>
<Task6/>
<Task7/>
<Task8/>
<Task9/>
<Task10/>
{/* <Task11/> */}
<Task11 numbers={numbers} />
<Task12 nums={nums} />




    </div>
  );
}



