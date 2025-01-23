import React from 'react';

import pic from '../images/abd.jpg';

function Task5({ email, name }) {
  return (
    <div style={{ textAlign: 'center',  backgroundColor: 'lightblue' }}>
      <img
        src={pic}
        alt=""
        style={{ borderRadius: '50%', width: '300px' , height: '300px' }}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
export default Task5;
