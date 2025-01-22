// import React, { useState } from 'react';

// const ThemeToggle = () => {
//   const [isDark, setIsDark] = useState(false);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//   };

//   const theme = isDark ? 'Dark' : 'Light';
//   const backgroundColor = isDark ? '#333' : '#fff';
//   const textColor = isDark ? '#fff' : '#000';

//   return (
//     <div style={{ backgroundColor, color: textColor, padding: '20px', textAlign: 'center' }}>
//       <p>  current theme is {theme}</p>
//       <button onClick={toggleTheme} style={{margin:"10px", width:"200px"}}>
//       toggle Theme
//       </button>
//     </div>
//   );
// };

// export default ThemeToggle;

import React, { useState } from "react";

export default function Task11() {
  const [theme, setTheme] = useState("white");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "white" ? "black" : "white"));
  };

  return (
    <div
      style={{
        backgroundColor: theme,
        color: theme === "white" ? "black" : "white",
        
      }}
    >
      <button 
        onClick={toggleTheme} 
        aria-label="Toggle between light and dark theme" 
        style={{
         
          backgroundColor: theme === "white" ? "black" : "white",
          color: theme,
          
        }}
      >
        Toggle Theme
      </button>
      <p >current theme is</p>
    </div>
  );
}


//*__* يشبه جدا هاد المثال للمثال السابق لكن بدل ما يغير اللون يغير الثيم كامل  وسلامتكم
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


