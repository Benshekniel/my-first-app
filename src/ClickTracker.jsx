import React, { useState } from 'react';

const ClickTracker = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <div className="click-tracker">
      <h2>Click Tracker</h2>
      <p>Number of clicks: {clickCount}</p>
      <button onClick={handleButtonClick}>Click me!</button>
    </div>
  );
};

export default ClickTracker;
