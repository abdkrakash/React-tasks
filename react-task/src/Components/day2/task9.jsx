import React, { useState } from 'react';

const ToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{textAlign: 'center'}} >
      <button onClick={toggleVisibility} style={{margin:"10px", width:"200px"}}>
        {isVisible ? 'Hide Text' : 'Show Text'}
      </button>
      {isVisible && <p style={{padding:"10px"}}>What is hidden is greater!</p>}
    </div>
  );
};

export default ToggleVisibility;