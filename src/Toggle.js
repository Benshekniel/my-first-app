import React, { useState } from 'react';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleMessage = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <p>{isOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggleMessage}>Toggle</button>
    </div>
  );
};

export default Toggle;
