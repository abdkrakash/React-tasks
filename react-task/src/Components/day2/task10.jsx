import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />

      <input
        type="number"
        onChange={(e) => setAge(2025 - e.target.value)}
        placeholder="Your year of birth"
      />
      {/* Date.now() */}
      <p>name: {name}</p>
      <p>age: {age}</p>
    </div>
  );
}
