function Seconed() {
  const students = [
    { id: 1, name: "Karkash", age: 27 },
    { id: 2, name: "Raneem", age: 23 },
    { id: 3, name: "Rawan", age: 35 },
    { id: 4, name: "Mohamd", age: 18 },
    { id: 5, name: "Salspeel", age: 18 },
  ];
  
  const name = "Team";
  return (
    <div className="Seconed">

      <h1>welcom {name} </h1>
      
      <div>
        <h2>Students List:</h2>
        <ul>
        
          {students.map((team) => (
           
                <li key={team.id}>
              Name: {team.name}, Age: {team.age}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
export default Seconed;
