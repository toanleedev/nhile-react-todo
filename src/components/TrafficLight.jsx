import React, { useState } from 'react';
import Light from './Light';

function TrafficLight() {
  const [color, setColor] = useState('red');

  const handleNext = () => {
    if (color === 'red') {
      setColor('green');
    } else if (color === 'green') {
      setColor('orange');
    } else {
      setColor('red');
    }
  };

  return (
    <div>
      <h3>Traffic light</h3>
      <button className='light-button' onClick={handleNext}>
        Next
      </button>
      <div className='light-container'>
        <Light color={color === 'red' ? 'red' : 'transparent'} />
        <Light color={color === 'orange' ? 'orange' : 'transparent'} />
        <Light color={color === 'green' ? 'green' : 'transparent'} />
      </div>
    </div>
  );
}

export default TrafficLight;
