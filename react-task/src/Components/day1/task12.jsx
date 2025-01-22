import React from "react";

const task12 = ({ nums }) => {
  const evenNumbers = nums.filter((num) => num % 2 === 0);
  const oddNumbers = nums.filter((num) => num % 2 !== 0);

  return (
    <div>
      <ul>
        {evenNumbers.map((num, index) => (
          <li key={index}>Even: {num}</li>
        ))}
      </ul>

      <ul>
        {oddNumbers.map((num, index) => (
          <li key={index}>Odd: {num}</li>
        ))}
      </ul>
    </div>
  );
};

export default task12;
